const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get("id");
console.log(taskId);
const domainname = "http://localhost:3000/api/todo/"

const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const dueDateInput = document.getElementById("due-date");

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(`${domainname}${taskId}`);
    const data = await res.json();
    
    taskInput.value = data.task.task;
    console.log(prioritySelect.value);
    prioritySelect.value = data.task.priority;
    console.log(data.task.priority);
    
    // Format date for input type="date"
    if (data.task.dueDate) {
      dueDateInput.value = new Date(data.dueDate).toISOString().split("T")[0];
    }
  } catch (err) {
    console.error("Failed to load task:", err);
  }
});
document.getElementById("edit-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = JSON.stringify({
    task: taskInput.value,
    priority: prioritySelect.value,
    dueDate: dueDateInput.value
  });
  await fetch(`${domainname}${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body
  });
  window.location.href = "index.html"; // back to main page
});
