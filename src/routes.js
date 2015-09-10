module.exports = function (router) {
  var options = {
    v1: {prefixRoute: '/api/v1', version: 'v1'}
  };

  router.resources('screens', options.v1);
  router.resources('channels', options.v1);
  router.resources('contents', options.v1);

  router.resources('displays', options.v1);
  router.resources('statuses', options.v1);

  router.resources('situations', options.v1);
  router.resources('object-groups', options.v1);
  router.resources('objects', options.v1);
};
