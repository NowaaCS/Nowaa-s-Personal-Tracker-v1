// User settings
var enableRotation = true;

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

function editSettings() {
    console.log("CLICKED");
    var edit = document.getElementById("edit")
    var settingsButton = document.getElementById("settings-button");

    if(edit.classList.contains("focus")) {
        edit.classList.remove("focus"); 
        settingsButton.style.rotate = "-180deg";
        edit.innerHTML = "Viewing mode";
        edit.width = edit.offsetWidth + 20 + 'px';
        document.getElementById("background").style.backgroundColor = 'hsla(300, 100%, 25%, 0.702)';
        makeContentUneditable();
    } else {
        edit.classList.add("focus"); 
        settingsButton.style.rotate = "180deg";
        edit.innerHTML = "Adjusting settings";
        document.getElementById("background").style.backgroundColor = 'hsl(125.42deg 100% 15.31% / 61%)';
        makeContentEditable();
    }
}

function toggleMotion() {
    var disableMotionButton = document.getElementById("disable-motion-button")
    var root = document.querySelector(":root");
    var rs = getComputedStyle(root);
    console.log(root.style.getPropertyValue("--transition-time"));

    if(root.style.getPropertyValue("--transition-time") != "0s") {
        root.style.setProperty("--transition-time", "0s");
        disableMotionButton.innerHTML = "toggle_off";
        turnOffRotation();
        alert("Motion disabled");
        return;
    } 

    root.style.setProperty("--transition-time", "0.3s");
    disableMotionButton.innerHTML = "toggle_on";
    turnOnRotation();
    alert("Motion enabled");


}
var btnRotationToggle = document.getElementById("rotation-toggle-button")

function toggleRotation() {

    if(enableRotation == true) {
        turnOffRotation();
    } else {
        turnOnRotation();
    }

}

function turnOffRotation() {
    btnRotationToggle.innerHTML = "toggle_off";
        menu.style.rotate = "initial";
        enableRotation = false;
}

function turnOnRotation() {
    btnRotationToggle.innerHTML = "toggle_on";
        enableRotation = true;
}

function editListItems() {
    var edit = document.getElementById("edit")
    var editButton = document.getElementById("edit-button");
    const parentElement = editButton.parentElement;

    if(edit.classList.contains("focus")) {
        edit.classList.remove("focus"); 
        parentElement.style.height = `${parentElement.offsetHeight - 32}px`;
        edit.innerHTML = "Viewing mode";
        edit.width = edit.offsetWidth + 20 + 'px';
        document.getElementById("background").style.backgroundColor = '#800080b3';
        makeContentUneditable();
    } else {
        edit.classList.add("focus"); 
        edit.innerHTML = "Editing mode";
        parentElement.style.height = `${parentElement.offsetHeight + 32}px`;
        document.getElementById("background").style.backgroundColor = '#006aff80';
        makeContentEditable();
    }
}

function makeContentEditable() {
    const listItems = document.querySelectorAll(".menu-list-item")
    listItems.forEach(listItem => {
        listItem.contentEditable = "true";
        listItem.style.cursor = "text";
        // listItem.draggable = "true";
    });
}

function makeContentUneditable() {
    const listItems = document.querySelectorAll(".menu-list-item")
    listItems.forEach(listItem => {
        listItem.contentEditable = "false";
        listItem.style.cursor = "arrow";
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
                    if(enableRotation == true) {
                        console.log("enabled");
                        movingElement.style.rotate = "-2deg";
                    }
                }
                

            };

            document.addEventListener("mouseup", e => {
                if(!movingElement) return;
                // movingElement.style.rotate = "2deg";
                movingElement = null;
            });

        
        
    });

        console.log("enabled");
        menu.addEventListener("pointerenter", e => {
            if(enableRotation == true) {
                menu.style.rotate = "0deg";
            }
        });

        menu.addEventListener("pointerleave", e => {
            if(enableRotation == true) {
                menu.style.rotate = "2deg";
            }
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

        } else {
            sideMenuButton.style.color = "white";
            sideMenuButton.style.rotate = "0deg"
            sideMenu.style.width = "0px";
            // sideMenu.style.transform = "translateX(0%)";
            menu.style.transform = "translateX(0%)";

        }
        
    });


    // menu.addEventListener("pointerenter", function() {
    //     menuPopup.style.width = "160px";
    //     menuPopup.style.top = document.getElementById("menu-navbar").offsetHeight + "px";
    //     // menuPopup.style.height = document.getElementById("menu-list").style.height;
    // });

    // menu.addEventListener("pointerleave", function() {
    //     menuPopup.style.width = "0px";
    //     menuPopup.style.top = document.getElementById("menu-navbar").offsetHeight + "px";
    //     menuPopup.style.height = document.getElementById("menu-list").style.height;
    // });

//#endregion

//#region Adjusting menu list position when drag icon is hidden

let options = {
    root: null,
    rootMargin: "0px",
    threshold: [],
};

    let threshold = [];

for (let i = 0; i <= 1.0; i += 0.1) {
    threshold.push(i);
  }

options.threshold = threshold;

let observer = new IntersectionObserver(callback, options);

observer.observe(document.getElementById("menu"));

function callback(entries, observer) {
    entries.forEach((entry) => {
      let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}`;
  
      if (visiblePct < 25) {
        // Calculate top position to keep pan icon visible
        let navbarHeight = document.getElementById("menu-navbar").offsetHeight;
        let iconHeight = document.getElementById("pan").offsetHeight; // Get pan icon height
        let newTop = `calc(100% - ${navbarHeight}px - ${iconHeight}px)`; // Adjust calculation as needed
        menu.style.top = newTop;
      } else {
        // Reset top position when fully visible
        menu.style.top = null; // Remove any top style set previously
      }
  
      console.log(visiblePct);
    });
  }






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