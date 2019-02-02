const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()
const Client = require('@line/bot-sdk').Client

const config = {
  channelAccessToken: 'hQWQDyh2yengS8JSCPVb5JZZj+KhRuVHvRCL+W9XVNJnuvbwphLneuu3bcOz4UOOzSc1RSd8ZCqh9wq5dvGZvckSr3fxl50LBLV981Q4S4gVyQ67WGwFpFRq+PLSbk3GrgpCt5OKn+aPGmYo16KNRAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '1614fdc372087e9c6a6fc36829fad2f2'
}

const client = new Client(config)

app.get('/', function (req, res) {
    res.send('Hello World!!')
   
})

app.post('/webhook', middleware(config), (req, res) => {
  res.send('hello!!')
  const event = req.body.events[0]; //เก็บข้อความ,สติ๊กเกอร์
  if (event.type === 'message') {
    const message = event.message;
     console.log(event)
    //console.log(message)

    // client.replyMessage(event.replyToken, {
    //   type: 'text',
    //   // text: message.text
    //   text: message.type
    // })
    client.replyMessage(event.replyToken, 
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
            // "type": "buttons",
            // "thumbnailImageUrl": "https://brayadownloadmovieonline.files.wordpress.com/2018/12/dragon-ball-super-broly-poster.jpg",
            // "imageAspectRatio": "rectangle",
            // "imageSize": "cover",
            // "imageBackgroundColor": "#FFFFFF",
            // "title": "DONUT",
            // "text": "PAtcharawat Sukruk",
            // "defaultAction": {
            //     "type": "uri",
            //     "label": "View detail",
            //     "uri": "https://dbz-dokkanbattle.fandom.com/wiki/Dragon_Ball_Z_Dokkan_Battle_Wikia"
            // },
            // "actions": [
            //     {
            //       // "type": "postback",
            //       "type": "uri",
            //       "label": "Facebook",
            //       // "data": "action=buy&itemid=123"
            //       //"text": "Game"
            //       "uri": "https://www.facebook.com/profile.php?id=100008681733666"
            //     },
            //     {
            //       "type": "uri",
            //       "label": "วิศวะคอม",
            //       // "text": "no no no"
            //        "uri": "http://cpe.eng.cmu.ac.th/2013/"
            //     }
            //     // {
            //     //   "type": "message",
            //     //   "label": "Fusion",
            //     //   "text": "HA"
            //     // },
            //     // {
            //     //   "type": "uri",
            //     //   "label": "View detail",
            //     //   "uri": "http://google.com"
            //     // }
            // ]
            //----------------------------------------------------------//------------ muli templete
            client.replyMessage(event.replyToken, {
              "type": "template",
              "altText": "this is a carousel template",
              "template": {
                  "type": "carousel",
                  "columns": [
                      {
                        "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
                        "imageBackgroundColor": "#FFFFFF",
                        "title": "this is menu",
                        "text": "description",
                        "actions": [
                            {  
                                "type":"cameraRoll",
                                "label":"Camera roll"
                            },
                            {  
                              "type":"location",
                              "label":"Location"
                           }
                        ]
                      },
                      {
                        "thumbnailImageUrl": "https://c.76.my/Malaysia/line-brown-bear-cute-pencil-case-ubiyo-1802-02-Ubiyo@6.jpg",
                        "imageBackgroundColor": "#000000",
                        "title": "this is menu",
                        "text": "description",
                        "actions": [
                          {
                            "type":"datetimepicker",
                            "label":"Select date",
                            "data":"storeId=12345",
                            "mode":"datetime",
                            "initial":"2017-12-25t00:00",
                            "max":"2018-01-24t23:59",
                            "min":"2017-12-25t00:00"
                          },
                          {  
                            "type":"camera",
                            "label":"Camera"
                         }
                      ]
                      }
                  ],
                  "imageAspectRatio": "rectangle",
                  "imageSize": "cover"
              }
          })
            
        }
      })

    
  }
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})