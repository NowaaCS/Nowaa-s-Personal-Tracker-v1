<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <title>IDK why github doesnt upload stuff Nowaa's Personal Tracker</title>
</head>

<body>

<dialog id="addTask">
    SHOW STUFF BABY
    <button onclick="addTask.close()">X</button>
</dialog>


<div class="container fullscreen">
        <button class="material-symbols-outlined" 
        id="sideMenuButton"
        style="
            color: white;
            position: absolute;
            top: 10px;
            left: 10px;
            transition: 300ms;
            z-index: 2;
            ">
            chevron_right
        </button>
    <div class="sideMenu" 
        id="sideMenu">
        <ul>
            <div>
            <li>[icon] Home</li>
            <li>[icon] Account</li>
            <li>[icon] Goals</li>
            <li>[icon] Finances</li>
            <li>[icon] Notifications</li>
            </div>

            <div>
            <li>Filler</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Accessibility</li>
            </div>
            <h6>Personal Tracker v0.04</h6>

        </ul>
    </div>
    <div class="container fill" style="
        flex: 8;
        background-color: #800080b3;
        flex-direction: column;
        ">
        
        <div class="menu" id="menu">
            <div class="menu-contents">

                <div class="menu-navbar" id="menu-navbar">
                    <button class="menu-button" id="menu-button">Tracker</button>
                    <button class="menu-button" id="menu-button">CST5L Project</button>
                    <button class="menu-button" id="menu-button">Chores</button>
                    <button class="menu-button" onclick="addTask.showModal()" id="menu-button" style="width: 50%; margin-right: 8px">+</button>
                </div>

                <div class="menu-list" id="menu-list">
                    <!-- We refactor this to remove inline CSS -->
                    <span style="
                    display: flex;
                    justify-content: space-between;">
                    <h4>We could have the goal name here</h4>
                    <h6 class="material-symbols-outlined draggable">pan_tool</h6>
                    </span>
                    <ul>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            You'd have to face the backend eventually <br>[Progress bar] 1% finished
                            <ul class="more-info">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Imply if there's hidden elements somehow <br>[Progress bar] 2% finished
                            <ul class="more-info">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Never forget the animation overshoots baby <br>[Progress bar] 3% finished
                            <ul class="more-info">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Everything is draggable, maybe we could use the springing effect <br>[Progress bar] 4% finished
                            <ul class="more-info">
                                <li>Watch this video to learn how to do so: https://www.youtube.com/watch?v=jfYWwQrtzzY</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Play around with the dragging in another project <br>[Progress bar] 5% finished
                            <ul class="more-info">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Changing colors for different goals <br>[Progress bar] 6% finished
                            <ul class="more-info">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item">
                            <h6 class="material-symbols-outlined">circle</h6>
                            The list could be an array or object. With modifiable properties like color and names <br>[Progress bar] 7% finished
                            <ul class="more-info">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="menuPopup" class="menuPopup">
                <button>Settings</button>
                <button>Edit</button>
                <button>Arrange</button>
                <button>Caspian</button>
            </div>
        </div>
    </div>
</div>

</body>

<script src="scripts.js"></script>

</html> 

<script>
    

</script>