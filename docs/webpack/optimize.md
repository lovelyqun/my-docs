### 如何提高webpack打包效率

1. 检测打包效率:通过安装speed-measure-webpack-plugin
npm install --save-dev speed-measure-webpack-plugin

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")

const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({

});

2. 通过输出的数据分析打包原因


3. 添加缓存插件

webpack 5 可直接配置开启缓存


    module.exports = {
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
    },
  }

低于webpack5 通过 hard-source-webpack-plugin插件

    const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
    module.exports = {
      plugins: [
        new HardSourceWebpackPlugin()
      ]
    }

