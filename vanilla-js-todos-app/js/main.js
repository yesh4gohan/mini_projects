const todosDiv = document.getElementById('todo')
const inProgDiv = document.getElementById('inProgress')
const doneDiv = document.getElementById('done')
const addTaskButton = document.getElementById('add-task-button')
const todo_ip = document.getElementById('new-todo')
let elem = null;
//to lsit already existing todos
const dummyTodosData = {
    "todo":["Wake up","Brush","Bath"],
    "inProgress":[],
    "done":[]
}

const dragStart = (e) => {
    elem = e.target;      
    elem.classList.add('hold')
    setTimeout(() => {
        elem.classList.add('invisible')
    }, 0);
}


const dragend = (e) => {
    const self = e.target; 
    self.classList.remove('invisible')
    self.classList.remove('hold')

}

const dragover = (e) => {
    e.preventDefault();
}

const dragDrop = async e => {
    elem.classList.remove('invisible')
    elem.classList.remove('hold')
    const type = e.target.id;
    const parentType = elem.parentNode.id;
    if(type !== null && type !== undefined && type !== ""){
        e.target.append(elem)
        await updateTodoList(type,elem.innerText)
        updateTodoList(parentType,elem.innerText,"REMOVE")
    }
}
todosDiv.addEventListener('dragstart',dragStart)
inProgDiv.addEventListener('dragstart',dragStart)
doneDiv.addEventListener('dragstart',dragStart)

todosDiv.addEventListener('dragover',dragover)
inProgDiv.addEventListener('dragover',dragover)
doneDiv.addEventListener('dragover',dragover)

todosDiv.addEventListener('dragend',dragend)
inProgDiv.addEventListener('dragend',dragend)
doneDiv.addEventListener('dragend',dragend)

todosDiv.addEventListener('drop', dragDrop)
inProgDiv.addEventListener('drop',dragDrop)
doneDiv.addEventListener('drop',dragDrop)

todo_ip.addEventListener('input',(e)=>{
    if(e.target.value !== ""){
        if(addTaskButton.classList.contains('disabled')){
            addTaskButton.classList.remove('disabled')
        }
    }
    else {
        addTaskButton.classList.add('disabled')
    }
})
document.addEventListener('DOMContentLoaded',async ()=> {
    if(!localStorage.getItem("todosList")){
        localStorage.setItem("todosList",JSON.stringify(dummyTodosData));
    }
    try {
        const data = await getTodosData();
        populateDom(data);
        increaseListHeight(data);
    } catch (error) {

    }
})

addTaskButton.addEventListener('click',async ()=>{
    const todoValue = todo_ip.value;
    if(todoValue !== null && todoValue !== ""){
        await updateTodoList("todo",todoValue);
        todosDiv.innerHTML += `<div class="single-todo-container" draggable=true>${todoValue}</div>`
        todo_ip.value = '';
    }
})

const getTodosData = async () => {
    const todosData = await mockApi()
    return todosData;
}

const increaseListHeight = (data) => {
    const {todo,inProgress,done} = data;
    const todosHeight = todo.length?(todo.length*60):60;
    const inprogressHeight = inProgress.length?(inProgress.length*60):60;
    const doneHeight = done.length?(done.length*60):60;
    todosDiv.style.height = `${todosHeight}px`;
    inProgDiv.style.height = `${inprogressHeight}px`;
    doneDiv.style.height = `${doneHeight}px`;
}
const mockApi = async () => {
    const mockData = JSON.parse(localStorage.getItem("todosList")) || dummyTodosData;
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve(mockData);
        }, 2000);
    })
}

const populateDom = (data) => {
    const {todo,inProgress,done} = data;
    todo && populateIndiVisiualList("todo",todo)
    inProgress && populateIndiVisiualList("inProgress",inProgress)
    done && populateIndiVisiualList("done",done)

}

const populateIndiVisiualList = (type,data) => {
    let contentStr = ''
    data
    .map((content)=>{
        contentStr += `<div class="single-todo-container" draggable=true>${content}</div>`
    })
    switch (type) {
        case "todo":
            todosDiv.innerHTML = contentStr
        break;
        case "inProgress":
            inProgDiv.innerHTML = contentStr
        break;
        case "done":
            doneDiv.innerHTML = contentStr
        break;
        default:
            todosDiv.innerHTML = contentStr
        break;
    }
}

const modifyList = (data,key,value,op) => {
    if(data && data[key]){
        if(op === "ADD"){
            data[key].push(value);
        }
        else {
            data[key].splice(data[key].indexOf(value),1);
        }
    return data;
    }
    return []
}

const disableEnableDrag = (dragFlag = false) => {
    const todoBoxes = document.querySelectorAll('.single-todo-container');
    for(let todoBox of todoBoxes){
        if(!dragFlag){
            todoBox.draggable = false;
        }
        else {
            todoBox.draggable = true;
        }
    }
    
}
const updateTodoList = async (type,value,op="ADD") => {
    disableEnableDrag(false);
    let todosData = await mockApi();
    switch (type) {
        case "todo":
            todosData = modifyList(todosData,"todo",value,op)
            //todosData && todosData.todo && todosData.todo.push(value)
        break;
        case "inProgress":
            todosData = modifyList(todosData,"inProgress",value,op)
            //todosData && todosData.inProgress && todosData.inProgress.push(value)
        break;
        case "done":
            todosData = modifyList(todosData,"done",value,op)
            //todosData && todosData.done && todosData.done.push(value)
        break;
        default:
            todosData = modifyList(todosData,"todo",value,op)
            //todosData && todosData.todo && todosData.todo.push(value)
        break;
    }
    localStorage.setItem("todosList",JSON.stringify(todosData));
    increaseListHeight(todosData);
    disableEnableDrag(true);
}

