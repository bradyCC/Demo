<template>
  <div class="index">
    <Header :active="1"></Header>
    <main class="main">
      <button @click="jump()">页面跳转</button>
      <button @click="click()">点击</button>
      <div>{{message}}</div>
      <div v-once>{{message}}</div>
      <ul>
        <li @click="test()">1. ES6 let块级作用域测试</li>
        <li @click="test1()">2. ES6 字符串常用方法测试</li>
        <li @click="test2()">3. ES6 函数默认参数测试</li>
        <li @click="test3()">4. ES6 箭头函数测试</li>
        <li @click="test4()">5. ES6 实现浅复制测试</li>
        <li @click="test5()">6. ES6 数据访问-解构测试</li>
        <li @click="test6()">7. ES6 展开运算符测试</li>
        <li @click="test7()">8. ES6 Generators测试</li>
        <li @click="test8()">9. ES6 类相关测试</li>
      </ul>

      <!-- 修饰符 -->
      <input type="text" v-model="message">
      <!-- 使用.lazy修饰符 将使用change事件进行同步 -->
      <input type="text" v-model.lazy="message">
      <!-- 使用.number修饰符 将用户输入的数据尝试转为number类型 -->
      <input type="text" v-model.number="num">
      <!--使用.trim修饰符 将用户输入的首尾空白过滤 -->
      <input type="text" v-model.trim="message">
      <p>{{message}}</p>

      <!-- 事件修饰符 -->
      <!-- .native修饰符 监听组件根元素的原生事件 -->
      <!-- .prevent修饰符 调用event.preventDefault() 阻止元素默认行为 -->
      <div id="app" @click.prevent="clickme">
        <!-- .stop修饰符 调用event.stopPropagation() 阻止事件冒泡 -->
        <section id="section" @click.stop="clickme">
          <!-- .self修饰符 只当事件从监听器绑定的元素本身触发时才触发回调 -->
          <div id="div" @click.self="clickme">
            <!-- .capture修饰符 添加事件监听器时使用capture模式 -->
            <span id="span" @click.capture="clickme">
                  <!-- .once修饰符 只触发一次回调 -->
                  <p id="p" @click.once="clickme">
                      用鼠标双击我，看看事件的传递真正顺序。
                  </p>
              </span>
          </div>
        </section>
        点击事件的响应顺序如下：{{msg}}
      </div>

      <!-- 按键修饰符 -->
      <!--.enter修饰符 当键盘按下enter时触发 -->
      <input type="text" @keydown.enter="show($event)" id="enter">
    </main>

    <!-- 实例方法 -->
    <ul v-for="(item, index) in list" :key="index">
      <li>{{item.name}}</li>
      <button v-show="!item.isDisplay" @click="isShow(index)">显示更多</button>
    </ul>

    <div id="watch">
      firstName:<input type="text" name="li"  v-model="firstName">
      <br>
      lastName:<input type="text" name="fei"  v-model="lastName">
      <p>fullName: {{fullName}}</p>
    </div>

  </div>
</template>

