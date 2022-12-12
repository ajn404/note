## 授权



##### 通用说明

**OPEN-API 服务HOST:**

- 生产环境：API HOST `https://api.nobepay.com` (WEB管理后台: [https://www.nobepay.com](https://www.nobepay.com/))

注意事项:

- api 请求需通过如下授权接口(`{API_HOST}/open/api/v1/token/get`)获取请求token获得请求授权
- 为保证系统安全性，API请求需要携带nonce 和 timestamp, timestamp格式为毫秒级时间戳，nonce为请求方生成的随机字符串(小于等于64位)
- 请求头header Content-Type 应为 application/json 格式

##### 简要描述

- 授权

##### 请求URL

- `open/api/v1/token/get`

##### 请求方式

- POST

##### 参数

| 参数名    | 必选 | 类型   | 说明 |
| :-------- | :--- | :----- | ---- |
| appKey    | 是   | string | key  |
| appSecret | 是   | string | 秘钥 |

##### 请求示例

```
{
    "appKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "appSecret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

##### 返回参数说明

| 参数名       | 类型    | 说明              |
| :----------- | :------ | ----------------- |
| success      | boolean | 成功标志          |
| msg          | string  | 返回处理消息      |
| code         | integer | 返回代码          |
| +data        | object  | 返回数据对象 data |
| └accessToken | string  | token             |
| └expiresIn   | integer | 过期时间          |
| timestamp    | string  | 时间戳            |

##### 返回示例

```
  {
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "accessToken": "4984e63d-c21b-4eb9-a1fa-22a468f8838f",
        "expiresIn": 10800
    },
    "timestamp": 1644804880586
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 获取可用卡段



##### 简要描述

- 获取可用卡段

##### 请求URL

- `/open/api/v1/rest/card/vd/list`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 请求示例

```
open/api/v1/rest/card/vd/list
```

##### 返回参数说明

| 参数名                   | 类型    | 说明                                                         |
| :----------------------- | :------ | ------------------------------------------------------------ |
| success                  | boolean | 成功标志                                                     |
| msg                      | string  | 返回处理消息                                                 |
| code                     | integer | 返回代码                                                     |
| +data                    | array   | 返回数据对象 data                                            |
| └vid                     | string  | 卡供应商id                                                   |
| └cardBin                 | string  | 卡段                                                         |
| └desp                    | string  | 卡段描述信息                                                 |
| └posOrder                | integer | 排序，数字越小越靠前                                         |
| └cardCount               | integer | 总开卡数                                                     |
| └activeCardCount         | integer | 在线卡片数                                                   |
| +accountBalance          | object  | 该卡段账户余额，余额较低则该卡段需要联系银行充值，注意accountBalance可能为null, 表示当前卡段暂不支持获取账户余额或者因请求该卡段银行数据报错 |
| └currency                | string  | 目前统一为USD                                                |
| └amount                  | integer | 账户余额，1000 代表 $10.00                                   |
| +newCardMinDepositAmount | object  | 开卡最低充值金额                                             |
| └currency                | string  | 固定值 USD                                                   |
| └amount                  | integer | 最低充值金额，1000 代表 $10.00                               |
| timestamp                | string  | 时间戳                                                       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": [
        {
            "vid": "v_5bc814",
            "cardBin": "400000",
            "desp": "sandbox test cardbin",
            "posOrder": 1,
            "cardCount": 3,
            "activeCardCount": 0,
            "newCardMinDepositAmount": {
                "amount": 200,
                "currency": "USD"
            },
            "accountBalance": null
        }
    ],
    "timestamp": 1646651297839
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 用户获取美国州枚举值



##### 简要描述

- 用户获取美国州枚举值

##### 请求URL

- `/open/api/v1/rest/enum/us/states`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 请求示例

```
 open/api/v1/rest/enum/us/states
```

##### 返回参数说明

| 参数名    | 类型    | 说明              |
| :-------- | :------ | ----------------- |
| success   | boolean | 成功标志          |
| msg       | string  | 返回处理消息      |
| code      | integer | 返回代码          |
| +data     | Array   | 返回数据对象 data |
| └code     | string  | 州编码            |
| └value    | string  | 州名              |
| timestamp | string  | 时间戳            |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": [
        {
            "code": "AL",
            "value": "Alabama"
        },
        {
            "code": "AK",
            "value": "Alaska"
        },
        {
            "code": "AZ",
            "value": "Arizona"
        },
        {
            "code": "AR",
            "value": "Arkansas"
        },
        {
            "code": "CA",
            "value": "California"
        },
        {
            "code": "CO",
            "value": "Colorado"
        },
        {
            "code": "CT",
            "value": "Connecticut"
        },
        {
            "code": "DE",
            "value": "Delaware"
        },
        {
            "code": "DC",
            "value": "Washington DC"
        },
        {
            "code": "FL",
            "value": "Florida"
        },
        {
            "code": "GA",
            "value": "Georgia"
        },
        {
            "code": "HI",
            "value": "Hawaii"
        },
        {
            "code": "ID",
            "value": "Idaho"
        },
        {
            "code": "IL",
            "value": "Illinois"
        },
        {
            "code": "IN",
            "value": "Indiana"
        },
        {
            "code": "IA",
            "value": "Iowa"
        },
        {
            "code": "KS",
            "value": "Kansas"
        },
        {
            "code": "KY",
            "value": "Kentucky"
        },
        {
            "code": "LA",
            "value": "Louisiana"
        },
        {
            "code": "ME",
            "value": "Maine"
        },
        {
            "code": "MD",
            "value": "Maryland"
        },
        {
            "code": "MA",
            "value": "Massachusetts"
        },
        {
            "code": "MI",
            "value": "Michigan"
        },
        {
            "code": "MN",
            "value": "Minnesota"
        },
        {
            "code": "MS",
            "value": "Mississippi"
        },
        {
            "code": "MO",
            "value": "Missouri"
        },
        {
            "code": "MT",
            "value": "Montana"
        },
        {
            "code": "NE",
            "value": "Nebraska"
        },
        {
            "code": "NV",
            "value": "Nevada"
        },
        {
            "code": "NH",
            "value": "New Hampshire"
        },
        {
            "code": "NJ",
            "value": "New Jersey"
        },
        {
            "code": "NM",
            "value": "New Mexico"
        },
        {
            "code": "NY",
            "value": "New York"
        },
        {
            "code": "NC",
            "value": "North Carolina"
        },
        {
            "code": "ND",
            "value": "North Dakota"
        },
        {
            "code": "OH",
            "value": "Ohio"
        },
        {
            "code": "OK",
            "value": "Oklahoma"
        },
        {
            "code": "OR",
            "value": "Oregon"
        },
        {
            "code": "PA",
            "value": "Pennsylvania"
        },
        {
            "code": "RI",
            "value": "Rhode Island"
        },
        {
            "code": "SC",
            "value": "South Carolina"
        },
        {
            "code": "SD",
            "value": "South Dakota"
        },
        {
            "code": "TN",
            "value": "Tennessee"
        },
        {
            "code": "TX",
            "value": "Texas"
        },
        {
            "code": "UT",
            "value": "Utah"
        },
        {
            "code": "VT",
            "value": "Vermont"
        },
        {
            "code": "VA",
            "value": "Virginia"
        },
        {
            "code": "WA",
            "value": "Washington"
        },
        {
            "code": "WV",
            "value": "West Virginia"
        },
        {
            "code": "WI",
            "value": "Wisconsin"
        },
        {
            "code": "WY",
            "value": "Wyoming"
        }
    ],
    "timestamp": 1644805431313
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 创建虚拟卡



