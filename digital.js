const timer=document.querySelector('.timer')

function getTime(){
    console.log("timer",timer);
    const now=new Date()
    console.log("now",now);
    let h=now.getHours()
    let m=now.getMinutes()
    let s=now.getSeconds()
    h=h<10 ? "0" + h:h
    m=m<10 ? "0" + m:m
    s=s<10 ? "0" + s:s
    console.log(h,m,s);
    const timestr=h+":"+m+":"+s
    timer.textContent=timestr
}

setInterval(getTime,1000)