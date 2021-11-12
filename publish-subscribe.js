var event = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: function () {
    console.log(arguments)
    var key = Array.prototype.shift.call(arguments)
    var fns = this.clientList[key]
    if (!fns || fns.length == 0) {
      return false
    }
    var fn = fns[0]
    for (let i = 0; fn; fn = fns[i++]) {
      fn.apply(this, arguments)
    }
  }
}

var installEvent = function (obj) {
  for (let i in event) {
    obj[i] = event[i]
  }
}
var salesOffice = {}
installEvent(salesOffice)
salesOffice.listen('square88', function (price) {
  console.log('价格=', price)
})
salesOffice.listen('square100', function (price) {
  console.log('价格=', price)
})
salesOffice.trigger('square88', 800000)
salesOffice.trigger('square100', 1000000)