##### 简要描述

- 创建虚拟卡

##### 请求方式

- POST `open/api/v1/rest/card/create`

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名      | 必选 | 类型   | 说明                              |
| :---------- | :--- | :----- | :-------------------------------- |
| vid         | 是   | string | 卡段id                            |
| +cardHolder | 是   | object | 持卡人                            |
| └firstName  | 是   | string | 持卡人姓                          |
| └lastName   | 是   | string | 持卡人名                          |
| +address    | 是   | object | 地址                              |
| └street     | 是   | string | 街道                              |
| └city       | 是   | string | 城市                              |
| └state      | 是   | string | 州                                |
| └country    | 是   | string | 二字国家简码                      |
| └zipCode    | 是   | string | 邮编                              |
| deposit     | 是   | Long   | 充值金额（美元）, 1000代表 $10.00 |
| tagNameList | 否   | Array  | 卡标签                            |
| payCurrency | 是   | string | 支付币种，填入固定值 “USD”        |
| customerId  | 否   | string | 自定义客户id                      |

##### 注意事项

- deposit 为虚拟卡充值(初始存款)金额，1 代表 1 美分，即 1000 代表 $10.00，本系统中所有金额(例如balance, consume)都采用此规则
- vid 为卡段id, 通过获取卡段列表查询您可使用的卡段
- 为改进用户体验，创建虚拟卡为异步操作，创建虚拟卡后，通常卡会经过 【开卡中 -> 创建持卡人 -> 创建虚拟卡 -> 激活卡片 -> 已激活】

##### 请求示例

```
{
    "cardHolder": {
        "address": {
            "city": "Vienna",
            "country": "US",
            "state": "GA",
            "street": "1010 Pine St LOT 12-E",
            "zipCode": "31092"
        },
        "firstName": "Milton",
        "lastName": "Schmitt"
    },
    "rentMonths": 10,
    "deposit": 1000,
    "vid": "v_5bc814",
    "payCurrency": "USD",
    "customerId": "user_id_123",
    "tagNameList": [
        "test"
    ]
}
```

##### 返回参数说明

| 参数名        | 类型    | 说明                                                         |
| :------------ | :------ | ------------------------------------------------------------ |
| success       | boolean | 成功标志                                                     |
| msg           | string  | 返回处理消息                                                 |
| code          | integer | 返回代码                                                     |
| +data         | object  | 返回数据对象 data                                            |
| +cardHolder   | object  | 持卡人信息                                                   |
| └firstName    | string  | 持卡人姓                                                     |
| └lastName     | string  | 持卡人名                                                     |
| +address      | object  | 地址信息                                                     |
| └street       | string  | 街道                                                         |
| └city         | string  | 城市                                                         |
| └state        | string  | 州                                                           |
| └country      | string  | 国家                                                         |
| └zipCode      | string  | 邮编                                                         |
| +card         | object  | 卡信息                                                       |
| └userId       | string  | 用户ID                                                       |
| └cardHolderId | string  | 持卡人ID                                                     |
| └cardId       | string  | 卡ID                                                         |
| └customerId   | string  | 自定义客户id                                                 |
| └cardSeqNo    | string  | 卡序列号                                                     |
| └deposit      | integer | 存款, 1000代表 $10.00                                        |
| └consume      | integer | 消费, 1000代表 $10.00                                        |
| └balance      | integer | 余额 , 1000代表 $10.00                                       |
| └cvc          | string  | cvc 虚拟卡校验码，在VISA卡中也称为cvv                        |
| └number       | string  | 卡号                                                         |
| └cardBin      | string  | 卡段(卡号前6位)                                              |
| └last4        | string  | 后四位                                                       |
| └status       | string  | INIT :开卡中 INIT_CREATE_CARD:创建虚拟卡 INIT_CREATE_CARD_HOLDER:创建持卡人 INIT_ACTIVE_CARD:激活卡片 CREATE_CARD_FAILED_REFUND:创建卡失败全额退款 ACTIVE :已激活 FREEZE:已冻结 CANCELLING:删卡中 CANCELED :已删除 DELETED :永久删除 EXPIRED :已过期 |
| └statusText   | string  | 卡状态文本                                                   |
| └expYear      | integer | 卡过期年                                                     |
| └expMonth     | integer | 卡过期月                                                     |
| └gmtCreate    | string  | 开卡时间                                                     |
| └tags         | array   | 卡标签列表                                                   |
| └             | string  | 卡标签                                                       |
| timestamp     | string  | 时间戳                                                       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "cardHolder": {
            "firstName": "Milton",
            "lastName": "Schmitt",
            "address": {
                "street": "1010 Pine St LOT 12-E",
                "city": "Vienna",
                "state": "GA",
                "country": "US",
                "zipCode": "31092"
            }
        },
        "card": {
            "userId": "u_xxxxxxxx",
            "customerId" : "user_id_123",
            "cardHolderId": "ch_xxxxxxxxx",
            "holderName": "Milton Schmitt",
            "cardId": "c_xxxxxxxxx",
            "cardSeqNo": "CXXXXXXXX",
            "deposit": 1000,
            "consume": 0,
            "balance": 1000,
            "cvc": "-",
            "number": "-",
            "cardBin": "-",
            "last4": "-",
            "status": "INIT",
            "statusText": "开卡中",
            "expYear": 0,
            "expMonth": 0,
            "gmtCreate": null
        },
        "tags": [
            "test"
        ]
    },
    "timestamp": 1646648711017
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 获取卡标签列表



