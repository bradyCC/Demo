/**
 * Created by brady on 2018/12/14.
 */

/**
 * @param inputId input标签的id
 * @param imgId img标签的id
 * @param flag 是否进行图片大小验证以及图片尺寸验证，默认为验证
 * @returns {boolean}
 */
function previewImg (inputId, imgId, flag) {
  let oInput = document.getElementById(inputId)
  let oImg = document.getElementById(imgId)
  let file = oInput.files[0]

  if (file.length !== 0) {
    let fileType = file.type
    // 验证图片格式是否正确
    if (fileType !== 'image/gif' && fileType !== 'image/png' && fileType !== 'image/jpeg' && fileType !== 'image/jpg') {
      alert('请上传正确格式的图片')
      oInput.value = ''
      oImg.src = '/static/img/file_bg.png'
      return false
    }
    // 验证图片大小
    if (file.size > 2000000 && flag) {
      alert('请上传小于2M的图片')
      oInput.value = ''
      oImg.src = '/static/img/file_bg.png'
      return false
    }
  }
  // 读取图片
  let oReader = new FileReader()
  // 读取完成执行
  oReader.onload = function (e) {
    if (!flag) {
      oImg.src = e.target.result
    } else {
      // 验证上传的图片宽高
      let img = new Image()
      img.src = e.target.result
      img.onload = function () {
        if (img.width > 800 || img.height > 800) {
          alert('请上传800*800以内的图片')
          oInput.value = ''
          oImg.src = '/static/img/file_bg.png'
        } else {
          oImg.src = e.target.result
        }
      }
    }
  }
  oReader.readAsDataURL(file)
}
export {
  previewImg
}
