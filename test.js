function debounce(fn, delay = 500) {
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      // fn.apply(this,arguments)
      fn(arguments)
    }, delay)
  }
}

function sayHi(e) {
  console.log(this)
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', debounce(sayHi));

var setClass = function (idA, idB, idC) {
  var hasClass = $mw(idA).hasClass('tabLeft');
  if (!hasClass) {
    $mw(idA).addClass("tabLeft").removeClass('tabRight');
    $mw(idB).addClass("tabRight").removeClass('tabLeft');
    $mw(idC).addClass("tabRight").removeClass('tabLeft');
  }
  if ($("#providePannel").is(":hidden")) {
    $("#providePannel").show();
    $("#customPannel").hide();
  } else {
    $("#providePannel").hide();
    $("#customPannel").show()
  };
};