##### 简要描述

- 获取卡标签列表

##### 请求URL

- `/open/api/v1/rest/card/tag/list`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名   | 必选 | 类型    | 说明     |
| :------- | :--- | :------ | :------- |
| pageNo   | 是   | Integer | 当前页   |
| pageSize | 是   | Integer | 分页大小 |

##### 请求示例

```
open/api/v1/rest/card/tag/list?pageNo=1&pageSize=10
```

##### 返回参数说明

| 参数名       | 类型    | 说明              |
| :----------- | :------ | ----------------- |
| success      | boolean | 成功标志          |
| msg          | string  | 返回处理消息      |
| code         | integer | 返回代码          |
| +data        | object  | 返回数据对象 data |
| +data        | array   | 列表              |
| └id          | integer |                   |
| └userId      | string  | 用户id            |
| └tagName     | string  | 标签名            |
| └gmtCreate   | string  | 创建时间          |
| └gmtModified | string  | 更新时间          |
| └pageSize    | integer | record元素个数    |
| └total       | integer | 总数              |
| └pageNo      | integer | 当前页            |
| timestamp    | string  | 时间戳            |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "data": [
            {
                "id": 4,
                "userId": "u_xxxxxxxxx",
                "tagName": "test",
                "gmtCreate": 1646648710000,
                "gmtModified": 1646648710000
            }
        ],
        "pageSize": 10,
        "total": 1,
        "pageNo": 1
    },
    "timestamp": 1646650529176
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 获取卡片列表



##### 简要描述

- 获取卡片列表

##### 请求URL

- `/open/api/v1/rest/card/list`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名         | 必选 | 类型      | 说明              |
| :------------- | :--- | :-------- | :---------------- |
| gmtCreateStart | 否   | timestamp | 开卡起始时间      |
| gmtCreateEnd   | 否   | timestamp | 开卡结束时间      |
| tagName        | 否   | string    | 卡标签            |
| number         | 否   | string    | 实际卡号 精确查询 |
| last4          | 否   | string    | 卡号尾号后4位查询 |
| cardSeqNo      | 否   | string    | 卡序列号 精确查询 |
| cardBin        | 否   | string    | 卡段(卡号前6位)   |
| pageNo         | 是   | Integer   | 当前页            |
| pageSize       | 是   | Integer   | 查询条数          |

##### 请求示例

```
open/api/v1/rest/card/list?pageNo=1&pageSize=10
```

##### 返回参数说明

| 参数名        | 类型    | 说明                                                         |
| :------------ | :------ | ------------------------------------------------------------ |
| success       | boolean | 成功标志                                                     |
| msg           | string  | 返回处理消息                                                 |
| code          | integer | 返回代码                                                     |
| +data         | object  | 返回数据对象 data                                            |
| +data         | array   | 列表                                                         |
| +card         | object  | 卡信息                                                       |
| └userId       | string  | 用户id                                                       |
| └customerId   | string  | 自定义客户id                                                 |
| └cardHolderId | string  | 持卡人id                                                     |
| └holderName   | string  | 持卡人姓名                                                   |
| └cardId       | string  | 虚拟卡id                                                     |
| └cardSeqNo    | string  | 虚拟卡序列号                                                 |
| └deposit      | integer | 充值累计                                                     |
| └consume      | integer | 消费累计                                                     |
| └balance      | integer | 卡片余额(等于充值累计 - 消费累计)                            |
| └cvc          | string  |                                                              |
| └number       | string  | 卡号                                                         |
| └cardBin      | string  | 卡段(卡号前6位)                                              |
| └last4        | string  | 后四位                                                       |
| └status       | string  | INIT :开卡中 INIT_CREATE_CARD:创建虚拟卡 INIT_CREATE_CARD_HOLDER:创建持卡人 INIT_ACTIVE_CARD:激活卡片 CREATE_CARD_FAILED_REFUND:创建卡失败全额退款 ACTIVE :已激活 FREEZE:已冻结 CANCELLING:删卡中 CANCELED :已删除 DELETED :永久删除 EXPIRED :已过期 |
| └statusText   | string  | 卡状态文本                                                   |
| └expYear      | integer | 卡过期年                                                     |
| └expMonth     | integer | 卡过期月                                                     |
| └gmtCreate    | string  | 开卡时间                                                     |
| +tags         | array   | 卡标签列表                                                   |
| └pageSize     | integer | record元素个数                                               |
| └total        | integer | 总数                                                         |
| └pageNo       | integer | 当前页                                                       |
| timestamp     | string  | 时间戳                                                       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "data": [
            {
                "card": {
                    "userId": "u_xxxxxxxxx",
                    "cardHolderId": "ch_xxxxxxxxxxx",
                    "holderName": "Milton Schmitt",
                    "cardId": "c_xxxxxxxxxx",
                    "cutomerId": "user_id_123",
                    "cardSeqNo": "CXXXXXXXX",
                    "deposit": 1000,
                    "consume": 0,
                    "balance": 1000,
                    "cvc": "***",
                    "number": "***",
                    "cardBin": "400000",
                    "last4": "9360",
                    "status": "ACTIVE",
                    "statusText": "已激活",
                    "expYear": 2025,
                    "expMonth": 2,
                    "gmtCreate": 1646648710000
                },
                "tags": [
                    "test"
                ]
            }
        ],
        "pageSize": 5,
        "total": 4,
        "pageNo": 1
    },
    "timestamp": 1646650587375
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 获取卡片详情



