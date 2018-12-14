/**
 * Created by brady on 2018/12/14.
 */
import { Message } from 'element-ui'

function validata (validataArr) {
  let flag = true
  validataArr.forEach(element => {
    if (!flag) return false
    switch (element.type) {
      // 处理不能为空
      case `isnull`:
        if (element.val === '' || element.val === null) {
          Message({
            message: `${element.name}不能为空`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 处理电话号
      case `phone`:
        if (!/^1[34578]\d{9}$/.test(element.val)) {
          Message({
            message: `请输入正确的${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 处理QQ号
      case `qq`:
        if (!/^[1-9]\d{4,13}$/.test(element.val)) {
          Message({
            message: `请输入正确的${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 处理6-20位数字字母的密码
      case `password`:
        if (!/^(?=.*[a-z])(?=.*\d).{6,20}$/i.test(element.val)) {
          Message({
            message: `密码格式为6-20位数字与字母组合`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 处理可以是数字与小数
      case `float`:
        if (!/^\d+(\.\d+)?$/.test(element.val)) {
          Message({
            message: `请输入正确的${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 处理必须是数字
      case `int`:
        if (!/^\d+$/.test(element.val)) {
          Message({
            message: `请输入正确的${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 判断图片地址是否包含http
      case `imgurl`:
        if (element.val.indexOf('http') === -1) {
          Message({
            message: `请上传${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 判断数字是0的话就不通过
      case `minint`:
        if (element.val === 0) {
          Message({
            message: `请输入${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
      // 处理必须是图片对象
      case `isimg`:
        if (typeof element.val !== 'object') {
          Message({
            message: `请上传${element.name}`,
            duration: 1500,
            type: 'error',
            showClose: 'true'
          })
          flag = false
        }
        break
    }
  })
  return flag
}
export {
  validata
}
