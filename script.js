// & Below function load all the todo items present in localstorage and return all the todo in form of object as all the todo are present in string form
function loaddata(key){
    const data=JSON.parse(localStorage.getItem(key))||{"todoList":[]};
    return data;
}

// & Below function pushes the todo items into the array of the object returned by the loaddata function.
function addtoDoItem(todoText){
    const data = loaddata('todo');
    data.todoList.push({
        text:todoText,
        completed:false,
    });
    localStorage.setItem("todo",JSON.stringify(data));
}

//& Append the items into the unordered list.
function appendChildInList(value)
{
    const taskList=document.getElementById("taskList");

    let element=document.createElement("li")
    element.textContent=value;

    // let editbtn=document.createElement("button");
    // let deletebtn=document.createElement("button");
    // let completedbtn=document.createElement("button");

    // editbtn.textContent="Edit";
    // deletebtn.textContent="Delete";
    // completedbtn.textContent="Completed";

    // editbtn.classList.add("editbutton");
    // deletebtn.classList.add("deletebutton");
    // completedbtn.classList.add("completedbutton");

    // element.appendChild(editbtn);
    // element.appendChild(deletebtn);
    // element.appendChild(completedbtn);

    taskList.appendChild(element);
}

// & this is a eventlistner which is called only after all the DOM content is loaded on the page.
document.addEventListener("DOMContentLoaded",()=>{
    // console.log("dom content successfully loaded");

    const input=document.getElementById("inputToDo");

    const btn=document.getElementById("addToDo");

    const list=document.getElementById("taskList");


    //& Below code writes the output of all the changes on the console.
    input.addEventListener("change",(e)=>{
        const text=e.target.value;

        e.target.value=text.trim();

        // console.log(e.target.value);
    })

    // & Below code manges the event that what to do after clicking the button
    btn.addEventListener("click",(e)=>{
        let todovalue=inputToDo.value;

        if(todovalue=='')
        {
            alert('Please Enter Some value');
        }
        else{
            addtoDoItem(todovalue);
            appendChildInList(todovalue);
            inputToDo.value='';
        }
    })

    
    //& What is use case of below code.
    //! Below code insert all the todo items in the ul tag as page refreshes so that no previous todo are lost.
    const todos = loaddata('todo');
    // console.log(todos);

    todos["todoList"].forEach(todo => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = todo.text;
        list.appendChild(newTodoItem);
    })
});