##### 简要描述

- 获取卡片详情

##### 请求URL

- `/open/api/v1/rest/card/info`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名 | 必选 | 类型   | 说明 |
| :----- | :--- | :----- | :--- |
| cardId | 是   | string | 卡ID |

##### 请求示例

```
open/api/v1/rest/card/info?cardId=xxxxxxx
```

##### 返回参数说明

| 参数名        | 类型    | 说明                                                         |
| :------------ | :------ | ------------------------------------------------------------ |
| success       | boolean | 成功标志                                                     |
| msg           | string  | 返回处理消息                                                 |
| code          | integer | 返回代码                                                     |
| +data         | object  | 返回数据对象 data                                            |
| +cardHolder   | object  |                                                              |
| └firstName    | string  | 持卡人姓                                                     |
| └lastName     | string  | 持卡人名                                                     |
| +address      | object  | 地址信息                                                     |
| └street       | string  | 街道                                                         |
| └city         | string  | 城市                                                         |
| └state        | string  | 州                                                           |
| └country      | string  | 国家                                                         |
| └zipCode      | string  | 邮编                                                         |
| +card         | object  | 卡信息                                                       |
| └userId       | string  | 用户id                                                       |
| └customerId   | string  | 自定义客户id                                                 |
| └cardHolderId | string  | 持卡人id                                                     |
| └holderName   | string  | 持卡人姓名                                                   |
| └cardId       | string  | 虚拟卡id                                                     |
| └cardSeqNo    | string  | 虚拟卡序列号                                                 |
| └deposit      | integer | 充值累计                                                     |
| └consume      | integer | 消费累计                                                     |
| └balance      | integer | 卡片余额(等于充值累计 - 消费累计)                            |
| └cvc          | string  |                                                              |
| └number       | string  | 卡号                                                         |
| └cardBin      | string  | 卡段(卡号前6位)                                              |
| └last4        | string  | 后四位                                                       |
| └status       | string  | INIT :开卡中 INIT_CREATE_CARD:创建虚拟卡 INIT_CREATE_CARD_HOLDER:创建持卡人 INIT_ACTIVE_CARD:激活卡片 CREATE_CARD_FAILED_REFUND:创建卡失败全额退款 ACTIVE :已激活 FREEZE:已冻结 CANCELLING:删卡中 CANCELED :已删除 DELETED :永久删除 EXPIRED :已过期 |
| └statusText   | string  | 卡状态文本                                                   |
| └expYear      | integer | 卡过期年                                                     |
| └expMonth     | integer | 卡过期月                                                     |
| └gmtCreate    | string  | 开卡时间                                                     |
| +tags         | array   | 卡标签列表                                                   |
| timestamp     | string  | 时间戳                                                       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "cardHolder": {
            "firstName": "Milton",
            "lastName": "Schmitt",
            "address": {
                "street": "1010 Pine St LOT 12-E",
                "city": "Vienna",
                "state": "GA",
                "country": "US",
                "zipCode": "31092"
            }
        },
        "card": {
            "userId": "u_xxxxxxxx",
             "cutomerId": "user_id_123",
            "cardHolderId": "ch_xxxxxxxxxx",
            "holderName": "Milton Schmitt",
            "cardId": "c_xxxxxxxxxx",
            "cardSeqNo": "CXXXXXXXX",
            "deposit": 1000,
            "consume": 0,
            "balance": 1000,
            "cvc": "123",
            "number": "40000099900XXXXX",
            "cardBin": "400000",
            "last4": "9360",
            "status": "ACTIVE",
            "statusText": "已激活",
            "expYear": 2025,
            "expMonth": 2,
            "gmtCreate": 1646648710000
        },
        "tags": [
            "test"
        ]
    },
    "timestamp": 1646651433202
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 查看卡片交易记录v2.0



##### 简要描述

- 查看卡片交易记录

##### 请求URL

- `/open/api/v1/rest/card/transaction/list`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名   | 必选 | 类型    | 说明     |
| :------- | :--- | :------ | :------- |
| cardId   | 是   | string  | 卡ID     |
| pageNo   | 是   | Integer | 当前页   |
| pageSize | 是   | Integer | 查询条数 |

##### 请求示例

```
open/api/v1/rest/card/trade/list?pageNo=1&pageSize=10&cardId=xxxxx
```

##### 返回参数说明

