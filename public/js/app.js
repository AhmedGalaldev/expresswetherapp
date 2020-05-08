console.log("hello from app.js cleint side");



const form = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    console.log(location);

    msg.textContent= 'loading ...'
    msg2.textContent= ''


fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
       if(data.error){

           msg=data.error
       }else{
          msg.textContent= data.location
          console.log(data.forecast);
          
          msg2.textContent=data.forecast.summary +' with degree '+data.forecast.currently
           
           
       }
        
    })
})
     

})