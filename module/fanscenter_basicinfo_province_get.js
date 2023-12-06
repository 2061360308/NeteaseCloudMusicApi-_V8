// 粉丝省份比例

export default (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/weapi/fanscenter/basicinfo/province/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/fanscenter/basicinfo/province/get',
    },
  )
}
