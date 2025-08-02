let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
btn.addEventListener("click",function(){
    let txt = inp.value;
    let li = document.createElement('li');
    li.innerHTML=txt;
    let dlt = document.createElement("button")
    dlt.classList.add("delete");
    dlt.innerText="Delete";
    li.appendChild(dlt);
    ul.appendChild(li);
    inp.value="";
});
// let dltBtns = document.querySelectorAll(".delete");
// for(dlt of dltBtns){
//     dlt.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
ul.addEventListener("click",function(event){
    console.dir(event.target);
    if(event.target.nodeName=="BUTTON")
        event.target.parentElement.remove();
});
