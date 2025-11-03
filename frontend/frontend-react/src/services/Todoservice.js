const baseUrl = "http://localhost:3000/api/todo"

export async function getTodos() {
    try{
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        return data.task;
    }
    catch(error){
        console.error("error fetching todos:", error);
    }
    
}

export async function CreateTask(body) {
    try{
        const response = await fetch(baseUrl, {method: "POST", headers: {"Content-Type": "application/json" },body: body})
        const data = await response.json()
        console.log(data);
        return data.task;
    }
    catch(err){
        console.log("err"+ err);
        throw err;
    }
}

export async function DeleteTask(id) {
    try{
        const response = await fetch(`${baseUrl}/${id}`, {method: "DELETE", headers:{"Content-Type": "application/json"}})
        const data = await response.json()
        console.log(data.task);
        return data.task;
    }
    catch(err){
        console.log("error" , err)
    }
}

export async function UpdateTask(id, task, description, dueDate, completed, priority) {
    try{
        const body = JSON.stringify({task, description, dueDate, completed, priority})
        const response = await fetch(`${baseUrl}/${id}`,{method: "PUT", body: body, headers:{"Content-Type": "application/json"}})
        const data = await response.json()
        console.log(data);
        return data.task;
    }
    catch(err){
        console.log(err)
    }
} 

export async function ToggleTaskCompletion(id, completed) {
    try{
        const body = JSON.stringify({completed})
        const response = await fetch(`${baseUrl}/${id}`,{method: "PUT", body: body, headers:{"Content-Type": "application/json"}})
        const data = await response.json()
        console.log(data);
        return data.task;
    }
    catch(err){
        console.log(err)
    }   }