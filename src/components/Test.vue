<template>
  <div class="test" style="width: 1200px;">
    <div class="upload">
    <input type="file" class="uploadinput">
    <img :src="imgurl" alt="">
  </div>
    <div class="outer-box" style="margin-top: 20px;">
      <div class="inner-box" ref="inner"></div>
      <div class="inner-content">{{remainTime}}</div>
    </div>
    <ul>
      <li style="margin-top: 20px;" v-for="(item, index) in dataList" :key="index">
        <div class="outer-box">
          <div class="inner-box" :style="count[index]"></div>
          <div class="inner-content">{{item.remainTime}}</div>
        </div>
      </li>
    </ul>
    <div class="el-col-20">
      <ul class="el_table_ul">
        <li v-for="(item, index) in list" :key="index">
          <el-table :data="Array(item)" border :header-cell-style="{'text-align':'center','font-weight':'normal'}" :cell-style="{'text-align':'center','color':'#333'}">
            <el-table-column prop="buyer_wangwang" label="买手旺旺号"></el-table-column>
            <el-table-column prop="type" label="申诉类型展示"></el-table-column>
            <el-table-column prop="reason" label="申诉理由"></el-table-column>
            <el-table-column label="凭证截图" prop="img1, img2" width="313">
              <template slot-scope="scope">
                <img :src="scope.row.img1" width="100" height="100" @click="showIMG(scope.row.img1)" style="margin-right: 20px;cursor: pointer;">
                <img :src="scope.row.img2" width="100" height="100" @click="showIMG(scope.row.img2)" style="cursor: pointer;">
              </template>
            </el-table-column>
            <el-table-column prop="state" label="状态">
              <template slot-scope="scope">
                <span v-if="scope.row.state == 0" style="color: #e45858;">待处理</span>
                <span v-if="scope.row.state == 1" style="color: #e45858;">处理中</span>
                <span v-if="scope.row.state == 2">完成</span>
              </template>
            </el-table-column>
          </el-table>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {MessageBox} from 'element-ui'