| 参数名               | 类型    | 说明                                                         |
| :------------------- | :------ | ------------------------------------------------------------ |
| success              | boolean | 成功标志                                                     |
| msg                  | string  | 返回处理消息                                                 |
| code                 | integer | 返回代码                                                     |
| +data                | object  | 返回数据对象 data                                            |
| +data                | array   | 列表                                                         |
| └transactionId       | string  | 交易ID                                                       |
| └cardId              | string  | 卡id                                                         |
| └userId              | string  | 用户id                                                       |
| └cardCustomerId      | string  | 自定义客户ID                                                 |
| └cardNumber          | string  | 卡号                                                         |
| └desp                | string  | 授权描述                                                     |
| └reason              | string  | 失败的原因                                                   |
| └preAuthAmount       | integer | 预授权金额, 1000 代表 10.00 美元                             |
| └preAuthCurrency     | string  | 预授权消费币种                                               |
| └preAuthTime         | string  | 预授权发生时间                                               |
| └transactionAmount   | integer | 交易结算金额, 1000 代表 10.00 美元                           |
| └transactionCurrency | string  | 交易结算币种                                                 |
| └transactionTime     | string  | 交易结算时间                                                 |
| └status              | string  | 交易状态，PENDING / DECLINED / REVERSED / EXPIRED / COMPLETE / REFUND |
| └pageSize            | integer | record元素个数                                               |
| └total               | integer | 总数                                                         |
| └pageNo              | integer | 当前页                                                       |
| timestamp            | string  | 时间戳                                                       |

##### 返回示例

```
 {
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "data": [
            {
                "transactionId": "t_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "userId": "u_xxxxxxxxxxx",
                "cardId": "c_xxxxxxxxxxxxxxxxxxx",
                "cardCustomerId": "xxxxxxxxxx",
                "cardNumber": "556735XXXXXXXXXX",
                "desp": "FACEBK ADS             fb.me/ads     IRL",
                "reason": "balance not enough",
                "preAuthAmount": -1000,
                "preAuthCurrency": "USD",
                "preAuthTime": 1655368726000,
                "transactionAmount": null,
                "transactionCurrency": null,
                "transactionTime": null,
                "status": "DECLINED"
            },
            {
                "transactionId": "t_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "userId": "u_xxxxxxxxxxx",
                "cardId": "c_xxxxxxxxxxxxxxxxxxx",
                "cardCustomerId": "xxxxxxxxxx",
                "cardNumber": "556735XXXXXXXXXX",
                "desp": "FACEBK KR9PGET5T2",
                "reason": "",
                "preAuthAmount": -26,
                "preAuthCurrency": "USD",
                "preAuthTime": 1655368710000,
                "transactionAmount": null,
                "transactionCurrency": null,
                "transactionTime": null,
                "status": "PENDING"
            },
            {
                "transactionId": "t_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "userId": "u_xxxxxxxxxxx",
                "cardId": "c_xxxxxxxxxxxxxxxxxxx",
                "cardCustomerId": "xxxxxxxxxx",
                "cardNumber": "556735XXXXXXXXXX",
                "desp": "FACEBK XXXXXXX",
                "reason": "",
                "preAuthAmount": -26,
                "preAuthCurrency": "USD",
                "preAuthTime": 1655368710000,
                "transactionAmount": null,
                "transactionCurrency": null,
                "transactionTime": null,
                "status": "EXPIRED"
            },
            {
                "transactionId": "t_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "userId": "u_xxxxxxxxxxx",
                "cardId": "c_xxxxxxxxxxxxxxxxxxx",
                "cardCustomerId": "xxxxxxxxxx",
                "cardNumber": "556735XXXXXXXXXX",
                "desp": "FACEBK ADS",
                "reason": "",
                "preAuthAmount": -1000,
                "preAuthCurrency": "USD",
                "preAuthTime": 1655355169000,
                "transactionAmount": -1009,
                "transactionCurrency": "USD",
                "transactionTime": 1655399078000,
                "status": "COMPLETE"
            },
            {
                "transactionId": "t_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "userId": "u_xxxxxxxxxxx",
                "cardId": "c_xxxxxxxxxxxxxxxxxxx",
                "cardCustomerId": "xxxxxxxxxx",
                "cardNumber": "556735XXXXXXXXXX",
                "desp": "FACEBK ADS             fb.me/ads     IRL",
                "reason": "",
                "preAuthAmount": -1000,
                "preAuthCurrency": "USD",
                "preAuthTime": 1655348128000,
                "transactionAmount": null,
                "transactionCurrency": null,
                "transactionTime": null,
                "status": "REVERSED"
            },
            {
                "transactionId": "t_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "userId": "u_xxxxxxxxxxx",
                "cardId": "c_xxxxxxxxxxxxxxxxxxx",
                "cardCustomerId": "xxxxxxxxxx",
                "cardNumber": "556735XXXXXXXXXX",
                "desp": "FACEBK xxxxxxxxxxx",
                "reason": "",
                "preAuthAmount": null,
                "preAuthCurrency": null,
                "preAuthTime": null,
                "transactionAmount": 27,
                "transactionCurrency": "USD",
                "transactionTime": 1655371389000,
                "status": "REFUND"
            }
        ],
        "pageSize": 5,
        "total": 33,
        "pageNo": 4
    },
    "timestamp": 1655838927875
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 查看卡片交易记录



##### 简要描述

- 此API 已弃用，请使用 查看卡片交易记录v2
- 查看卡片交易记录

##### 请求URL

- `/open/api/v1/rest/card/trade/list`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名   | 必选 | 类型    | 说明     |
| :------- | :--- | :------ | :------- |
| cardId   | 是   | string  | 卡ID     |
| pageNo   | 是   | Integer | 当前页   |
| pageSize | 是   | Integer | 查询条数 |

##### 请求示例

```
open/api/v1/rest/card/trade/list?pageNo=1&pageSize=10&cardId=xxxxx
```

##### 返回参数说明

| 参数名         | 类型    | 说明                         |
| :------------- | :------ | ---------------------------- |
| success        | boolean | 成功标志                     |
| msg            | string  | 返回处理消息                 |
| code           | integer | 返回代码                     |
| +data          | object  | 返回数据对象 data            |
| +data          | array   | 列表                         |
| └transactionId | string  | 交易ID                       |
| └cardId        | string  | 卡id                         |
| └cardSeqNo     | string  | 卡序列号                     |
| └customerId    | string  | 自定义客户ID                 |
| └cardLast4     | string  | 卡号后四位                   |
| └desp          | string  | 授权描述                     |
| └reason        | string  | 失败的原因                   |
| └amount        | integer | 消费金额                     |
| └currency      | string  | 消费金额币种                 |
| └status        | string  | 交易状态，PENDING,COMPLETE等 |
| └tradeAt       | string  | 交易时间                     |
| └pageSize      | integer | record元素个数               |
| └total         | integer | 总数                         |
| └pageNo        | integer | 当前页                       |
| timestamp      | string  | 时间戳                       |

##### 返回示例

```
 {
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "data": [
            {
                "transactionId": "t_xxxxxxxxxx",
                "cardId": "c_xxxxxxxxxx",
                "customerId": "abc123",
                "cardSeqNo": "CXXXXXXXX",
                "cardLast4": "9352",
                "desp": "Fake Transaction in Sandbox Mode(-$200.00)",
                "reason": "balance not enough",
                "amount": -20000,
                "currency": "USD",
                "status": "DECLINED",
                "tradeAt": 1646306072727
            },
            {
                "transactionId": "t_xxxxxxxxxx",
                "cardId": "c_xxxxxxxxxx",
                "cardSeqNo": "CXXXXXXXX",
                "customerId": "abc123",
                "cardLast4": "9352",
                "desp": "Fake Transaction in Sandbox Mode(-$1.00)",
                "reason": null,
                "amount": -100,
                "currency": "USD",
                "status": "PENDING",
                "tradeAt": 1646392472727
            },
            {
                "transactionId": "t_xxxxxxxxxx",
                "cardId": "c_xxxxxxxxxx",
                "cardSeqNo": "CXXXXXXXX",
                "customerId": "abc123",
                "cardLast4": "9352",
                "desp": "Fake Transaction in Sandbox Mode(-$100.00)",
                "reason": null,
                "amount": -10000,
                "currency": "USD",
                "status": "COMPLETE",
                "tradeAt": 1646392472727
            },
            {
                "transactionId": "t_xxxxxxxxxx",
                "cardId": "c_xxxxxxxxxx",
                "cardSeqNo": "CXXXXXXXX",
                "customerId": "abc123",
                "cardLast4": "9352",
                "desp": "Fake Transaction in Sandbox Mode($100.00)",
                "reason": null,
                "amount": 5000,
                "currency": "USD",
                "status": "REFUND",
                "tradeAt": 1646478872727
            }
        ],
        "pageSize": 3,
        "total": 3,
        "pageNo": 1
    },
    "timestamp": 1646651672727
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 卡片充值



