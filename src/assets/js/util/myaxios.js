/**
 * Created by brady on 2018/12/14.
 */
import {URLconfig} from '@/assets/js/config'
import axios from 'axios'

async function myaxios (option) {
  // 提交方法
  let method = option.method || 'post'
  // 提交url地址
  let url = `${URLconfig.HTTPURL}/${option.url}`
  // 提交数据类型
  let data = Object.prototype.toString.call(option.data) === '[object FormData]' ? option.data : JSON.stringify(option.data)
  // 响应的HTTP内容类型
  let ContentType = option.ContentType || 'application/x-www-form-urlencoded'
  // 跨域请求是否提供凭证信息(cookie、HTTP认证及客户端SSL证明等)
  let withCredentials = option.withCredentials === true ? option.withCredentials : false
  try {
    // 获取数据
    let backdata = (await axios({
      method,
      url,
      data,
      withCredentials,
      headers: {
        'Content-Type': ContentType
      }
    }))
    console.log(`${option.url}/`, backdata.data)
    // 验证数据
    let flag = this.checkBackData(backdata.data, option.needAlert)
    if (flag) {
      return backdata.data
    } else {
      return false
    }
  } catch (error) {
    alert(`服务器出错, 请联系管理员或稍后再试`)
    return false
  }
}
export {
  myaxios
}
