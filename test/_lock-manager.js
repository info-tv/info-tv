var Promise = require('bluebird');
var _ = require('lodash');

/**
 * Lock manager handles co-operation and competition synchronizations via full
 * and shared locks.
 *
 * @example
 *
 * // in test.js
 * describe('...', function () {
 *   beforeEach(function () {
 *     // Choose either depending on case.
 *     // return LockManager.getLock('full');
 *     // return LockManager.getLock('shared');
 *   });
 *
 *   it('...', function () {
 *     // your sync or async test comes here
 *
 *     // free lock when the test will not need CPU time any more
 *     LockManager.free();
 *   });
 * });
 *
 * @constructor
 */
function LockManager() {
  this.pending = [];
  this.locks = 0;
  this.lockType = '';
}

/**
 * Free any lock and give the lock to next one.
 */
LockManager.prototype.free = function free() {
  this.locks--;
  this._resolve();
};

/**
 * Get new lock. Full lock blocks all others and shared lock allows other shared
 * locks to run simultaneously.
 *
 * @param type - type of the lock: full or shared
 * @returns {bluebird} Promise that will be fulfilled when lock got locked
 */
LockManager.prototype.getLock = function getLock(type) {
  var self = this;
  return new Promise(function (resolve) {
    self.pending.push({
      resolve: resolve,
      type: type
    });

    self._resolve();
  });
};

/**
 * Get all pending full locks.
 *
 * @returns {{resolve: Function, type: string}[]} full locks
 * @private
 */
LockManager.prototype._fullLocks = function _fullLocks() {
  return _.filter(this.pending, function (lock) {
    return lock.type !== 'full';
  });
};

/**
 * Resolve promise(s) and give lock(s).
 *
 * 1. If lock is free, give lock to next one.
 * 2. If lock is shared, give shared lock to all.
 *
 * @private
 */
LockManager.prototype._resolve = function _resolve() {
  if (this.pending.length > 0) {
    if (this.locks === 0) {
      this._resolveLock(this.pending.splice(0, 1)[0]);
    }

    if (this.lockType === 'shared') {
      _.each(this._sharedLocks(), this._resolveLock, this);

      this.pending = this._fullLocks();
    }
  }
};

/**
 * Resolve one promise and give lock.
 *
 * @param {{resolve: Function, type: string}} lock - pending lock
 * @private
 */
LockManager.prototype._resolveLock = function _resolveLock(lock) {
  this.locks++;
  this.lockType = lock.type;
  lock.resolve();
};

/**
 * Get all pending shared locks.
 *
 * @returns {{resolve: Function, type: string}[]} shared locks
 * @private
 */
LockManager.prototype._sharedLocks = function _sharedLocks() {
  return _.filter(this.pending, function (lock) {
    return lock.type === 'shared';
  });
};

module.exports = new LockManager();
