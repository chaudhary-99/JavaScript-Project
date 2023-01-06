let arrval=[];
let item={index:0,};
function myFunction(){
    let inpval=document.querySelector('.inpval').value;
    if(inpval!==" "){
        item.index++;
        arrval.push(inpval);
        document.querySelector('.inpval').value=" ";
        let list=document.createElement("li");
        list.setAttribute('class', 'listdgn');
        let listval= document.createTextNode(arrval[item.index-1]);
        list.appendChild(listval);
        document.getElementById("myList").appendChild(list);
    }
}

function Funcdelt(){
    arrval.pop();
    let list = document.getElementById("myList");
    list.removeChild(list.lastElementChild);
    item.index--;
}

function Funcreset(){
    item.index=3;
    for(let i=0;i<item.index;i++){
        arrval.pop();
        let list = document.getElementById("myList");
        list.removeChild(list.firstElementChild);
    }
    item.index=0;
}