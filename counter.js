const counterelement = document.getElementById('counter');
const plusbtn = document.getElementById('plusbtn');
const minusbtn= document.getElementById('minusbtn');
let counter = 0;
const updatecounter=(value)=>{
 counter=counter+value
 counterelement.innerText=counter;
 if(counter>=10){
  plusbtn.setAttribute('disabled', true);
 }
 else {
  plusbtn.removeAttribute('disabled',false)
 }
 //minus

 if(counter<=0){
  minusbtn.setAttribute('disabled',true)
 }
 else{
  minusbtn.removeAttribute('disabled',false);
 }
}

plusbtn.addEventListener('click',()=>{
 updatecounter(1);
})
minusbtn.addEventListener('click',()=>{
 updatecounter(-1);
})