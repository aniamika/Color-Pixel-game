
var boxes = document.querySelectorAll('.box');
var redDivs = document.querySelectorAll('.red[contenteditable]');
var creamyDivs = document.querySelectorAll('.creamy[contenteditable]');
var darkgrayDivs = document.querySelectorAll('.darkgray[contenteditable]');
var greenDivs = document.querySelectorAll('.green[contenteditable]');
var violetDivs = document.querySelectorAll('.violet[contenteditable]');
var blueDivs = document.querySelectorAll('.blue[contenteditable]');
var lighgrayDivs = document.querySelectorAll('.lightgray[contenteditable]');

// // change color of innerText when the box is clicked
// for ( var i = 0; i < boxes.length; i++ ) {
//   boxes[i].addEventListener("click", function() {
//     this.style.color = 'gray';
//   });
//   boxes[i].addEventListener("blur", function() {
//     this.style.color = 'black';
//   });
// }

// RED//
for ( var i = 0; i < redDivs.length; i++ ) {
  redDivs[i].addEventListener("keyup", function() {
    if ( this.innerHTML == 0 ) {
      this.style.background = "rgb(250, 3, 12)";
      this.innerText = '';
    }
  })
}

for ( var i = 0; i < redDivs.length; i++ ) {
  redDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;
    this.innerText = '';
    if ( keyName != 0 ) {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
}


// CREAMY //
for ( var i = 0; i < creamyDivs.length; i++ ) {
  creamyDivs[i].addEventListener("keyup", function() {
    if ( this.innerText == 1 ) {
      this.style.background = "rgb(252, 198, 151)";
      this.innerText = '';
    }
  })
}

for ( var i = 0; i < creamyDivs.length; i++ ) {
  creamyDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;
    this.innerText = '';
    if ( keyName != 1 ) {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
}


// DARKGRAY //
for ( var i = 0; i < darkgrayDivs.length; i++ ) {
  darkgrayDivs[i].addEventListener("keyup", function() {
    if ( this.innerText == 2 ) {
      this.style.background = "rgb(46, 42, 41)";
      this.innerText = '';
    }
  })
}

for ( var i = 0; i < darkgrayDivs.length; i++ ) {
  darkgrayDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;
    this.innerText = '';
    if ( keyName != 2 ) {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
}


// GREEN //
for ( var i = 0; i < greenDivs.length; i++ ) {
    greenDivs[i].addEventListener("keyup", function() {
        if ( this.innerText == 3 ) {
            this.style.background = "rgb(3, 173, 85)";
            this.innerText = '';
        }
    })
}

for ( var i = 0; i < greenDivs.length; i++ ) {
  greenDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;
    this.innerText = '';
    if ( keyName != 3 ) {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
}

// VIOLET //
for ( var i = 0; i < violetDivs.length; i++ ) {
  violetDivs[i].addEventListener("keyup", function() {
    if ( this.innerText == 4 ) {
      this.style.background = "rgb(104, 48, 157)";
      this.innerText = '';
    }
  })
}

for ( var i = 0; i < violetDivs.length; i++ ) {
  violetDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;
    this.innerText = '';
    if ( keyName != 4 ) {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
}


// BLUE //
for ( var i = 0; i < blueDivs.length; i++ ) {
  blueDivs[i].addEventListener("keyup", function(event) {
    if ( this.innerText == 5 ) {
        this.style.background = "rgb(24, 177, 237)";
        this.innerText = '';
    }
  });
}

for ( var i = 0; i < blueDivs.length; i++ ) {
  blueDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;

    if ( keyName == 5 ) {
    this.innerText = '';
  } else {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
  
}


// LIGHTGRAY //
for ( var i = 0; i < lighgrayDivs.length; i++ ) {
  lighgrayDivs[i].addEventListener("keyup", function() {
    if ( this.innerText == 6 ) {
      this.style.background = "rgb(162, 165, 170)";
      this.innerText = '';
    }
  })
}

for ( var i = 0; i < lighgrayDivs.length; i++ ) {
  lighgrayDivs[i].addEventListener("keypress", function(event) {
    const keyName = event.key;
    this.innerText = '';
    if ( keyName != 6 ) {
    // block possibility to tap the wrong answer
    event.preventDefault();
    return false;
    }
  });
}
