const domainname = "http://localhost:3000/api/todo/";
const form = document.getElementById("todo-form");
const tasksList = document.getElementById("show-Tasks");
const InputTask = document.getElementById("task-input");
const InputPriority = document.getElementById("priority-select");
const InputDueDate = document.getElementById("due-date");


const searchInput = document.getElementById("search-input");
const statusFilters = document.getElementsByName("status"); // radio buttons
const priorityFilters = document.querySelectorAll(".priority-filter input[type=checkbox]");
const dueDateFilter = document.getElementById("filter-due-date");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(InputTask.value)
  const body = JSON.stringify({ task: InputTask.value , priority: InputPriority.value, DueDate: InputDueDate.value ? new Date(InputDueDate.value) : null});
  
  await CreateTask(body);
  InputTask.value="";
  InputPriority.value="Medium";
  InputDueDate.value="";
  DisplayTasks();
});

async function DisplayTasks() {
  const data = await GetTasks();
  let tasks = data.task;
  tasksList.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    tasks = tasks.filter(t => t.task.toLowerCase().includes(searchTerm));
  }

  // --- 2. Apply Status Filter ---
  let selectedStatus = "all";
  statusFilters.forEach(radio => {
    if (radio.checked) selectedStatus = radio.value;
  });
  if (selectedStatus === "completed") {
    tasks = tasks.filter(t => t.completed);
  } else if (selectedStatus === "uncompleted") {
    tasks = tasks.filter(t => !t.completed);
  }

  // --- 3. Apply Priority Filter ---
  const selectedPriorities = Array.from(priorityFilters)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
  if (selectedPriorities.length > 0) {
    tasks = tasks.filter(t => selectedPriorities.includes(t.priority));
  }

  // --- 4. Apply Due Date Filter ---
  const dueBefore = dueDateFilter.value;
  if (dueBefore) {
    const filterDate = new Date(dueBefore);
    tasks = tasks.filter(t => t.dueDate && new Date(t.dueDate) <= filterDate);
  }
  tasks.forEach((i) => {
    tasksList.innerHTML += `<tr>
            <td> <input type="checkbox" ${i.completed ? "checked" : ""} onchange="toggleCompleted('${i._id}', this.checked)"> </td>
            <td style="text-decoration: ${
              i.completed ? "line-through" : "none"
            }">${i.task}</td>

            <td>${i.priority}</td>
            <td>${i.dueDate ? new Date(i.dueDate).toLocaleDateString() : 'No Due Date'}</td>
            <td>${new Date(i.date).toLocaleString([],{ month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</td>
            <td> <button onclick="deleteTask('${i._id}')">Delete</button></td>
            <td><button id="edit" onclick="editTask('${i._id}')">EDIT</button></td>
        </tr>`;
  });
  console.log(tasks);
  console.log(data);
}
DisplayTasks();
async function deleteTask(id) {
    try{
        await fetch(`${domainname}${id}`,{ method: "DELETE"});
    }
    catch(err)
    {
        console.log("err"+ err);
    }
    
    DisplayTasks();
}
function editTask(id) {    
    window.location.href = `edit.html?id=${id}`;
}

async function toggleCompleted(id, completed) {
  await fetch(`${domainname}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
  });
  DisplayTasks(); 
}

async function GetTasks() {
  const url = domainname;
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
async function CreateTask(body) {
  const url = domainname;
  try {
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, 
    body: body });
    const data = await response.json()
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-form-btn");
const closeBtn = document.getElementById("close-modal");

openBtn.onclick = () => { modal.style.display = "block"; };
closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

const filterToggle = document.getElementById("filter-toggle");
const filterOptions = document.getElementById("filter-options");

filterToggle.addEventListener("click", () => {
  filterOptions.style.display =
    filterOptions.style.display === "block" ? "none" : "block";
});

// Hide filters if clicked outside
window.addEventListener("click", (e) => {
  if (!filterToggle.contains(e.target) && !filterOptions.contains(e.target)) {
    filterOptions.style.display = "none";
  }
});

searchInput.addEventListener("input", DisplayTasks);
statusFilters.forEach(radio => radio.addEventListener("change", DisplayTasks));
priorityFilters.forEach(cb => cb.addEventListener("change", DisplayTasks));
dueDateFilter.addEventListener("change", DisplayTasks);
