module.exports = function(Group) {
  Group.validatesUniquenessOf('name', {message: 'name is not unique'});
};
