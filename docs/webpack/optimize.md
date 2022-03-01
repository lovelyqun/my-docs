### 如何提高webpack打包效率

 #### 量化打包效率
安装

       npm install --save-dev speed-measure-webpack-plugin
       
配置


        const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")

        const smp = new SpeedMeasurePlugin();

        const webpackConfig = smp.wrap({

        });



#### 添加缓存插件

##### webpack 5 可直接配置开启缓存


    module.exports = {
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
    },
  }

#####  低于webpack5 通过 hard-source-webpack-plugin插件
安装
   
    npm install --save-dev hard-source-webpack-plugin

配置

    const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
    module.exports = {
      plugins: [
        new HardSourceWebpackPlugin()
      ]
    }

