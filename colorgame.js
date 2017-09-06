                                        /**
                                        Author:     IGE ISAAC
                                        
                                        Purpose:    Random color generation and guessing game. 
                                        
                                        DOC:        Hello, I welcome you all on this simple project feel free
                                                    to change anything but don't break it.
                                                    The main issue with this code is that the player counter 
                                                    isn't working as expected there is no gift or praises 
                                                    awaiting you after solving this, but anything you do to make
                                                    this piece work will not just go like that cos as you are 
                                                    working on it you are as well gaining skills and expanding
                                                    your knowledge. You can as well add any other reasonable features to it.
                                                    I have commented that piece of code out from line 67 also a prompt box on line 96.
                                                    Thanks <3. Happy Coding.
                                        **/


var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector('h1');
var messageDisplay = document.querySelector('.messageDisplay');
var reset = document.querySelector('.reset');
colorDisplay.textContent = pickedColor;
var mode = document.querySelectorAll('.mode');
var counter1 = document.getElementById('scoreCounter1');
var counter2 = document.getElementById('scoreCounter2');
var count = 1;
var question;


init();
function init() {
    setUpSquares();
    setUpColors();
    resetMode();
}
function setUpSquares() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener('click', function(){
            mode[0].classList.remove('selected');
            mode[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetMode();
        });
    }
}
//
function setUpColors() {
    for (var i = 0; i < squares.length; i++) {
        //changes the square background colors
        squares[i].style.background = colors[i];
        //displays something when squares are clicked
        squares[i].addEventListener('click', function() {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                //numSquares = 3;
                h1.style.background = pickedColor;
                messageDisplay.innerHTML = 'Correct';
                reset.innerHTML = 'Play Again?';
                changeColor(clickedColor);
                
               /* 
               //this section deals with updating the players counter.
                
                if (question === 'Y') {                    
                    counter1.textContent = count++;
                    } else if(question === 'N') {
                        count = null;
                        counter2.textContent = count++;
                        } else {
                            window.prompt("Are you player 1? Y or N").toUpperCase();
                            }
                
                count = count;
                //section ends here
                */
            } else {
                this.style.background = '#232323';
                messageDisplay.innerHTML = 'Wrong, try again';
            }
        });
    }
}

function resetMode() {
    colors = generateColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = 'New Color';
    //shows a pop up to ask which user is playing
    //question = window.prompt("Are you player 1? Y or N").toUpperCase();
    
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            //changes the square background colors
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
             //changes the square background colors            
            squares[i].style.display = "none";
        }

    }    
    h1.style.background = 'steelblue';
    messageDisplay.innerHTML = "";    
}
reset.addEventListener('click', function() {
    resetMode();
});

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}