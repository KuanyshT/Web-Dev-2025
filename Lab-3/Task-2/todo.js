document.addEventListener("DOMContentLoaded", () => {

    const taskInput = document.getElementById("input");
    const addTaskBtn = document.getElementById("button");
    const taskList = document.getElementById("list");
    const deleteAllButton = document.getElementById("dab");


    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `<span><label class = "checkbox"> <input type = "checkbox"></label></span> ${taskText} <button class="delete">X</button>`;


            li.querySelector("span").addEventListener("click", () => {
                li.classList.toggle("completed");
            });


            li.querySelector(".delete").addEventListener("click", () => {
                li.remove();
            });


            taskList.appendChild(li);
            taskInput.value = "";
        }
        else{
            alert("Empty input isnt available");
        }
    });

    deleteAllButton.addEventListener("click", () => {
        window.location.reload();
    });
});
