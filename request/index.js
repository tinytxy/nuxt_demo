const url = 'https://space-api.check.icaremgt.com'

// 根据活动pageNumber获取活动页面信息
export async function getActivityPageList(params) {
  const response = await fetch(url + '/ACTIVITY/' + params.activityCode + '/pages', {
    methods: 'get',
    headers: {
      'x-token': params.token
    }
  })
  const responseJson = await response.json()
  return responseJson
}

// 根据模板pageNumber获取模板页面信息
export async function getActivityPageByNumber(params) {
  const response = await fetch(url + '/ACTIVITY/' + params.activityCode + '/pages/' + params.pageNumber, {
    methods: 'get',
    headers: {
      'x-token': params.token
    }
  })
  const responseJson = await response.json()
  return responseJson
}
