# rebuildDongJun
重构东君项目的雏形
<hr />
你们应该还记得那天我讲的几个要点吧。。。恩
### 现在就大致说一下新的几点
- 首先有些文件里边会有注释，可以看一下，我就不写在这里了。
- 用mock模拟数据进行重构，就不用强行让后台小伙伴帮我们跑起服务器了，但记得自己模拟的数据，放在mock_interface.js里边
- 就用你们喜欢的静态服务器跑起来就好，例如live-server

#### 最后，项目最后的打包构建
first：
```
npm install -g fis3
```
这个构建工具挺好用的。

then:
```
npm run build   或者   fis3 release -d [保存构建的项目的目录]
```
