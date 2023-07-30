const h =document.querySelector(".hour"),
      m =document.querySelector(".minut"),
      s =document.querySelector(".sec")

function sam(){
    let myDate = new Date()
    h.innerHTML=myDate.getHours()
    m.innerHTML=myDate.getMinutes()
    s.innerHTML=myDate.getSeconds()
    if(h>=12){
        btn.innerHTML= "PM"
    }else{
        btn.innerHTML= "AM"
    }
}

setInterval(sam, 1000);