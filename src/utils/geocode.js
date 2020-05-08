const request = require('request')


const geoCode=(address,callback)=>{
    url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWhtZWRnYWxhbGRldiIsImEiOiJjazlrazA0amYxM21yM2txNmUxNzZsZzVtIn0.3sgLw4tvjPPE3PIXdXYtaQ';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("there is no internet conection",undefined)
        }else if(response.body.features.length==0){
            callback("the address is not correct",undefined)
        }else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                lititude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })

        }
    })
}



module.exports=geoCode 