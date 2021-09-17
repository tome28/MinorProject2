let myArr = [];
function arrCheckAdd() {
    for(let i =0;i<=myArr.length;i++){
        console.log(myArr[i]);
        
    };
    document.querySelectorAll(".creditNo")[0].innerHTML = `Players selected till now are : ${myArr}`;
}
function arrCheckSub(name) {
    for(let i =0;i<=myArr.length;i++){
        console.log(myArr[i]);
        if(myArr[i]==name){
            myArr.splice(i,1,)
        }
         
    };
    document.querySelectorAll(".creditNo")[0].innerHTML = `Players selected till now are :${myArr} `;
};

let count = 0;
let progressBarCount = 0;
let name;
function clicked(name) {
    if (count <= 10) {
        count = count + 1;
        progressBarCount = progressBarCount + 100 / 11;
        document.querySelectorAll(".playerNumber")[0].innerHTML = `Players Selected:${count}/11`;
        document.querySelectorAll(".progress")[0].innerHTML = `<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:${progressBarCount}%;"
        aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>`;
        console.log("was clicked");
        myArr.push(name);
        arrCheckAdd();

    }
    else {
        alert("you cannot have more than 11 players");
    }
}
function subClicked(name) {
    if (count > 0) {
        count = count - 1;
        progressBarCount = progressBarCount - 100 / 11;
        document.querySelectorAll(".playerNumber")[0].innerHTML = `Players Selected:${count}/11`;
        document.querySelectorAll(".progress")[0].innerHTML = `<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:${progressBarCount}%;"
        aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>`;
        arrCheckSub(name);

    }
    else{
        alert("You cannot have less than 0 players");
    }
}

