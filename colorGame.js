// array with all colors to use in textContent
var colors = [
    "rgb(46, 42, 41)",
    "rgb(3, 173, 85)",
    "rgb(250, 3, 12)",
    "rgb(162, 165, 170)",
    "rgb(24, 177, 237)",
    "rgb(252, 198, 151)",
    "rgb(104, 48, 157)"
]

// variables with elements needs to the rest of the code
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var box = document.querySelectorAll('.box');
var red = document.querySelectorAll('.red');
var green = document.querySelectorAll('.green');
var blue = document.querySelectorAll('.blue');
var creamy = document.querySelectorAll('.creamy');
var lightgray = document.querySelectorAll('.lightgray');
var darkgray = document.querySelectorAll('.darkgray');
var violet = document.querySelectorAll('.violet');
// variable for the scores
var score = 0;
//var resetButton = document.querySelector('#reset');


// looping throught squares
for(var i = 0; i < squares.length; i++) {
  colorDisplay.textContent = colors[0];
  // add click listeners to squares
  squares[i].addEventListener('click', function() {
      
// DARKGRAY
    // compare color to pickedColor
    if ( this.classList.contains('darkgray') && colorDisplay.textContent == colors[0] )  {
      messageDisplay.textContent = 'CORRECT';
      // correct square is dissapear
      this.style.display = 'none';
      // add score
      score = score + 1;
      console.log('score = ' + score)  
      
      // colorize darkgray pixels on the image
      for(var i = 0; i < darkgray.length; i++) {
        darkgray[i].style.background = "rgb(46, 42, 41)";
      }

      // podmiana napisu choose rgb colors na nowy
      colorDisplay.textContent = colors[1];
      // podmiana kwadratów na nowe kolory
      squares[0].style.display = 'block';  
      squares[1].style.display = 'block';  
      squares[2].style.display = 'block';  
      squares[3].style.display = 'block';  
      squares[5].style.display = 'block';  
      squares[6].style.display = 'block';  

// GREEN        
    } else if ( this.classList.contains('green') && colorDisplay.textContent == colors[1] )  {
    messageDisplay.textContent = 'CORRECT';
    this.style.display = 'none';
    score = score + 1;
    console.log('score = ' + score)  
    
    for(var i = 0; i < green.length; i++) {
      green[i].style.background = "rgb(3, 173, 85)";
    }

    colorDisplay.textContent = colors[2];
    squares[0].style.display = 'block';  
    squares[1].style.display = 'block';  
    squares[2].style.display = 'block';  
    squares[3].style.display = 'block';  
    squares[6].style.display = 'block';  
        
// RED      
    } else if ( this.classList.contains('red') && colorDisplay.textContent == colors[2] )  {
    messageDisplay.textContent = 'CORRECT';
    this.style.display = 'none';
    score = score + 1;
    console.log('score = ' + score)  
    
    for(var i = 0; i < red.length; i++) {
      red[i].style.background = "rgb(250, 3, 12)";
    }

    colorDisplay.textContent = colors[3];
    squares[0].style.display = 'block';  
    squares[1].style.display = 'block';  
    squares[2].style.display = 'block';  
    squares[3].style.display = 'block';  
  
// LIGHTGRAY      
    } else if ( this.classList.contains('lightgray') && colorDisplay.textContent == colors[3] )  {
    messageDisplay.textContent = 'CORRECT';
    this.style.display = 'none';
    score = score + 1;
    console.log('score = ' + score)  
    
    for(var i = 0; i < lightgray.length; i++) {
      lightgray[i].style.background = "rgb(162, 165, 170)";
    }

    colorDisplay.textContent = colors[4];
    squares[0].style.display = 'block';  
    squares[2].style.display = 'block';  
    squares[3].style.display = 'block';  
        
// BLUE      
    } else if ( this.classList.contains('blue') && colorDisplay.textContent == colors[4] )  {
    messageDisplay.textContent = 'CORRECT';
    this.style.display = 'none';
    score = score + 1;
    console.log('score = ' + score)  
    
    for(var i = 0; i < blue.length; i++) {
      blue[i].style.background = "rgb(24, 177, 237)";
    }

    colorDisplay.textContent = colors[5];
    squares[2].style.display = 'block';  
    squares[3].style.display = 'block'; 
        

 // CREAMY      
    } else if ( this.classList.contains('creamy') && colorDisplay.textContent == colors[5] )  {
    messageDisplay.textContent = 'CORRECT';
    this.style.display = 'none';
    score = score + 1;
    console.log('score = ' + score)  
    
    for(var i = 0; i < creamy.length; i++) {
      creamy[i].style.background = "rgb(252, 198, 151)";
    }

    colorDisplay.textContent = colors[6];
    squares[2].style.display = 'block';
        
  
 // VIOLET     
    } else if ( this.classList.contains('violet') && colorDisplay.textContent == colors[6] )  {
    messageDisplay.textContent = 'YOU WIN!';
    this.style.display = 'none';
    score = score + 1;
    console.log('score = ' + score)  
    
    for(var i = 0; i < violet.length; i++) {
      violet[i].style.background = "rgb(104, 48, 157)";
    }
    
        
    } else {
      this.style.display = 'none';
      messageDisplay.textContent = 'TRY AGAIN';
    }     
      
      
  });  
}