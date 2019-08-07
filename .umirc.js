export default {
  plugins: [
    // 有参数
    [
      'umi-plugin-react',
      {
        dva: true, // 使用dva
        antd: true // 使用antd, 可以同时使用antd和antd-mobile中的组件
      }
    ]
  ]
};
