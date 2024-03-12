// Constructors
function Task(task_name, task_weight) {
    this.name = task_name;
    this.weight = task_weight;
}

Task.return_taskname = function () {
    return this.task_name + "";
};

function add_subtask(Task, subtask) {
    Task.prototype.subtask;
}

// Arrays

// Functions
function editListItems() {
    var edit = document.getElementById("edit")
    var editButton = document.getElementById("edit-button");

    if(edit.classList.contains("focus")) {
        edit.classList.remove("focus"); 
        editButton.innerHTML = "Edit";
        edit.innerHTML = "Viewing mode";
        edit.width = edit.offsetWidth + 20 + 'px';
        document.getElementById("background").style.backgroundColor = '#800080b3';
        makeContentUneditable();
        console.log("removed");
    } else {
        edit.classList.add("focus"); 
        edit.innerHTML = "Editing mode";
        editButton.innerHTML = "Save";
        document.getElementById("background").style.backgroundColor = '#006aff80';
        makeContentEditable();
        console.log("add");
    }
}

function makeContentEditable() {
    const listItems = document.querySelectorAll(".menu-list-item")
    listItems.forEach(listItem => {
        listItem.contentEditable = "true";
        // listItem.draggable = "true";
    });
}

function makeContentUneditable() {
    const listItems = document.querySelectorAll(".menu-list-item")
    listItems.forEach(listItem => {
        listItem.contentEditable = "false";
        // listItem.draggable = "false";
    });
}

// Class listeners

var menu = document.getElementById("menu");
var menuList = document.getElementById("menu-list");
var menuNavbar = document.getElementById("menu-navbar");

// Menu Drag

var pan = document.getElementById("pan");
pan.addEventListener("mousedown", e => {
    var movingElement = menu;
    document.onmousemove = e => {
        var x = e.pageX;
        var y = e.pageY;
    
        movingElement.style.left = (x - menuList.offsetWidth + 8) + 'px';
        movingElement.style.top = (y - menuNavbar.offsetHeight - 24) + 'px';
    };

    document.addEventListener("mouseup", e => {
        movingElement = null;
    });
        
});
    





// menu.addEventListener("dragstart", e => {
//     console.log("dragging menu");
//     menu.classList.add("dragging");
//     menu.addEventListener("mousemove", e => {
        // menu.style.top = e.clientY + 'px';
        // menu.style.left = e.clientX + 'px';
//     });
// });



// menu.addEventListener("dragend", e => {
//     console.log("dragging menu end");
//     menu.style.top = e.clientY + 'px';
//     menu.style.left = e.clientX + 'px';
//     menu.classList.remove("dragging");
// });

var menuPopup = document.getElementById("menuPopup");
var sideMenuButton = document.getElementById("sideMenuButton");
    sideMenuButton.addEventListener("click", function() {

        var sideMenu = document.getElementById("sideMenu");
        
        if(sideMenuButton.style.color != "black") {
            sideMenuButton.style.color = "black";
            sideMenuButton.style.rotate = "180deg"
            sideMenu.style.width = "200px";
            menu.style.transform = "translateX(110%)";
            menu.style.transform = "rotate(0.4deg)";

        } else {
            sideMenuButton.style.color = "white";
            sideMenuButton.style.rotate = "0deg"
            sideMenu.style.width = "0px";
            // sideMenu.style.transform = "translateX(0%)";
            menu.style.transform = "translateX(0%)";
            menu.style.transform = "rotate(-0.4deg)";

        }
        
    });


    menu.addEventListener("pointerenter", function() {
        menuPopup.style.width = "160px";
        menuPopup.style.top = document.getElementById("menu-navbar").offsetHeight + "px";
        // menuPopup.style.height = document.getElementById("menu-list").style.height;
    });

    menu.addEventListener("pointerleave", function() {
        menuPopup.style.width = "0px";
        menuPopup.style.top = document.getElementById("menu-navbar").offsetHeight + "px";
        menuPopup.style.height = document.getElementById("menu-list").style.height;
    });

    const menuButtons = document.querySelectorAll(".menu-button");
    
    menuButtons.forEach(button => {

        button.addEventListener("click", function() {
            
            menuButtons.forEach(otherButtons => {
                otherButtons.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

    const listItems = document.querySelectorAll(".menu-list-item");
    listItems.forEach(item => {

        item.addEventListener("click", e => {
            
            listItems.forEach(otherItems => {
                otherItems.querySelector(".more-info").style.height = "0px";
            });

            if(item.querySelector(".more-info").style.height == "0px") {
                item.querySelector(".more-info").style.height = "6rem";
                item.querySelector(".more-info").style.padding = "8px";
                item.querySelector(".more-info").style.maxHeight = "fit-content";
            } else {
                item.querySelector(".more-info").style.height = "0px";
                item.querySelector(".more-info").style.padding = "0px";
            }

        });

        item.addEventListener("pointerleave", e => {
            
            item.querySelector(".more-info").style.height = "0px";
            item.querySelector(".more-info").style.padding = "0px";

        });
    });
    
    // Button light hover effect
    var cursorPosition = document.documentElement;
    var lightElements = document.querySelectorAll(".menu-button::before");

    lightElements.forEach(lightElement => {
        const parentButton = lightElement.parentElement;  // Get the parent button element

        parentButton.addEventListener("mousemove", e => {
            // Update the light element's position based on cursor coordinates
            lightElement.style.top = e.clientY + 'px';
            lightElement.style.left = e.clientX + 'px';
        });
    });

    sideMenu.style.width = "0";