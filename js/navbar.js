var header = document.getElementById('container-nav');
var navbar = document.getElementById('navbar');
var paragraph = document.getElementById('paragraph');
var ulContainer = document.getElementById('ul-container');
var icon = document.getElementsByClassName('icon')[0];
// window.onresize= () =>{
//     navbar.classList.add('hide');
   
// }
// icon.addEventListener('click', openMenu);
//  function openMenu (){
// ulContainer.style.display='none'
// }
window.onload=()=>ulContainer.style.display='none';

icon.addEventListener('click', openMenu);
function openMenu(){
    if( ulContainer.style.display=='block'){
        ulContainer.style.display='none'
    }
   else{
    ulContainer.style.display='block'
   }
}

