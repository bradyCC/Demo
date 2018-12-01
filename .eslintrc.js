// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项是用来指定eslint解析器选项
  parserOptions: {
    // 指定解析器 babel-eslint 围绕Babel解析器的包装器, 使其与ESLint兼容
    parser: 'babel-eslint'
  },
  // 此项用来指定环境的全局变量
  env: {
    // 浏览器全局变量
    browser: true
  },
  // 此项用来配置标准的js风格
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  // 此项是用来提供插件的, 下面这个配置是用来规范vue的
  plugins: [
    'vue'
  ],
  // add your custom rules here
  /**
   *  此项是用来配置eslint代码规则, 必须将规则ID设置为以下值之一：
   *  'off'或0      关闭规则
   *  "warn" 或 1 - 开启警告规则 (不影响退出代码)
   *  "error" 或 2 - 开启错误规则 (触发时退出代码)
   * */
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
