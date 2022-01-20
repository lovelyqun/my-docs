var raw = {
  "code": "00001100",
  "msg": "登录成功",
  "data": {
    "userId": "111",
    "userName": "admin",
    "realName": "测试用户",
    "email": null,
    "telephone": null,
    "avatar": null,
    "orgId": "1",
    "sss": 111,
    "orgName": "测试机构",
    "orgList": [{
      "orgEndTime": "2021-12-22 00:00:00",
      "orgId": "49747",
      "orgName": "摩尔研发软件有限公司",
      "DEPTID": "49747",
      "DEPTNAME": "摩尔研发软件有限公司"
    }],
    "roleList": [{
      "roleId": "1",
      "roleName": "开发员",
      "orgId": "1"
    }],
    "busiPermission": {
      "111111": [{}]
    },
    "dataType": "map"
  }
}

function translate(rawData) {
  console.log(rawData)
  return
  let result = rawData
  result.ext = {}
  let data = rawData.data
  let filterArr = ['userId', 'userName', 'realName', 'email', 'telephone', 'avatar', 'orgId', 'orgName', 'orgList', 'roleList', 'busiPermission']
  if (rawData.code == '1') {
    result['code'] = '00001100'
    result['ext'] = {}
  }
  if (data && Object.prototype.toString.call(data) === '[object Object]') {
    data.userInfo = {}
    Object.keys(data).forEach(key => {
      if (filterArr.find(item => item === key)) {
        if (key === 'userName') {
          data.userInfo['username'] = data[key]
        } else if (key === 'userId') {
          data.userInfo['id'] = data[key]
        } else if (key === 'roleList') {
          result.ext['roleList'] = data[key]
        } else {
          data.userInfo[key] = data[key]
        }
      }
    })
  } else {
    result = data
  }
  return result
}

let res = translate(raw)
// console.log(raw)
// console.log(res)

let request = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 100)
  })
}
request({
  a: 1
}).then(res => {
  console.log(res)
})