<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">

    <title>Nowaa's Personal Tracker</title>
</head>

<body class="vsc-initialized">

<dialog id="addTask">
    SHOW STUFF BABY
    <button onclick="addTask.close()">X</button>
</dialog>

<p class="state-changer" id="edit" style="
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 8px;
    color: white;
    text-transform: uppercase;
    font-size: x-large;
">Viewing mode</p>

<div class="container fullscreen">

    <div style="position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 8px">
        <button class="material-symbols-outlined" id="sideMenuButton" style="transition: var(--transition-time)">
            chevron_right
        </button>
        <div style="
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
">
        <button class="material-symbols-outlined" id="settings-button" style="transition: var(--transition-time)" onclick="editSettings()">settings</button>
        <button class="material-symbols-outlined" id="rotation-toggle-button" style="transition: var(--transition-time)" onclick="toggleRotation()">toggle_on</button>
        <button class="material-symbols-outlined" id="disable-motion-button" style="transition: var(--transition-time)" onclick="toggleMotion()">toggle_on</button>
        <div style="
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    height: 24px;
    transition: var(--transition-time);
">
            <button class="material-symbols-outlined" id="edit-button" onclick="editListItems()">Edit</button>
            <button class="material-symbols-outlined">close</button>
        </div>
        </div>
    </div>

    <div class="sideMenu" id="sideMenu" style="width: 0px;">
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
    <div class="background container fill" id="background" style="flex: 8 1 0%; flex-direction: column; background-color: rgba(128, 0, 128, 0.7);">
        <div class="menu" id="menu" style="left: 194px; top: 96px;">
            <div class="menu-contents">

                <div class="menu-navbar" id="menu-navbar">
                    <button class="menu-button" id="menu-button">This</button>
                    <button class="menu-button" id="menu-button">Ur</button>
                    <button class="menu-button" id="menu-button">Goal</button>
                    <button class="menu-button" id="menu-button">List</button>
                    <button class="menu-button" id="menu-button">Buddy</button>
                    <button class="menu-button" onclick="addTask.showModal()" id="menu-button" style="width: 50%; margin-right: 8px">+</button>
                </div>

                

                <div class="menu-list" id="menu-list">
                    <!-- We refactor this to remove inline CSS -->
                    <span style="
                    display: flex;
                    justify-content: space-between;">
                    <h4>List of things to showcase:</h4>
                    <h6 class="material-symbols-outlined" id="pan">pan_tool</h6>
                    </span>
                    <ul>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Clicking on the list items show their subtasks <br>[Progress bar] 1% finished
                            <ul class="more-info" style="height: 0px; padding: 0px;">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Resizable window <br>[Progress bar] 2% finished
                            <ul class="more-info" style="height: 0px; padding: 0px;">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            EDIT MODE <br>[Progress bar] 3% finished
                            <ul class="more-info" style="height: 0px; padding: 0px;">
                                <li>Child 1</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            <span style="text-decoration: line-through;">I hope school doesn't drag me back to anywhere else but web dev</span> <br>[DONE]
                            <ul class="more-info">
                                <li>Just kidding, I need to figure out how the hanging animation works</li>
                                <li>I also need to work on dragging around the list items</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Part of me says the slightly crooked menu list is disorienting.<br>
                            But I find the slightly rotated list cute🥺🥺🥺
                            <ul class="more-info">
                                <li>WOBBLY</li>
                                <li>WOBBLY</li>
                                <li>WOBBLY</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            OOOOOOOH BUT WHAT IF THE USERS EXPERIENCE SOMETHING WRONG<br> WITH THEM BUT THEY HAVE NO IDEA WHY. THAT WOULD BE FUNNY<br>[Progress bar] 6% finished
                            <ul class="more-info">
                                <li>WOBBLY</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Hide the popup menu when dragging<br>[Progress bar] 6% finished
                            <ul class="more-info">
                                <li>WOBBLY</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            Bugs &amp; Usability issues: <br>[Progress bar] 7% finished
                            <ul class="more-info">
                                <li>There's a bug with the null for onmousemove</li>
                                <li>Child 2</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                        <li class="menu-list-item" contenteditable="false">
                            <h6 class="material-symbols-outlined">circle</h6>
                            List of things to NOT showcase: <br>[Progress bar] 1% finished
                            <ul class="more-info">
                                <li>R</li>
                                <li>Maybe have an effect implying that it's editing mode</li>
                                <li>Child 3</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div id="menuPopup" class="menuPopup">
                <button style="--order: 1">Settings</button>
                <button style="--order: 2" id="edit-button" onclick="editListItems()">Edit</button>
                <button style="--order: 3">Arrange</button>
                <button style="--order: 4">Caspian</button>
            </div> -->
        </div>
    </div>
</div>



<script src="scripts.js"></script>

 

<script>
    

</script></body></html>