<template>
  <div>
    <!--<el-dialog :visible.sync="currentShow">-->
      <!--<span>这是一段信息</span>-->
    <!--</el-dialog>-->
    <el-dialog
      title="提示"
      :visible.sync="show.show"
      width="30%">
      <span>这是一段信息</span>
    </el-dialog>
    {{doneTodos}}
    {{doneTodosCount}}
    {{getTodoById}}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Child',
  // props: ['show'],
  // computed: {
  //   currentShow: {
  //     get () {
  //       return this.show
  //     },
  //     set (val) {
  //       this.$emit('update:show', val)
  //     }
  //   }
  // },
  computed: {
    ...mapState({ // 获取多个state时使用
      show: state => state.dialog
    }),
    ...mapGetters([ // 获取多个getters时使用
      'doneTodos', 'doneTodosCount'
    ]),
    // doneTodos () {
    //   return this.$store.getters.doneTodos
    // },
    // doneTodosCount () {
    //   return this.$store.getters.doneTodosCount
    // },
    getTodoById () { // 获取单个getters时使用
      return this.$store.getters.getTodoById(2)
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
