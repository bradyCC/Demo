<template>
  <div class="example">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.id}} - {{item.name}}
        <input type="button" value="删除" @click="del(item.id)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Example',
  data () {
    return {
      list: [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'forth'}
      ]
    }
  },
  mounted () {

  },
  methods: {
    del (id) {
      this.list.some((item, index) => {
        if (item.id === id) {
          this.list.splice(index, 1)
          return true
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
