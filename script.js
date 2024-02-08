const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
        
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //Clear input field after you add
     inputBox.value = "";

     saveData();
    }


    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
        
    },false);

     //function to save data in browser to prevent data from deleting after refresh
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();