<script>
// 顶部导航
import Header from '@/components/public/Header'
export default {
  name: 'Index',
  props: ['content'],
  data () {
    return {
      flag: false,
      message: 'Message',
      num: 1,
      msg: '',
      list: [{
        name: '小颖'
      }, {
        name: '仔仔'
      }, {
        name: '黑妞'
      }, {
        name: '土豆'
      }],
      firstName: 'a',
      lastName: 'fei',
      fullName: 'a fei'
    }
  },
  components: {
    Header
  },
  created () {
    console.log(this.$data) // Vue 实例观察的数据对象
    console.log(this.$props) // 当前组件接收到的 props 对象
    console.log(this.$el) // Vue 实例使用的根 DOM 元素
    console.log(this.$options) // 用于当前 Vue 实例的初始化选项
    console.log(this.$parent) // 父实例，如果当前实例有的话
    console.log(this.$root) // 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己
    console.log(this.$children) // 当前实例的直接子组件
    console.log(this.$slots) // 用来访问被插槽分发的内容
    console.log(this.$scopedSlots) // 用来访问作用域插槽
    console.log(this.$refs) // 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例
    console.log(this.isServer) // 当前Vue实例是否运行于服务器
    console.log(this.$attrs) // 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定
    console.log(this.$listeners) // 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
  },
  watch: { // 监听
    firstName (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    jump () {
      this.$router.push({path: 'user', query: {plan: '123'}})
      console.log(this.$router)
      console.log(this.$route)
    },
    click () {
      this.message = '123'
    },
    test () {
      var funcs = []
      for (let i = 0; i < 10; i++) {
        funcs.push(function () {
          console.log(i)
        })
      }
      funcs.forEach(func => func())
    },
    test1 () {
      setInterval(() => {
        const now = new Date()
        const hours = now.getHours().toString()
        const minutes = now.getMinutes().toString()
        const seconds = now.getSeconds().toString()
        console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`)
      }, 1000)
    },
    test2 () {
      //   function action (num) {
      //     num = num || 200
      //     // 当传入num时，num为传入的值
      //     // 当没传入参数时，num即有了默认值200
      //     return num
      //   }
      //   console.log(action(0))
      function action (num = 200) {
        console.log(num)
      }
      action(0) // 0
      action() // 200
      action(300) // 300
    },
    test3 () {
      //   var calculate = function(x, y, z) {
      //     if (typeof x != 'number') { x = 0 }
      //     if (typeof y != 'number') { y = 6 }
      //
      //     var dwt = x % y
      //     var result
      //
      //     if (dwt == z) { result = true }
      //     if (dwt != z) { result = false }
      //
      //     return result
      // }

      var calculate = (x, y, z) => {
        x = typeof x !== 'number' ? 0 : x
        y = typeof y !== 'number' ? 6 : y
        return x % y === z
      }
      console.log(calculate(1, 2, 1))
    },
    test4 () {
      const objA = { name: 'cc', age: 18 }
      const objB = { address: 'beijing' }
      const objC = {} // 这个为目标对象
      const obj = Object.assign(objC, objA, objB)
      // 是的，目标对象ObjC的值被改变了。
      // so，如果objC也是你的一个源对象的话。请在objC前面填在一个目标对象{}
      // const obj = Object.assign({}, objC, objA, objB)

      // 我们将 objA objB objC objD obj obj1 分别输出看看
      console.log(objA) // { name: 'cc', age: 18 }
      console.log(objB) // { address: 'beijing' }
      console.log(objC) // { name: 'cc', age: 18, address: 'beijing' }
      console.log(obj) // { name: 'cc', age: 18, address: 'beijing' }
    },
    test5 () {
      const people = {
        name: 'lux',
        age: 20
      }
      const {name, age} = people
      console.log(`${name} --- ${age}`)
      const color = ['red', 'blue']
      const [first, second] = color
      console.log(first) // 'red'
      console.log(second) // 'blue'
    },
    test6 () {
      // 数组
      const color = ['red', 'yellow']
      const colorful = [...color, 'green', 'pink']
      console.log(colorful) // [red, yellow, green, pink]

      // 对象
      const alp = {first: 'a', second: 'b'}
      const alphabets = { ...alp, third: 'c' }
      console.log(alphabets) // { "first": "a", "second": "b", "third": "c"
    },
    test7 () {
      // 生成器
      function *createIterator () {
        yield 1
        yield 2
        yield 3
      }
      // 生成器能像正规函数那样被调用，但会返回一个迭代器
      let iterator = createIterator()
      console.log(iterator.next().value) // 1
      console.log(iterator.next().value) // 2
      console.log(iterator.next().value) // 3
    },
    test8 () {
      class Animal {
        constructor () { // 构造函数
          this.type = 'animal'
        }
        says (say) {
          console.log(this.type + ' says ' + say)
        }
      }
      let animal = new Animal()
      animal.says('hello')
      class Cat extends Animal { // 继承
        constructor () {
          super() // 指代父类的示例this对象，如子类不调用，会报错
          this.type = 'cat'
        }
      }
      let cat = new Cat()
      cat.says('hello')
    },
    clickme () {
      if (this.msg === '') {
        this.msg = event.currentTarget.id
      } else {
        this.msg = this.msg + '->' + event.currentTarget.id
      }
    },
    show (event) {
      alert(event.keyCode)
      console.log(event.target.id)
    },
    isShow (index) {
      this.$set(this.list[index], 'isDisplay', true)
      // this.$delete(this.list[index], 'name')
    }
  }
}
</script>

<style scoped>

</style>