##### 简要描述

- 虚拟卡存款(充值)

##### 请求URL

- `/open/api/v1/rest/card/deposit`

##### 请求方式

- POST

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名      | 必选 | 类型    | 说明                      |
| :---------- | :--- | :------ | :------------------------ |
| cardId      | 是   | string  | 虚拟卡id                  |
| amount      | 是   | integer | 充值金额，1000代表 $10.00 |
| cardSeqNo   | 否   | string  | 卡序列号                  |
| payCurrency | 是   | string  | 为固定值 USD              |

##### 请求示例

```
{
    "cardId": "c_xxxxxxxxxx",
    "cardSeqNo": "CXXXXXXXX",
    "amount": "1000",
    "payCurrency": "USD"
}
```

##### 返回参数说明

| 参数名    | 类型    | 说明         |
| :-------- | :------ | ------------ |
| success   | boolean | 成功标志     |
| msg       | string  | 返回处理消息 |
| code      | integer | 返回代码     |
| data      | boolean | 操作是否成功 |
| timestamp | string  | 时间戳       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": true,
    "timestamp": 1646651934238
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 更新虚拟卡



##### 简要描述

- 更新虚拟卡(更新持卡人地址)

##### 请求URL

- `/open/api/v1/rest/card/update`

##### 请求方式

- POST

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名      | 必选 | 类型   | 说明     |
| :---------- | :--- | :----- | :------- |
| cardId      | 是   | string | 虚拟卡id |
| +cardHolder | 是   | object |          |
| +address    | 是   | object |          |
| └street     | 是   | string | 街道地址 |
| └city       | 是   | string | 城市     |
| └state      | 是   | string | 州       |
| └zipCode    | 是   | string | 邮编     |
| cardSeqNo   | 否   | string | 卡序列号 |

##### 请求示例

```
{
    "cardHolder": {
        "address": {
            "city": "Vienna",
            "state": "GA",
            "street": "1010 Pine St LOT 12-E",
            "zipCode": "31092"
        }
    },
    "cardId": "c_xxxxxxxxxx",
    "cardSeqNo": "CXXXXXXXX"
}
```

##### 返回参数说明

| 参数名    | 类型    | 说明         |
| :-------- | :------ | ------------ |
| success   | boolean | 成功标志     |
| msg       | string  | 返回处理消息 |
| code      | integer | 返回代码     |
| data      | boolean | 操作是否成功 |
| timestamp | string  | 时间戳       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": true,
    "timestamp": 1646651934238
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 卡片退款



##### 简要描述

- 卡片退款

##### 请求URL

- `/open/api/v1/rest/card/withdraw`

##### 请求方式

- POST

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名 | 必选 | 类型   | 说明                      |
| :----- | :--- | :----- | :------------------------ |
| cardId | 是   | string | 虚拟卡id                  |
| amount | 是   | Long   | 取款金额，1000代表 $10.00 |

##### 请求示例

```
{
    "cardId": "c_xxxxxxxxxx",
    "amount": "1000"
}
```

##### 返回参数说明

| 参数名    | 类型    | 说明         |
| :-------- | :------ | ------------ |
| success   | boolean | 成功标志     |
| msg       | string  | 返回处理消息 |
| code      | integer | 返回代码     |
| data      | boolean | 操作是否成功 |
| timestamp | string  | 时间戳       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": true,
    "timestamp": 1646651934238
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 删除卡片



