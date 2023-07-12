var sec_hand = document.querySelector('#sec-hand');
var min_hand = document.querySelector('#min-hand');
var hour_hand = document.querySelector('#hour-hand');
function setDate()
{
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();
    const seconddegree = ((second/60 )* 360)+90;
    const minutedegree = ((minute/60)*360)+90;
    const hourdegree = ((hour/12*360)+90);
    sec_hand.style.transform = `rotate(${seconddegree}deg)`;
    min_hand.style.transform = `rotate(${minutedegree}deg)`;
    hour_hand.style.transform = `rotate(${hourdegree}deg)`;
    // console.log(minute);
}
// setDate();
setInterval(setDate,1000);
