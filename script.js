const addButton = document.getElementById("addButton");
        const taskInput = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");

        addButton.addEventListener("click", addTask);

        function addTask() {
            const taskText = taskInput.value;
            if (taskText.trim() !== "") {
                const li = document.createElement("li");

                const span = document.createElement("span");
                span.textContent = taskText;
                li.appendChild(span);

                const actionButtons = document.createElement("div");
                actionButtons.classList.add("action-buttons");

                const completeButton = document.createElement("button");
                completeButton.textContent = "Complete";
                completeButton.classList.add("complete-button");
                completeButton.addEventListener("click", () => {
                    li.classList.toggle("completed");
                });

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("delete-button");
                deleteButton.addEventListener("click", () => {
                    taskList.removeChild(li);
                });

                actionButtons.appendChild(completeButton);
                actionButtons.appendChild(deleteButton);

                li.appendChild(actionButtons);
                taskList.appendChild(li);

                taskInput.value = "";
            }
        }

        taskInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                addTask();
            }
        });