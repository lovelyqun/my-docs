##### iOS的webview有uiwebview和wkwebview的区别
从iOS8起，Apple推出了wkwebview，Safari默认使用wkwebview。
由于iOS13将uiwebview列入非公开api，并说明未来会禁止使用uiwebview的应用上架。所以从HBuilderX 2.2.5起，默认使用的是wkwebview，如果要切换为uiwebview，需要在manifest里或创建webview时的参数里指定kernel。
uni-app的app端视图层固定使用wkwebview。这个和微信小程序的策略一样，它在iOS上也是只能渲染在wkwebview下。
这两种webview各有利弊。
wk的问题是：不支持websql（iOS8、9上不支持，iOS10恢复支持）、不支持plus.navigator.setCookie、不支持webview的overrideresource方法、不支持js原生加密、在联网及本地文件读取等有各种跨域限制、wk第一次渲染速度略慢于uiwebview；（uni-app的js本来也不运行在webview里，所以无所谓这些限制）
但wkwebview的好处是：节省内存、滚动时懒加载的图片也可以实时渲染而uiwebview在滚动停止后懒加载的图片才能显示（滚动前就加载图片不受影响）、wkwebview的video播放支持AirPlay（uni-app的video组件是原生的，暂不支持ariplay）。
如果同时在一个app里使用ui和wk两种webview，注意2种webview之间的cookie、localstorage、session不共享，但plus.storage是共享的。
详细的wkwebview的使用注意参考：https://ask.dcloud.net.cn/article/36348

##### Android手机的webview，分系统webview和x5两种
Android系统webview
系统webview，是默认的webview，及Google的Android system webview，它自带于手机rom中，所有依赖系统webview的应用都调用这个webview。
在Android4.4以前，webview是Android webkit 浏览器内核，很多HTML5标准语法不支持，比如indexeddb、webgl等，canvas性能也非常差。
Android4.4起，变成了chromium内核，内核版本是chrome30，性能和现代语法支持大幅提升。
从Android5开始，webview脱离rom可单独更新，伴随着chrome的发版，google会在google play store上同步更新Android system webview。
由于google play store被墙，国内用户可通过华为应用市场的镜像下载安装最新版Android system webview。http://a.vmall.com/app/C10730262
也有个别国产rom改坏了这块的机制，使得自身的system webview无法独立安装升级。
目前国内的Android5以上手机webview版本差异很大，从chrome37一直跨度到60，手机用户侧使用了到底是哪个版本是不一定的。
所以HBuilder的开发者需要注意，尽量不要使用chrome40以后的新增的语法，使用普通常规的写法完成业务开发。

##### 关于如何查看Android手机端webview的版本：

日志里查ua
在系统设置里找到所有应用，显示隐藏系统进程，在里面找到Android system webview，显示的版本即为chrome版本。
Android手机默认浏览器和webview的区别
国外品牌的安卓手机，自带浏览器就是chrome。而国内安卓手机，自带浏览器大多是QQ浏览器、UC浏览器的贴牌，极个别是自己改造chromium。
所以手机自带的浏览器并不等于webview，在一个平台可运行，不代表另一个平台可兼容。
QQ、UC、360等浏览器也基本是基于chromium做改造，不同版本的浏览器其使用的chromium内核版本也不一样。具体可以打印ua查看。
注意夜神等安卓模拟器的Android版本是4.4，很多新语法都不支持。
如果你有影响用户的能力，为了给用户更好的体验，可以引导Android用户安装最新版Android system webview。应用宝、华为、金立等应用市场均可下载这个apk，或者翻墙到google play store。
在华为、小米、金立手机上，wifi下会自动更新Android system webview。
尤其是有些Android5用户使用的Android system webview 37版本，有硬件加速bug，闪屏花屏，此时升级webview即可解决。
有人问可否在打包时直接集成新版Android system webview，减少浏览器兼容问题？
webview体积至少50M起，体积实在太大了。有兴趣的开发者可以自己研究离线打包。
倒是可以这样：js里判断当前手机是Android5以上，且webview版本过低，比如低于40（ua可以判断），可以提醒用户是否升级webview，然后引导用户去之前贴出的地址下载更新webview。
但不管怎么样，尽量少写可能遇到兼容性问题的代码。
Android App也可以使用x5 webview
从HBuilderX 2.5.3起，支持使用腾讯的x5内核，详见文档https://ask.dcloud.net.cn/article/36806

##### 各小程序平台的webview内核说明
各家小程序，在iOS上大多使用的是wkwebview内核，已知仅百度小程序是uiwebview。wkwebview是iOS的一部分，其版本根据iOS版本的不同而不同。可以在caniuse直接看到iOS版本对应的浏览器兼容问题。
Android上各家小程序使用的是基于chromium改造的浏览器内核。具体如下：
微信：老版微信使用的是x5，ua特征字符串有Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044903；后来微信团队自研了MWEB内核，ua特征字符串有Chrome/67.0.3396.87 XWEB/882 MMWEBSDK/190506
百度小程序：ua特征是Chrome/63.0.3239.83，并且包含baiduboxapp字符串
支付宝小程序：根据支付宝版本，chrome有57和69等版本，ua特征字符串有NebulaSDK
QQ小程序：根据QQ版本，chrome有66和68等版本，ua特征字符串有QQ/MiniApp
头条小程序：ua特征是Chrome/62，ua特征字符串有ToutiaoMicroApp
uni-app中，js方面不存在浏览器兼容问题，因为js都使用的是独立的js引擎，与webview无关，API也是仅小程序支持的API才可以使用。所以uni-app的浏览器兼容性问题，主要是css。注意不要使用太新的css就可以。