



        const form = document.getElementById("form");
        const input = document.getElementById("input");
        const todos = document.getElementById("todos");



//Prevents from reloading the page everytime we press enter.
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
               addTodo(); 
        });

               function addTodo(){
            const todoText = input.value;
//If we have a value for input, it creates an li element and appends it to the list of todos.
            if (todoText) {
                const todoEl = document.createElement("li");
                todoEl.textContent = todoText;
                todos.appendChild(todoEl);

                todoEl.addEventListener("click", () =>{
                    todoEl.classList.toggle("completed")
                });
                todoEl.addEventListener("contextmenu", (e) =>{
                    e.preventDefault();
                    todoEl.remove();
                })

//We use this to empty the value of the input after pressing enter.
                input.value = '';
            }
        

    };


    


