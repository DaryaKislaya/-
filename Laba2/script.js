function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var task = document.createElement("li");
        var taskText = document.createElement("span");
        var taskDate = document.createElement("span");
        var deleteButton = document.createElement("button");
        var date = new Date(); // Получаем текущую дату и время

        taskText.textContent = taskInput.value.trim();
        taskDate.textContent = date.toLocaleString(); // Форматируем дату
        deleteButton.textContent = "Удалить";
        deleteButton.onclick = function() {
            task.remove();
        };

        task.appendChild(taskText);
        task.appendChild(taskDate);
        task.appendChild(deleteButton);
        taskList.appendChild(task);
        taskInput.value = "";
    } else {
        alert("Пожалуйста, введите задачу!");
    }
}

function deleteAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Очищаем весь список задач
}
