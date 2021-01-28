
function addUserTask(){
    var userInput = document.getElementById("userTask").value;
    var userDate = document.getElementById("taskDate").value;
    taskAdded(userInput, userDate);
}
function taskAdded(uTask="", uDate=""){
    if (uTask === "") {
        var req = document.getElementById('para');
        req.innerHTML="Please Enter a task";
        req.style.color='red';
    } else {
        let task=document.getElementById("addTask").innerHTML=uTask;
        let date=document.getElementById("addDate").innerHTML=uDate; 
        var req = document.getElementById('para');
        req.innerHTML="";                                  
    }
}
function deleteTask(){
    document.getElementById("addDate").innerHTML="";
    document.getElementById("addTask").innerHTML="";
}
