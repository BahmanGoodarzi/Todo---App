const todo = document.querySelector(".todo");
const add = document.querySelector(".top-fild > img");
const input = document.querySelector(".top-fild > input");
const select = document.querySelector(".fild-bottom > .select");
const clearComplet = document.querySelector(".clear > span");
const dark = document.querySelector(".sun");
const body = document.querySelector("body");
const Light = document.querySelector(".moon");

add.addEventListener('click', addTodo);
todo.addEventListener('click', delTodo);
select.addEventListener('click', delUncompleted);
clearComplet.addEventListener('click', killComp);


function addTodo() {
    const fildDiv = document.createElement("div");
    fildDiv.classList.add("fild");

    const raidioDiv = document.createElement("div");
    raidioDiv.classList.add("raidio");
    fildDiv.appendChild(raidioDiv);

    const chech = document.createElement("img");
    chech.classList.add("added")
    chech.src = "./images/icon-check.svg";
    raidioDiv.appendChild(chech);

    const text = document.createElement("p");
    text.innerText = input.value;
    fildDiv.appendChild(text);

    const del = document.createElement("img");
    del.classList.add("delete")
    del.src = "./images/icon-cross.svg";
    fildDiv.appendChild(del);

    todo.appendChild(fildDiv);

    input.value = "";
};

function delTodo(e) {
    const item = e.target;
    const itemParent = item.parentElement;
    const parents = itemParent.parentElement;

    if (item.classList[0] === "delete") {
        itemParent.remove();
    }

    if (item.classList[0] === "added") {
        itemParent.classList.toggle("active");
        parents.classList.toggle("compelet");
    }
}

function delUncompleted(e) {
    const todos = todo.childNodes;

    todos.forEach(function (t) {
        switch (e.target.className) {
            case "all":
                t.style.display = "flex";
                break;

            case "completed":
                if (t.classList.contains("compelet")) {
                    t.style.display = "flex";
                } else {
                    t.style.display = "none";
                }
                break;

            case "act":
                if (!t.classList.contains("compelet")) {
                    t.style.display = "flex";
                } else {
                    t.style.display = "none";
                }
                break;
        }
    });
}

function killComp(e) {
    const todos = todo.childNodes;

    todos.forEach(function (t) {
        if (e.target) {
            if (t.classList.contains("compelet")) {
                t.style.display = "none"
            }
        }
    });
};


function darkLight(value) {
    debugger
    if (value == true) {
        dark.style = "display : none";
        Light.style = "display : block";
        body.style = "background : #adb5bd";
    } else {
        dark.style = "display : block";
        Light.style = "display : none";
        body.style = "background : #0e0e1b";
    }
}