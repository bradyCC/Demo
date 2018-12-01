<template>
  <div class="temp">
    <!-- 使用mint-ui的Header组件实现首页的头部 -->
    <mt-header fixed title="首页">
      <router-link to="" slot="left">
        <i class="fa fa-times" aria-hidden="true"></i>
      </router-link>
      <router-link to="" slot="right">
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </router-link>
    </mt-header>
    <!-- 使用mint-ui的TabContainer组件实现首页的内容区 -->
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="home">
        首页
          <mt-button type="primary" plain size="large" @click.native="click">primary</mt-button>
        <mt-button type="danger" plain size="large" @click.native="test">danger</mt-button>
        <!--<i class="mint-toast-icon mintui mintui-more"></i>-->
        <!--<i class="mint-toast-icon mintui mintui-back"></i>-->
        <!--<i class="mint-toast-icon mintui mintui-search"></i>-->
        <!--<i class="mint-toast-icon mintui mintui-field-error"></i>-->
        <!--<i class="mint-toast-icon mintui mintui-field-warning"></i>-->
        <!--<i class="mint-toast-icon mintui mintui-success"></i>-->
        <!--<i class="mint-toast-icon mintui mintui-field-success"></i>-->

        <ul>
          <li v-for="(item, index) in list" :key="index">
            <img src="" alt="" v-lazy="item">
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="taskcenter">
        任务中心
        <!-- 使用mint-ui的Navbar组件实现标签页选项卡 -->
        <mt-navbar v-model="navbar">
          <mt-tab-item id="item1">选项一</mt-tab-item>
          <mt-tab-item id="item2">选项二</mt-tab-item>
          <mt-tab-item id="item3">选项三</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="navbar">
          <mt-tab-container-item id="item1">
            <!-- 使用mint-ui的Badge组件实现徽章 -->
            <mt-badge size="small">30</mt-badge>
            <mt-badge size="normal">10</mt-badge>
            <mt-badge size="large">10</mt-badge>
          </mt-tab-container-item>
          <mt-tab-container-item id="item2">
            <mt-badge type="primary">30</mt-badge>
            <mt-badge type="error">10</mt-badge>
            <mt-badge type="success">10</mt-badge>
            <mt-badge type="warning">10</mt-badge>
          </mt-tab-container-item>
          <mt-tab-container-item id="item3">
            <mt-badge size="large" color="#888">自定义颜色</mt-badge>
          </mt-tab-container-item>
        </mt-tab-container>
      </mt-tab-container-item>
      <mt-tab-container-item id="taskmanage">
        任务管理
        <!-- 试用mint-ui的Checklist组件实现复选框 -->
        <mt-checklist
          title="复选框列表"
          v-model="checklist"
          :max = '2'
          align = 'right'
          :options="['选项A', '选项B', '选项C']">
        </mt-checklist>

        <mt-radio
          title="单选框列表"
          v-model="radio"
          align = 'right'
          :options="['选项A', '选项B', '选项C']">
        </mt-radio>
      </mt-tab-container-item>
      <mt-tab-container-item id="personalcenter">
        个人中心
        <!-- 使用mint-ui的Fleld组件实现输入框 -->
        <!--<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>-->
        <!--<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>-->
        <!--<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>-->
        <!--<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>-->
        <!--<mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>-->
        <!--<mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>-->
        <!--<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>-->
        <!--<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>-->
      </mt-tab-container-item>
    </mt-tab-container>

    <!-- 使用mint-ui的Tabber组件实现首页的底部 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home" :class="selected == 'home'? 'tab_active': ''">
        <img slot="icon" src="@/assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="taskcenter" :class="selected == 'taskcenter'? 'tab_active': ''">
        <img slot="icon" src="@/assets/logo.png">
        任务中心
      </mt-tab-item>
      <mt-tab-item id="taskmanage" :class="selected == 'taskmanage'? 'tab_active': ''">
        <img slot="icon" src="@/assets/logo.png">
        任务管理
      </mt-tab-item>
      <mt-tab-item id="personalcenter" :class="selected == 'personalcenter'? 'tab_active': ''">
        <img slot="icon" src="@/assets/logo.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'
// import { Lazyload } from 'mint-ui'

export default {
  name: 'Index',
  data () {
    return {
      selected: 'home',
      navbar: 'item1',
      checklist: [],
      radio: '',
      list: ['']
    }
  },
  created () {
  },
  methods: {
    click () {
      this.$toast({message: '提示', iconClass: 'mint-toast-icon mintui mintui-success'})
      // Toast({
      //   message: '搜索',
      //   iconClass: 'mint-toast-icon mintui mintui-search',
      //   className: 'addClass'
      // })
    },
    test () {
      // MessageBox.confirm('操作成功').then(action => {
      //   console.log(action)
      // })
      MessageBox({
        title: '提示框',
        message: '提示内容',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'confirm',
        cancelButtonText: 'cancel',
        closeOnClickModal: true
      })
    }
  }
}
</script>

<style scoped>
.temp {
  margin-top: 40px;
}
.tab_active {
  color: #f2656e!important;
}
.addClass {
  color: #f2656e!important;
}
</style>
