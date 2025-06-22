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
    } else {
        edit.classList.add("focus"); 
        edit.innerHTML = "Editing mode";
        editButton.innerHTML = "Save";
        document.getElementById("background").style.backgroundColor = '#006aff80';
        makeContentEditable();
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
var pan = document.getElementById("pan"); // The pan icon that allows moving of menus
var menuPopup = document.getElementById("menuPopup");
var sideMenuButton = document.getElementById("sideMenuButton");

//#region Menu Drag 

    pan.addEventListener("mousedown", e => {
        var movingElement = menu;
        var x = e.pageX;
        var y = e.pageY;

            movingElement.style.left = (x - menuList.offsetWidth + 24) + 'px';
            movingElement.style.top = (y - menuNavbar.offsetHeight - 24) + 'px';

            document.onmousemove = e => {
                if(movingElement) {
                    var x = e.pageX;
                    var y = e.pageY;

                    // menuPopup.style.hide = "0px";
                    movingElement.style.left = (x - menuList.offsetWidth + 32) + 'px';
                    movingElement.style.top = (y - menuNavbar.offsetHeight + 8) + 'px';
                    movingElement.style.rotate = "-5deg";
                }
                

            };

            document.addEventListener("mouseup", e => {
                if(!movingElement) return;
                movingElement.style.rotate = "2deg";
                movingElement = null;
            });

        
        
    });

    menu.addEventListener("pointerenter", e => {
        menu.style.rotate = "0deg";
    });

    menu.addEventListener("pointerleave", e => {
        menu.style.rotate = "2deg";
    });

//#endregion

//#region Side Menu (Not the pop-up menu from menu list) 

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

//#endregion

//#region Adjusting menu list position when drag icon is hidden



//#endregion

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