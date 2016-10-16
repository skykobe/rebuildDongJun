var dj = {
  Router: function() {
    this.start = function(obj) {
      var fn = location.hash.split('#')[1];
      try {
        fn = ( fn ? fn : '' );
        obj[fn]()
      } catch (err) {
        console.log('没有对应的路由哦')
      }
      window.onhashchange = function() {
        var url = location.hash;
        if(url) {
          url = url.split('#')[1]
        } else {
          url = ''
        }
        for(var route in obj) {
          if(route == url) {
            obj[route]()
          }
        }
      }
    }
  },
  inserCmp: function(url, node, fn) {
    if(fetch) {
      fetch(url).then(function(res) {
        return res.text() // 把返回的数据转化为字符串数据
      }).then(function(data) {
        try {
          node.innerHTML = data
        } catch(err) {
          throw new Error("请传元素节点")
        }
        fn()
      })
    } else {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", url, true);
      xhr.onload = function(e) {
        node.innerHTML = this.responseText
      }
      xhr.send()
      fn()
    }
  },
  loadHtml: function(url, fn) {
    if(fetch) {
      fetch(url).then(function(res) {
        return res.text()
      }).then(function(data) {
        var o = new Object()
        fn.call(o, data)
      })
    } else {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", url, true);
      xhr.onload = function(e) {
        var o = new Object()
        fn.call(o, this.responseText)     
      }
      xhr.send()
    }
  },
  loadFile: function(url, type, callback) {
    if(type == 'image') {
      if(url instanceof Array) {
        url.forEach(function(n, index) {
          if(index == (url.length - 1) ) {
            this.imageLoad(item, callback)
          } else {
            this.imageLoad(item)
          }
        })
      }
    } else if(type == 'js') {
      this.jsLoad(url, callback)  //如果想一组组的JS文件加载，自己写，和上面的思路相似
    }
  },
  imageLoad: function(url, fn) {
    var img = new Image();
    img.src = url;
    img.addEventListener('load', function() {
      if(fn) {
        fn();
      }
    })
  },
  jsLoad: function(url, fn) {
    var script = document.createElement('script');
    script.src = url;
    script.addEventListener('load', function() {
      if(fn) {
        fn()
      }
    })
    document.body.appendChild(script)
  }  
}