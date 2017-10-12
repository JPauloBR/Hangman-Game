var glBestVideogamesOfAllTime = ["galaga", "zelda", "mario", "ico", "batman", "gta", "pubg", "minecraft", "overwatch", "overcooked", "simcity", "contra", "fallout", "earthbound", "warcraft", "spelunky", "splatoon", "rainbow6", "megaman", "suikoden", "goldeneye", "burnout", "persona", "starcraft", "thief", "pacman", "pokemon", "uncharted", "metroid", "diablo", "jorney", "bioshock", "battlefield", "castlevania", "civilization", "halo", "deusex", "portal", "tetris", "doom", "quake", "wolfenstein"];
var glHangmanWord = "";
var glHangmanWordAndUnderlines = [];
var glPressStartKey = false;
var glFootBoxArray = [];
var glHangmandCount = 0;
var glScore = 0;

document.onkeyup = function(event) {
	if (!glPressStartKey) {
		init();
	} 	
	else {
		if (isletterinWord(event.key,glHangmanWord) !== -1) {
			if (winCondition()) {
				glScore ++;
				document.getElementById("hangman-card").innerHTML = '<img id="hangman-image" class="card-img-top w-25 mx-auto" src="assets/images/you-win.gif" alt="Card image cap">' +
		            '<div class="card-body">' +
		              '<h1 id="underlines" class="card-text">You Win</h1>' +
		              '<h4 class="card-text mt-5">You Win</h4>' +
		              '<h4 id="letters" class=""></h4>'+
		            '</div>';
		            document.getElementById("letters").innerHTML = "Score: "+glScore;
		            glPressStartKey = false;
		            return;
		        }
		        else {
		        	document.getElementById("underlines").innerHTML = glHangmanWordAndUnderlines.join(" ");
		        }
		    }
		    else {
		    	if(writeLetterFootBox(event.key)) {
		    		if (glHangmandCount < 7) {
		    			hangmanPicChange();
		    		}
		    		else {
		    			glPressStartKey = false;
		    			glScore = 0;
		    			return;
		    		}		
			}
		}
	}
}
function init() {
	glHangmanWord = glBestVideogamesOfAllTime[Math.floor(Math.random() * glBestVideogamesOfAllTime.length)];
	glHangmanWordAndUnderlines = [];
	glFootBoxArray = [];
	glHangmandCount = 0;
	glPressStartKey = true;
	document.getElementById("hangman-col").innerHTML = '<div id="hangman-card" class="card lg-mx-auto text-center lg-mt-5 bg-secondary pb-2">' +
			'<img id="hangman-image" class="card-img-top w-25 mx-auto" src="assets/images/hangman1.png" alt="Card image cap">' +
            '<div class="card-body">' +
              '<h1 id="underlines" class="card-text"></h1>' +
              '<h4 class="card-text mt-5">Wrong Letters:</h4>' +
              '<h4 id="letters" class="card-text mt-2 text-danger"></h4>'+
            '</div>' +
            '</div>';
    var underLineString = "_ ";
    for(var i = 0; i < glHangmanWord.length; i++) {
    	glHangmanWordAndUnderlines.push(underLineString);
    }
    document.getElementById("underlines").innerHTML = glHangmanWordAndUnderlines.join(" ");
}

function isletterinWord(letter, word) {
	position = -1;
	for (var i = 0; i < word.length; i++) {
		if (word.charAt(i) == letter) {
			glHangmanWordAndUnderlines.splice(i, 1, letter);
			position = i;	
		}
	}
	return position;

}

function winCondition() {
	if (glHangmanWordAndUnderlines.indexOf("_ ") === -1) {
		return true;
	}
	else return false;		
}

function writeLetterFootBox(letter) {
	if (glFootBoxArray.indexOf(letter) === -1) {
		glFootBoxArray.push(letter);
		document.getElementById("letters").innerHTML = glFootBoxArray.join(" ");
		return true;
	}
	return false;
}

function hangmanPicChange(){
	glHangmandCount++;
	if (glHangmandCount == 1) {
		document.getElementById("hangman-image").src = "assets/images/hangman2.png";
	}
	if (glHangmandCount === 2) {
		document.getElementById("hangman-image").src = "assets/images/hangman3.png";
	}
	if (glHangmandCount === 3) {
		document.getElementById("hangman-image").src = "assets/images/hangman4.png";
	}
	if (glHangmandCount === 4) {
		document.getElementById("hangman-image").src = "assets/images/hangman5.png";
	}
	if (glHangmandCount === 5) {
		document.getElementById("hangman-image").src = "assets/images/hangman6.png";
	}
	if (glHangmandCount === 6) {
		document.getElementById("hangman-image").src = "assets/images/hangman7.png";
	}
	if (glHangmandCount === 7) {
		document.getElementById("hangman-image").src = "assets/images/game-over.gif";
		document.getElementById("underlines").innerHTML = glHangmanWord;
		glPressStartKey = false;


	}	
	

}
