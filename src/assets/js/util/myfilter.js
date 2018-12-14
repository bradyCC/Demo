/**
 * Created by brady on 2018/12/14.
 */
let phoneFilter = str => {
  return str.replace(/^(\d{3})\d*(\d{4})$/, '$1****$2')
}
let shopFilter = str => {
  switch (str) {
    case '1':
      return '淘宝网'
    case '2':
      return '天猫'
    case '3':
      return '京东'
    case '4':
      return '拼多多'
    case '5':
      return '阿里巴巴'
  }
}
export {
  phoneFilter,
  shopFilter
}