export default {
  name: 'Test',
  data () {
    return {
      finishTime: '7200', // 完成时间 2小时
      datetime: '', // 接手任务时间
      remainTime: '', // 剩余时间
      dataList: [
        {time: '2018-12-21 09:00:00'},
        {time: '2018-12-21 09:30:00'},
        {time: '2018-12-21 09:00:00'}
      ],
      count: [], // 样式
      list: [
        {shopname: '大众', taskno: 'sn222222', sub_taskno: '1234567890', buyer_wangwang: '大众', type: '让买手申请退款, 不放出', reason: '测试申诉理由', img1: 'static/img/1.jpg', img2: 'static/img/2.jpg', state: '0'},
        {shopname: '大众', taskno: 'sn222222', sub_taskno: '1234567890', buyer_wangwang: '大众', type: '让买手申请退款, 不放出', reason: '测试申诉理由', img1: 'static/img/1.jpg', img2: 'static/img/2.jpg', state: '1'},
        {shopname: '大众', taskno: 'sn222222', sub_taskno: '1234567890', buyer_wangwang: '大众', type: '让买手申请退款, 不放出', reason: '测试申诉理由', img1: 'static/img/1.jpg', img2: 'static/img/2.jpg', state: '2'},
        {shopname: '大众', taskno: 'sn222222', sub_taskno: '1234567890', buyer_wangwang: '大众', type: '让买手申请退款, 不放出', reason: '测试申诉理由', img1: 'static/img/1.jpg', img2: 'static/img/2.jpg', state: '0'}
      ],
      imgurl: `/static/img/file_bg.png`
    }
  },
  computed: {
  },
  mounted () {
    this.datetime = '2018-12-21 09:00:00'
    this.getTime()
    setInterval(this.getTime, 1000)

    this.getMoreTime()
    setInterval(this.getMoreTime, 1000)
  },
  methods: {
    imageuploaded (res) {

    },
    getTime () {
      let dateBegin = new Date()
      let dateEnd = new Date(this.datetime).getTime() + this.finishTime * 1000
      let dateDiff = dateEnd - dateBegin.getTime()
      this.$refs.inner.style.width = `${dateDiff / 1000 / 7200 * 100}%`
      let leave1 = dateDiff % (24 * 3600 * 1000)
      let hours = Math.floor(leave1 / (3600 * 1000)) < 10 ? '0' + Math.floor(leave1 / (3600 * 1000)) : Math.floor(leave1 / (3600 * 1000))
      let leave2 = leave1 % (3600 * 1000)
      let minutes = Math.floor(leave2 / (60 * 1000)) < 10 ? '0' + Math.floor(leave2 / (60 * 1000)) : Math.floor(leave2 / (60 * 1000))
      let leave3 = leave2 % (60 * 1000)
      let seconds = Math.floor(leave3 / 1000) < 10 ? '0' + Math.floor(leave3 / 1000) : Math.floor(leave3 / 1000)
      if (hours <= 0) {
        if (minutes <= 0) {
          this.remainTime = `${seconds}秒`
        } else {
          this.remainTime = `${minutes}分${seconds}秒`
        }
      } else {
        this.remainTime = `${hours}小时${minutes}分${seconds}秒`
      }
    },
    getMoreTime () {
      for (let i in this.dataList) {
        let dateBegin = new Date()
        let dateEnd = new Date(this.dataList[i].time).getTime() + this.finishTime * 1000
        let dateDiff = dateEnd - dateBegin.getTime()
        this.$set(this.count, i, `width: ${dateDiff / 1000 / 7200 * 100}%`)
        let leave1 = dateDiff % (24 * 3600 * 1000)
        let hours = Math.floor(leave1 / (3600 * 1000)) < 10 ? '0' + Math.floor(leave1 / (3600 * 1000)) : Math.floor(leave1 / (3600 * 1000))
        let leave2 = leave1 % (3600 * 1000)
        let minutes = Math.floor(leave2 / (60 * 1000)) < 10 ? '0' + Math.floor(leave2 / (60 * 1000)) : Math.floor(leave2 / (60 * 1000))
        let leave3 = leave2 % (60 * 1000)
        let seconds = Math.floor(leave3 / 1000) < 10 ? '0' + Math.floor(leave3 / 1000) : Math.floor(leave3 / 1000)
        if (hours <= 0) {
          if (minutes <= 0) {
            this.dataList[i].remainTime = `${seconds}秒`
          } else {
            this.dataList[i].remainTime = `${minutes}分${seconds}秒`
          }
        } else {
          this.dataList[i].remainTime = `${hours}小时${minutes}分${seconds}秒`
        }
      }
    },
    // 点击查看图片
    showIMG (url) {
      MessageBox.alert(`<img src='${url}' width='100%' >`, '', {
        dangerouslyUseHTMLString: true,
        showClose: false
      })
    }
  },
  watch: {
    remainTime (value) {
      console.log(value)
    },
    dataList (value) {
      console.log(value)
    }
  }
}
</script>

<style>
.upload {
  width: 160px;
  height: 160px;
  position: relative;
}
.upload input[type='file'] {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
}
.center {
  display: flex;
  align-items: center;
  justify-items: center;
}
.vue-toast {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0,0,0,.5);
  padding-top: 24%;
}
.vue-box {
  background: #fff;
  position: fixed;
  width: 90%;
  text-align: center;
  padding: .4rem 0rem;
  font-size:.32rem;
  color: #FF9178;
  border-radius: .2rem;
  left: 5%;
}
.toast-top {
  top: 0;
}
.toast-bottom {
  bottom: 0;
}
.toast-center {
  top: 50vh;
  margin-top: -1.12rem;
}

.outer-box {
  width: 10%;
  height: 30px;
  line-height: 30px;
  border: 1px solid #000;
  text-align: center;
  position: relative;
}
.inner-box {
  width: 100%;
  height: 30px;
  background: #ffcccb;
  position: absolute;
  z-index: 1;
}
.inner-content {
  width: 100%;
  position: absolute;
  z-index: 2;
}
.el_table_ul li {
  margin-top: 20px;
}
</style>
