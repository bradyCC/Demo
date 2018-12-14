/**
 * Created by brady on 2018/12/14.
 */
import {MessageBox} from 'element-ui'

/**
 * @param data Ajax返回需要验证的数据
 * @param needAlert needAlert 是否需要弹窗提示
 */
function checkBackData(data, needAlert = true) {
  if (data.code !== 0) {
    if (data.code === 3600 && needAlert) {
      MessageBox.alert(data.msg, {
        lockScroll: false,
        callback: () => {
          this.$router.push('/login')
        }
      })
    }
    if (needAlert) {
      MessageBox.alert(data.msg)
    }
    return false
  } else {
    return true
  }
}
export {
  checkBackData
}