##### 简要描述

- 删除卡片

##### 请求URL

- `/open/api/v1/rest/card/cancel`

##### 请求方式

- POST

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名    | 必选 | 类型   | 说明     |
| :-------- | :--- | :----- | :------- |
| cardId    | 是   | string | 虚拟卡id |
| cardSeqNo | 是   | string | 卡序列号 |

##### 请求示例

```
{
    "cardId": "c_xxxxxxxxxxx",
    "cardSeqNo": "CXXXXXXXX",
}
```

##### 返回参数说明

| 参数名    | 类型    | 说明         |
| :-------- | :------ | ------------ |
| success   | boolean | 成功标志     |
| msg       | string  | 返回处理消息 |
| code      | integer | 返回代码     |
| data      | boolean | 操作是否成功 |
| timestamp | string  | 时间戳       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": true,
    "timestamp": 1646651934238
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## 单张卡的操作历史



##### 简要描述

- 获取卡片操作历史(开卡/充值)

##### 请求URL

- `/open/api/v1/rest/card/order/list`

##### 请求方式

- GET

##### 请求头

| 参数名      | 必选 | 类型   | 说明               |
| :---------- | :--- | :----- | :----------------- |
| kc-open-api | 是   | string | 请求token          |
| nonce       | 是   | string | 请求标识(最大64位) |
| timestamp   | 是   | string | 毫秒时间戳(+8)     |

##### 参数

| 参数名   | 必选 | 类型    | 说明     |
| :------- | :--- | :------ | :------- |
| cardId   | 是   | string  | 卡ID     |
| pageNo   | 是   | Integer | 当前页   |
| pageSize | 是   | Integer | 查询条数 |

##### 请求示例

```
open/api/v1/rest/card/order/list?pageNo=1&pageSize=10&cardId=xxxxxx
```

##### 返回参数说明

| 参数名    | 类型    | 说明                                                         |
| :-------- | :------ | ------------------------------------------------------------ |
| success   | boolean | 成功标志                                                     |
| msg       | string  | 返回处理消息                                                 |
| code      | integer | 返回代码                                                     |
| +data     | object  | 返回数据对象 data                                            |
| +data     | array   | 列表                                                         |
| └cardId   | string  | 虚拟卡id                                                     |
| └type     | string  | CREATE_CARD:创建卡 TOPUP_CARD: 卡充值 WITHDRAW_CARD: 卡取款 CANCEL_CARD: 删卡 |
| └typeText | string  | 操作类型文本                                                 |
| └desp     | string  | 描述信息                                                     |
| └amount   | string  | 创建卡/充值/取款/删卡余额 金额, 1000 表示 $10.00             |
| └tradeAt  | string  | 交易时间                                                     |
| └pageSize | integer | record元素个数                                               |
| └total    | integer | 总数                                                         |
| └pageNo   | integer | 当前页                                                       |
| timestamp | string  | 时间戳                                                       |

##### 返回示例

```
{
    "success": true,
    "msg": "操作成功！",
    "code": 200000,
    "data": {
        "data": [
            {
                "cardId": "c_xxxxxxxxxx",
                "type": "CANCEL_CARD",
                "typeText": "删卡",
                "desp": "Cancel Card，remain balance: $11.00",
                "amount": 1100,
                "tradeAt": 1646646383000
            },
            {
                "cardId": "c_xxxxxxxxxx",
                "type": "WITHDRAW_CARD",
                "typeText": "取款",
                "desp": "Withdraw from card，amount: $9.00",
                "amount": 900,
                "tradeAt": 1646646340000
            },
            {
                "cardId": "c_xxxxxxxxxx",
                "type": "TOPUP_CARD",
                "typeText": "充值",
                "desp": "Top up card, amount: $15.00",
                "amount": 1500,
                "tradeAt": 1646646276000
            },
            {
                "cardId": "c_xxxxxxxxxx",
                "type": "CREATE_CARD",
                "typeText": "开卡",
                "desp": "Create card, deposit amount: $10.00",
                "amount": 1000,
                "tradeAt": 1646646058000
            }
        ],
        "pageSize": 4,
        "total": 4,
        "pageNo": 1
    },
    "timestamp": 1646651535340
}
```

##### 备注

- 更多返回错误代码请看首页的错误代码描述

## webhook



##### 简要描述

卡交易webhook 配置及使用：

- 请联系工作人员后台配置您的Webhook Endpoint Url, Url 必须是HTTPS
- 当出现卡产生消费/退款/拒付等交易时，将推送对应交易消息到您的Webhook Endpoint Url
- 收到Webhook 消息后，如果返回HTTP CODE 200, 表示您已成功接收到webhook消息，否则将重试5次

##### 返回参数说明

| 参数名               | 类型      | 说明                                                         |
| :------------------- | :-------- | ------------------------------------------------------------ |
| eventType            | string    | webhook 事件类型                                             |
| eventId              | string    | webhook事件id                                                |
| webhookSubscribeId   | string    | webhook订阅id                                                |
| +data                | object    | 返回事件对象 data                                            |
| └transactionId       | string    | 交易id, 同一笔交易id 唯一                                    |
| └userId              | string    | 用户id                                                       |
| └cardId              | string    | 虚拟卡id                                                     |
| └cardCustomerId      | string    | 自定义客户id                                                 |
| └cardNumber          | string    | 卡号                                                         |
| └cardSeqNo           | string    | 卡序列号                                                     |
| └desp                | string    | 交易描述信息                                                 |
| └reason              | string    | 拒付原因                                                     |
| └preAuthAmount       | integer   | 预授权金额(可能与最终交易金额不一样)                         |
| └preAuthCurrency     | string    | 预授权币种，USD                                              |
| └preAuthTime         | timestamp | 预授权时间                                                   |
| └transactionAmount   | integer   | 成交金额                                                     |
| └transactionCurrency | string    | 成交币种，USD                                                |
| └transactionTime     | timestamp | 成交时间                                                     |
| └status              | 交易状态  | PENDING :交易授权PENDING EXPIRED:授权过期 REVERSED:授权退回(例如绑卡预扣退回) DECLINED:拒付 COMPLETE:交易完成 REFUND :交易退款 |
| └gmtCreate           | timestamp | 记录创建时间                                                 |
| └gmtModified         | integer   | 记录更新时间                                                 |

