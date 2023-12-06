// 最近联系

export default (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/msg/recentcontact/get`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
