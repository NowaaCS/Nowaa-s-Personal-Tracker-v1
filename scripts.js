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

// Class listeners

var menu = document.getElementById("menu");
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