##### 返回示例

- PENDING 示例

  ```
  {
    "eventType":"TRANSACTION",
    "eventId":"ev_xxxxxxxxxxxxxxxxxxxxx",
    "webhookSubscribeId":"wsb_xxxxxxxxxxxxxxxxxxx",
    "data":{
        "transactionId":"t_xxxxxxxxxxxxx",
        "userId":"u_xxxxxxxxxxx",
        "cardId":"c_xxxxxxxxxxx",
        "cardCustomerId":"",
        "cardNumber":"556735XXXXXX0737",
        "cardSeqNo":"CXXXXXXX",
        "desp":"FACEBK UYFYREF3S2      fb.me/ads     IRL",
        "reason":null,
        "preAuthAmount": -1992,
        "preAuthCurrency":"USD",
        "preAuthTime":1652262674000,
        "transactionAmount":null,
        "transactionCurrency":null,
        "transactionTime":null,
        "status":"PENDING",
        "gmtCreate":1652262674000,
        "gmtModified":1652262674000
    }
  }
  ```

- EXPIRED 示例

  ```
  {
    "eventType":"TRANSACTION",
    "eventId":"ev_xxxxxxxxxxxxxxxxxxxxx",
    "webhookSubscribeId":"wsb_xxxxxxxxxxxxxxxxxxx",
    "data":{
        "transactionId":"t_xxxxxxxxxxxxx",
        "userId":"u_xxxxxxxxxxx",
        "cardId":"c_xxxxxxxxxxx",
        "cardCustomerId":"",
        "cardNumber":"556735XXXXXX0737",
        "cardSeqNo":"CXXXXXXX",
        "desp":"FACEBK UYFYREF3S2      fb.me/ads     IRL",
        "reason":null,
        "preAuthAmount": -1992,
        "preAuthCurrency":"USD",
        "preAuthTime":1652262674000,
        "transactionAmount":null,
        "transactionCurrency":null,
        "transactionTime":null,
        "status":"EXPIRED",
        "gmtCreate":1652262674000,
        "gmtModified":1655562674000
    }
  }
  ```

- REVERSED 示例

  ```
  {
    "eventType":"TRANSACTION",
    "eventId":"ev_xxxxxxxxxxxxxxxxxxxxx",
    "webhookSubscribeId":"wsb_xxxxxxxxxxxxxxxxxxx",
    "data":{
        "transactionId":"t_xxxxxxxxxxxxx",
        "userId":"u_xxxxxxxxxxx",
        "cardId":"c_xxxxxxxxxxx",
        "cardCustomerId":"",
        "cardNumber":"556735XXXXXX0737",
        "cardSeqNo":"CXXXXXXX",
        "desp":"FACEBK UYFYREF3S2      fb.me/ads     IRL",
        "reason":null,
        "preAuthAmount": -1992,
        "preAuthCurrency":"USD",
        "preAuthTime":1652262674000,
        "transactionAmount":null,
        "transactionCurrency":null,
        "transactionTime":null,
        "status":"REVERSED",
        "gmtCreate":1652262674000,
        "gmtModified":1655562674000
    }
  }
  ```

- COMPLETE 示例

  ```
  {
    "eventType":"TRANSACTION",
    "eventId":"ev_xxxxxxxxxxxxxxxxxxxxx",
    "webhookSubscribeId":"wsb_xxxxxxxxxxxxxxxxxxx",
    "data":{
        "transactionId":"t_xxxxxxxxxxxxx",
        "userId":"u_xxxxxxxxxxx",
        "cardId":"c_xxxxxxxxxxx",
        "cardCustomerId":"",
        "cardNumber":"556735XXXXXX0737",
        "cardSeqNo":"CXXXXXXX",
        "desp":"FACEBK UYFYREF3S2      fb.me/ads     IRL",
        "reason":"balance not enough",
        "preAuthAmount": -1992,
        "preAuthCurrency":"USD",
        "preAuthTime":1652262674000,
        "transactionAmount":-1992,
        "transactionCurrency":"USD",
        "transactionTime":166662674000,
        "status":"COMPLETE",
        "gmtCreate":1652262674000,
        "gmtModified":166662674000
    }
  }
  ```

- REFUND 示例

  ```
  {
    "eventType":"TRANSACTION",
    "eventId":"ev_xxxxxxxxxxxxxxxxxxxxx",
    "webhookSubscribeId":"wsb_xxxxxxxxxxxxxxxxxxx",
    "data":{
        "transactionId":"t_xxxxxxxxxxxxx",
        "userId":"u_xxxxxxxxxxx",
        "cardId":"c_xxxxxxxxxxx",
        "cardCustomerId":"",
        "cardNumber":"556735XXXXXX0737",
        "cardSeqNo":"CXXXXXXX",
        "desp":"FACEBK UYFYREF3S2      fb.me/ads     IRL",
        "reason":"balance not enough",
        "preAuthAmount": null,
        "preAuthCurrency":null,
        "preAuthTime":null,
        "transactionAmount": 1992,
        "transactionCurrency":"USD",
        "transactionTime": 166772674000,
        "status":"REFUND",
        "gmtCreate":1652262674000,
        "gmtModified":1652262674000
    }
  }
  ```

##### 备注

- # 更多返回错误代码请看首页的错误代码描述