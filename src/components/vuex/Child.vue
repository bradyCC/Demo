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
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState({
      show: state => state.dialog
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
