<template>
  <div class="computed">
    <h1>{{msg}}</h1>
    <!-- 字符串反转 -->
    <input type="text" v-model="msg"> reversedMsg：{{reversedMsg}}
    <!-- 计算总分 -->
    <ul>
      <li v-for="(item, index) in results" :key="index">Marks for {{item.name}}：{{item.marks}}</li>
      <li>Total Marks：{{totalMarks}}</li>
    </ul>
    <!-- 当前时间戳 -->
    <p>{{now}}</p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      msg: 'computed',
      results: [
        {name: 'English', marks: 70},
        {name: 'Math', marks: 80},
        {name: 'History', marks: 90}
      ]
    }
  },
  // 计算属性 - 有缓存
  computed: {
    // 字符串反转
    reversedMsg: {
      // getter()
      get () {
        // console.log('getter called')
        return this.msg.split('').reverse().join('')
      },
      // setter()
      set (newValue) {
        this.msg = newValue
      }
    },
    // 计算总分
    totalMarks () {
      let total = 0
      let me = this
      for (let i = 0; i < me.results.length; i++) {
        total += parseInt(me.results[i].marks)
      }
      return total
    },
    // 当前时间戳
    now () {
      return Date.now()
    }
  }
}
</script>

<style scoped>

</style>
