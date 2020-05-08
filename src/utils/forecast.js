const request = require('request')


const foreCast=(long,lit,callback)=>{
    url='https://api.darksky.net/forecast/5730d209a25118fa5bc7c3dc410a32c2/'+ encodeURIComponent(long)+','+encodeURIComponent(lit)+''
    request({url:url,json:true},(error,response)=>{
      if(error){
          callback("there is no internet conection",undefined)
      }else if(response.body.error){
          callback("there is something wrong in url",undefined)
      }else{
          callback(undefined,{
           summary:response.body.daily.data[0].summary,
           currently:response.body.currently.temperature ,
           chanse:response.body.currently.precipProbability  
          })
      }
    })
}

module.exports=foreCast