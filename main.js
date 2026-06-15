let welcome = document.querySelector("#welcome")
let proxy = document.querySelector("#proxy");
let welcomeClose = document.querySelector("#welcomeclose")
let welcomeOpen = document.querySelector("#welcomeopen")
let proxyClose = document.querySelector("#proxyclose")
let proxyOpen = document.querySelector("#proxyopen")
let biggestIndex = 1;
let topBar = document.querySelector("#top")

function taim() {
    let donkeyTime = new Date().toLocaleString();
    let donkeyText = document.querySelector("#taim")
    donkeyText.textContent = donkeyTime // i am NOT using innerHTML thank you hack club for using var and innerHTML
}

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
// following is copy pasted from w3schools (or something the guide told me to do it like this)
function donkeydragElement(element) {
  let initialX = 0;
  let initialY = 0;
  let currentX = 0;
  let currentY = 0;
    
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
      
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
      
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
      
    //the segment below is coded by ai, but thats it
    let newTop = element.offsetTop - currentY;
    let newLeft = element.offsetLeft - currentX;

    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;

    newLeft = Math.max(0, Math.min(newLeft, maxX));
    newTop = Math.max(0, Math.min(newTop, maxY));

    element.style.left = newLeft + "px";
    element.style.top = newTop + "px";
    // ai coding is stopped here
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

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



taim();
setInterval(taim, 1000);
donkeydragElement(document.getElementById("welcome"));
donkeydragElement(document.getElementById("proxy"));
addWindowTapHandling(welcome);
addWindowTapHandling(proxy);
