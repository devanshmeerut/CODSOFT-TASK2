    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

function addtask(){

    if (inputBox.value === ''){
          alert("you must writing something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();


}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        console.log(e.target.tagName+"a");
        saveData();
    }
    else if (e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
