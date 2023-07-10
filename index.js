let hour=document.getElementById('hours')
let minute=document.getElementById('minutes')
let second=document.getElementById('seconds')



const hello=setInterval(function time(){
    var date=new Date();
var hr=date.getHours()
var min=date.getMinutes()
var sec=date.getSeconds()


hour.textContent=hr
minute.textContent=min
second.textContent=sec

},200)

