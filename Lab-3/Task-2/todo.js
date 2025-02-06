document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("input");
    const addTaskBtn = document.getElementById("button");
    const taskList = document.getElementById("list");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `<span>${taskText}</span> <button class="delete">X</button>`;
            li.querySelector("span").addEventListener("click", () => {
                li.classList.toggle("completed");
            });
            li.querySelector(".delete").addEventListener("click", () => {
                li.remove();
            });
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});