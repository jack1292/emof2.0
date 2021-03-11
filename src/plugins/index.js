import {localAnStore} from '@/config/index'

const Plugin = {}
Plugin.install = function (Vue, options) {
  console.log(options)
  // 1. 添加全局方法或属性
  // Vue.myGlobalMethod = function () {
  //   // 逻辑
  // }

  // 2. 添加全局资源
  // Vue.directive('my-directive', {
  //   bind (el, binding, vnode, oldVnode) {
  //     // 逻辑
  //   }
  // })

  // 3. 注入组件选项
  // 设置只执行一次的代码
  let ones = true
  Vue.mixin({
    // 每一个页面的created执行之前都会执行这个页面
    created() {
      // 只执行一次
      if (ones) {
        ones = false
        // 获取本地数据
        this.$getData()
        // 设置监听
        this.$addWacth()

      }
      // 执行多次
      if (this.$route) {
        if (this.$route.meta && this.$route.meta.title) {
          this.$setTitle(this.$route.meta.title)
        }
      }
    },
    methods: {
      // 获取本地数据
      $getData () {
        localAnStore.map(item => {
          let value
          if (typeof item === 'string') {
            value = this.$getLocalStorage(item)
            this.$store.state[item] = value
          } else {
            if (item.type === 'localStorage') {
              value = this.$getLocalStorage(item.key)
            } else if (item.type === 'sessionStorage') {

              value = this.$getSessionStorage(item.key)

            } else if (item.type === 'cookie') {
              value = this.$getCookie(item.key)
            }
            this.$store.state[item.key] = value

          }

        })
      },
      // 根据配置设置监听
      $addWacth() {
        localAnStore.map(item => {
          this.$watch(function () {
            if (typeof item === 'string') {
              return this.$store.state[item]
            } else {
              return this.$store.state[item.key]
            }
          }, function (newVal) {
            if (typeof item === 'string') {
              this.$setLocalStorage(item, newVal)
            } else {
              if (item.type === 'localStorage') {
                this.$setLocalStorage(item.key, newVal)
              } else if (item.type === 'sessionStorage') {
                this.$setSessionStorage(item.key, newVal)
              } else if (item.type === 'cookie') {
                this.$setCookie(item.key, newVal, item.day)
              }
            }

          },{
            deep: true
          })
        })
      },
      // 设置localStorag
      $setLocalStorage (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
      },
      // 设置sessionStorage
      $setSessionStorage (key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value))
      },
      // 设置cookie
      $setCookie (key, value, exdays) {
        let day = 1
        if (exdays) {
          day = exdays
        }
        let d = new Date()
        d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000))
        let expires = "expires=" + d.toGMTString()
        document.cookie = key + "=" + value + "; " + expires
      },
      // 获取localStorag
      $getLocalStorage (key) {
        return JSON.parse(window.localStorage.getItem(key))
      },
      // 获取sessionStorage
      $getSessionStorage (key) {
        return JSON.parse(window.sessionStorage.getItem(key))
      },
      // 获取cookie
      $getCookie (cname) {
        let name = cname + "="
        let ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i].trim()
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
          }
        }
        return ""
      },
      // 设置title
      $setTitle (text) {
        document.getElementsByTagName("title")[0].innerText = text
      }
    }
  })
  // 4. 添加实例方法
  // Vue.prototype.$myMethod = function (methodOptions) {
  //   // 逻辑...
  // }
}
export default Plugin