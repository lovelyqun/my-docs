const getType = obj => Object.prototype.toString.call(obj)
const isType = (type, obj) => obj != null &&
  (Array.isArray(type) ? type : [type]).some(
    (t) => getType(obj) === `[object ${t}]`
  )
const isObject = obj => isType('Object', obj)
const isString = obj => isType('String', obj)
const isArray = obj => isType('Array', obj)
const isFunction = obj => isType('Function', obj)
const isNumber = obj => isType('Number', obj)
const isBoolean = obj => isType('Boolean', obj)
const isNull = obj => isType('Null', obj)
const isUndefined = obj => isType('Undefined', obj)
const isDate = obj => isType('Date', obj)
