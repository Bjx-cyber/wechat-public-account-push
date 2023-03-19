/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx89bf7e0cfb06d12c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a23e79eec0b090edb7dfccac6ac68747',

  PRIVATE_KEY: '437dda46769e4c71afaff1ccb89a0c46',
  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '元宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9mcU6ZMHuna40LK1UJnkXPjzvB4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Qo9ORCTACyQHVa09WbeAwK_CeaQh-YjfUfcNE-6fGqY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '元宝', year: '2001', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老赵头', year: '2000', date: '02-25',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '03-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-06' },
        // 结婚纪念日
        { keyword: 'birthday1', date: '2000-02-25' },
        { keyword: 'birthday2', date: '2001-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9mcU6ZMHuna40LK1UJnkXPjzvB4',
    }
  ],

}

module.exports = USER_CONFIG

