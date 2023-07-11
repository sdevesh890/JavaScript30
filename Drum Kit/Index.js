window.addEventListener("keydown",(e)=>
{
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const transf = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) return;
   transf.classList.add('playing');
   audio.currentTime = 0;
   audio.play();
   transf.classList.add('playing');
});

function removetransition(e)
{
   if(e.propertyName!=='box-shadow')
   {
      return;
   }
   this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend',removetransition));