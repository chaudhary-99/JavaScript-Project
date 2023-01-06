let start = { make: true, };

function Addnum(e) {
    start.index = 1;
    for (let i = 1; i <= e; i++) {
        for (let j = 1; j <= e; j++) {
            let col = document.getElementById(start.index);
         
            console.log(start.index);
            if(start.index===e*e){
                col.innerHTML =" ";
                
            }
            else{
               col.innerHTML = start.index;
            }
       
            start.index++;
        }
    }

}

function myfunction() {
    if (start.make) {
        start.value1 = document.querySelector('.info1').value;
        start.value2 = document.querySelector('.info2').value;

        start.index = 1;
        for (let i = 0; i < start.value1; i++) {

            let boxArea = document.querySelector('.boxArea');
            let rows = document.createElement('div');
            rows.setAttribute('class', 'Allrows');
            boxArea.appendChild(rows);
            for (let j = 0; j < start.value2; j++) {
                let cols = document.createElement('div');
                cols.setAttribute('class', 'Allcols');
                cols.setAttribute('id', start.index);
                rows.appendChild(cols);

                start.index++;
            }
        }
    }
    //console.log("UP");
    Addnum(start.value1);
    //console.log("down");
    start.make = false;

}


function functionReset() {
    start.value1 = document.querySelector('.info1').value = " ";
    start.value2 = document.querySelector('.info2').value = " ";
    document.querySelector('.boxArea').classList.add("hide");

    start.make = true;
    document.querySelector('.btnmake').addEventListener("click", myfunction);


}






/*let car = document.createElement('div');
    car.setAttribute('class', 'cars');
    gameArea.appendChild(car);*/
