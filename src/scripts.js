// change mode in ToDoList
const icon = document.getElementById("icon")
const header = document.getElementsByClassName("header")
icon.onclick = function (){
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")){
        icon.src = "/res/img/icon-sun.svg"
    }else {
        icon.src = "/res/img/icon-moon.svg"
    }
}

// add and delete tasks in list and in localstorage
const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".list")
showTasks();

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New ToDo");
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData)
    localStorage.setItem("New ToDo", JSON.stringify(listArr));
    showTasks();
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New ToDo");
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;

    let newLiTag = ''
    listArr.forEach((element, index) => {
        newLiTag += `<li class="item draggable" draggable="true">
                    <button type="submit" class="list__item--unchecked"></button>
                    <span class="text">${element}</span>
                    <button class="list__item--delete" onclick="deleteItem(${index})";>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                            <path fill="#494C6B" fill-rule="evenodd"
                                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path>
                        </svg>
                    </button>
                </li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

// delete or remove item of list and localstorage
function deleteItem(index) {
    let getLocalStorage = localStorage.getItem("New ToDo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New ToDo", JSON.stringify(listArr));
    showTasks();
}
// checked and unchecked



// filter the tasks

function onChange(element) {
    const filterOPtion = document.getElementsByClassName("filter__option");
    filterOPtion.style.color = "#3a7cfd"
}

//Drag and Drop task
const dragTasks = document.querySelector(".list");
new Sortable(dragTasks, {
    animation: 300
});



