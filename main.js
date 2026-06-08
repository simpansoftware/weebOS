function taim() {
    let donkeyTime = new Date().toLocaleString();
    let donkeyText = document.querySelector("#taim")
    donkeyText.textContent = donkeyTime // i am NOT using innerHTML thank you hack club for using var and innerHTML
}
taim();
setInterval(taim, 1000);

// Make the DIV element draggable:
donkeydragElement(document.getElementById("welcome"));
donkeydragElement(document.getElementById("proxy"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function donkeydragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  let initialX = 0;
  let initialY = 0;
  let currentX = 0;
  let currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    //the segment below is coded by ai, but thats it
    let newTop = element.offsetTop - currentY;
    let newLeft = element.offsetLeft - currentX;

    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;

    newLeft = Math.max(0, Math.min(newLeft, maxX));
    newTop = Math.max(0, Math.min(newTop, maxY));

    element.style.left = newLeft + "px";
    element.style.top = newTop + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let welcome = document.querySelector("#welcome")

let proxy = document.querySelector("#proxy");

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

let welcomeClose = document.querySelector("#welcomeclose")

let welcomeOpen = document.querySelector("#welcomeopen")

let proxyClose = document.querySelector("#proxyclose")

let proxyOpen = document.querySelector("#proxyopen")

welcomeClose.addEventListener("click", function() {
  closeWindow(welcome);
});

welcomeOpen.addEventListener("click", function() {
  openWindow(welcome);
});

proxyClose.addEventListener("click", function() {
  closeWindow(proxy);
});

proxyOpen.addEventListener("click", function() {
  openWindow(proxy);
});

let biggestIndex = 1;

let topBar = document.querySelector("#top")

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

addWindowTapHandling(welcome);
addWindowTapHandling(proxy);