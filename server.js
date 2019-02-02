const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()

const config = {
  channelAccessToken: 'hQWQDyh2yengS8JSCPVb5JZZj+KhRuVHvRCL+W9XVNJnuvbwphLneuu3bcOz4UOOzSc1RSd8ZCqh9wq5dvGZvckSr3fxl50LBLV981Q4S4gVyQ67WGwFpFRq+PLSbk3GrgpCt5OKn+aPGmYo16KNRAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '1614fdc372087e9c6a6fc36829fad2f2'
}

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!!!')
})

app.post('/webhook', middleware(config), (req, res) => {
  console.log('webhook success')
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})