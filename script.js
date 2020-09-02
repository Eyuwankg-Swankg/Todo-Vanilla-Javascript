//localStorage.setItem("data",["999","complete this projecte"]);
var list = document.querySelector(".list");

//add local storage todos
var localTodo=localStorage.getItem("data").split(',');
if(localTodo.length>2){
    for(let i=2;i<localTodo.length;i+=2){
        var checkbox = document.createElement("input");
        var label = document.createElement("label");

        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");
        checkbox.setAttribute("class", "checklabel");
        checkbox.setAttribute("id", localTodo[i]);
        
        label.innerHTML = localTodo[i+1];
        label.setAttribute("for", localTodo[i]);

        var li = document.createElement("li");
        li.appendChild(checkbox);
        li.appendChild(label);

        //append element into the list to add todo
        list.appendChild(li);
    }
}

//declare variables to access dom elements
var inputTodo=document.getElementById('etodo')
var addtodo = document.getElementById("addtodo");
var removetodo = document.getElementById("removetodo");;
var removeall = document.getElementById("removeall");

var input;

addtodo.addEventListener('click',()=>{
    input=inputTodo.value;
    
    if(input=='')
        alert("Dude add you Task");
    else
        addTodo();        
});

function addTodo() {
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    //getting random num for unique storage
    var num = Math.floor(Math.random() * 10000);

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("class", "checklabel");
    checkbox.setAttribute("id",String(num));

    label.innerHTML = input;
    label.setAttribute('for',String(num));
    
    var li=document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(label);
    
    //append element into the list to add todo
    list.appendChild(li)
    
    var l=localStorage.getItem("data").split(',');
    l.push([String(num),input]);

    localStorage.setItem("data",l);
    inputTodo.value=''
}

document.addEventListener('keydown',function(e) {
    if(e.which==13){
        input = inputTodo.value;
        if (input == "") 
            alert("Dude add you Task");
        else addTodo();  
    }
});

removetodo.addEventListener('click',()=>{
    var flag;
    do{
        flag=0;
        var removeli=list.childNodes;
        var id;
        for(let i=1;i<removeli.length;i++){
            if(removeli[i].firstChild.checked){
                id = removeli[i].firstChild.id;
                list.removeChild(removeli[i]);
                var l=localStorage.getItem("data").split(",");
                l.splice(l.indexOf(id),2);
                localStorage.setItem("data",l);
                flag=1;
            }
        }
    }while(flag==1);
});


removeall.addEventListener('click',()=>{
    while (list.hasChildNodes()) 
        list.removeChild(list.firstChild);
    localStorage.clear();
    localStorage.setItem("data",["999","complete this project"]);
});