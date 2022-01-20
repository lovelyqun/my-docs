window.$docsify = {
  plugins: [
    function (hook, vm) {
      hook.init(function () {
        let firstLevel = document.querySelectorAll('.sidebar-nav>ul>li')
        const openStyle = {}
        firstLevel.forEach(item => {
          if (item.classList.contains(''))

            item.onclick = function () {
              if (item.children[1].style.display === 'none') {
                item.children[1].style.display = 'block'
              } else {
                item.children[1].style.display = 'none'
              }
            }
        })
        let secondLevel = document.querySelectorAll('.sidebar-nav>ul>li>ul')
        secondLevel.forEach(item => {
          item.style.display = 'none'
        })
      });

      hook.beforeEach(function (content) {
        // 每次开始解析 Markdown 内容时调用
        // ...
        return content;
      });

      hook.afterEach(function (html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        next(html);
      });

      hook.doneEach(function () {
        // 每次路由切换时数据全部加载完成后调用，没有参数。
        // ...
      });

      hook.mounted(function () {
        // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
      });

      hook.ready(function () {
        // 初始化并第一次加载完成数据后调用，没有参数。
      });
    }
  ]
};
var f = 1

function bb() {
  console.log(f)
}

function aa() {
  var f = 2
  bb()
}