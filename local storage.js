const name = document.getElementById('name')
const form = document.getElementById('form')
const button = document.getElementById('button')
const email = document.getElementById('email')
const Delete = document.getElementById('delete')
const output= document.getElementById('output')
const saveddata = JSON.parse(localStorage.getItem("userData"))
if(saveddata){
  output.innerHTML= `<p>name:${saveddata.username}</p><p>email:${saveddata.useremail}</p>`
}
form.addEventListener('submit',()=>{
  const userData = {
    username:name.value,
    useremail:email.value
  }
  localStorage.setItem('userData',JSON.stringify(userData));
 } )
 Delete.addEventListener(('click'),()=>{
   localStorage.clear();
   if (true) {
     output.innerHTML='';
   }
 })
 