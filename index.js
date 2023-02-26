Array.prototype.checkFieldName = function (field) {
  let check = false,
    _this = this;

  _this.forEach((priority) => {
    if (!(field in priority)) {
      check = true;
    }
  });

  return check;
};

module.exports = (array, priorities) => {
  if (!Array.isArray(array) || !(priorities instanceof Object))
    throw Error("Validation Error => array or priorities");

  const { field, queries } = priorities;

  if (typeof field != "string" || !Array.isArray(queries))
    throw Error("Validation Error => field or queries");

  if (array.checkFieldName(field))
    throw Error("The sent field was not found in the array");
};
