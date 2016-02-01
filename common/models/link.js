module.exports = function(Link) {
  Link.validatesUniquenessOf('url', {message: 'url is not unique'});
};
