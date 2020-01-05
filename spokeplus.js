console.log("loaded spokeplus")

const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
function simulateMouseClick(element){
  if (element === undefined) { return; }
  mouseClickEvents.forEach(mouseEventType =>
    element.dispatchEvent(
      new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1
      })
    )
  );
}

function findSelection(regex) {
  for (i of document.getElementsByTagName("span")) {
    if (i.innerText.match(regex)) { return(i) }
  }
  console.log("could not find selection "+regex)
}

function findMenu(regex) {
  for (i of document.getElementsByTagName("button")) {
    if (i && i.parentElement.parentElement.id.match(regex)) {
      return(i);
    }
  }
  console.log("could not find support menu " + regex)
}


Mousetrap.bind('j', function() {
  simulateMouseClick(findMenu("WillthispersonsupportBernie"))
})

Mousetrap.bind('1', function() {
  simulateMouseClick(findSelection("1. YES!"));
})

Mousetrap.bind('2', function() {
  simulateMouseClick(findSelection("2. They LIKELY"));
})

Mousetrap.bind('3', function() {
  simulateMouseClick(findSelection("3. MAYBE"));
})

Mousetrap.bind('4', function() {
  simulateMouseClick(findSelection("4. They PROBABLY"));
})

Mousetrap.bind('5', function() {
  simulateMouseClick(findSelection("5. They DEFINITELY"));
})

Mousetrap.bind('6', function() {
  simulateMouseClick(findSelection("5. They DEFINITELY"));
  simulateMouseClick(document.querySelector("#mount > div > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(1) > div > div > div:nth-child(1) > button > div > svg"));
  simulateMouseClick(findMenu("Whodotheyplantosupport"));
})

Mousetrap.bind('r', function() {
  simulateMouseClick(findSelection("Refused/Angry"));
})

Mousetrap.bind('w', function() {
  simulateMouseClick(findSelection("Wrong Number"));
})

