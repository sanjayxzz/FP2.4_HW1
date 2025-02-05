

const tasks = [
  {Id:1, Task:"Task 1", status: "todo" },
  {Id:2, Task:"Task 2", status: "completed" },
  {Id:3, Task:"Task 1", status: "inProgress" },
  {Id:4, Task:"Task 1", status: "todo" },
  {Id:5, Task:"Task 1", status: "completed" }
]

const taskListContainer = document.querySelector("#taskList")
const filterRadioButtons = document.getElementsByName("status")

function renderTasks(selectedStatus) {
  const filteredTasks = selectedStatus === "all" ? tasks : tasks.filter(tasks => tasks.status === selectedStatus)

  
const taskListHTML = filteredTasks.map((tasks) => `
<li>
<strong> Id: </strong>${tasks.Id} <br>
<strong> Task: </strong>${tasks.Task} <br>
<strong> Status: </strong> ${tasks.status}
<hr>
</li>
`)

taskListContainer.innerHTML = taskListHTML.join('')
}

renderTasks("all")


filterRadioButtons.forEach(radioBtn => {
  radioBtn.addEventListener("change", function (){
    renderTasks(this.value)
  })
})




