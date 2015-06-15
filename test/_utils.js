module.exports = {
  // run 'env INGORE_TODOS=1 mocha test/* test/**/*' to disable
  // usage: it('...', $.todo) where $ = require('path/to/_utils')
  todo: function () {
    if (process.env.IGNORE_TODOS !== '1') {
      throw new Error('TODO: unimplemented test');
    }
  }
};
