/*
Function to scroll down when clicked on a particular button 
this function the target id of the div .
*/
window.smoothScroll = function(target) {
	var scrollContainer = target;
	do { //find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do { //find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while (target = target.offsetParent);

	scroll = function(c, a, b, i) {
		i++; if (i > 30) return;
		c.scrollTop = a + (b - a) / 30 * i;
		setTimeout(function(){ scroll(c, a, b, i); }, 15);
	}
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

/***********************************************************************************************
*************************************************************************************************
************************************************************************************************/

var totalGame = 0, player1Score = 0, player2Score = 0, chance = 0;
var n = ['','','','','','','','',''];

function hit (el) {
	if((el.innerText)=="")
		 {

			if(chance % 2) {
				el.textContent= "O";
				var ch ='O';
				chance++;
				 turn(el,ch);
				 var isit =checkWin(ch);
				 if(isit){
				 	player2Score++;
				 	var s2 = document.getElementById("score2");
				 	s2.textContent=player2Score;
				 	totalGame++;
				 	  chance = 0;
				 	matchCom();
				 }
			}
			else
				{
					el.textContent= "X";
					var ch = 'X';
					chance++;
					turn(el,ch);
					var isit =checkWin(ch);
					if(isit){
				 	player1Score++;
				 	var s1 = document.getElementById("score1");
				 	s1.textContent=player1Score;
				 	totalGame++;
				 	  chance = 0;
				 	matchCom();
				 }
			}
			

			if(chance==9) {
				totalGame++;
				  chance = 0;
				matchCom();
			}
		 }
		

}


function matchCom() {

  n = ['','','','','','','','',''];

  	setTimeout(function () {
	document.getElementById('one').innerHTML="";
	document.getElementById('two').innerHTML='';
	document.getElementById('three').innerHTML='';
	document.getElementById('four').innerHTML='';
	document.getElementById('five').innerHTML='';
	document.getElementById('six').innerHTML='';
	document.getElementById('seven').innerHTML='';
	document.getElementById('eight').innerHTML='';
	document.getElementById('nine').innerHTML='';
},1000);
  	
  new Audio("assets/audio/file.wav").play();

	
}



function turn(el,ch)
	{
		switch(el.getAttribute('id'))
		{
			case "one":
				n[0]=ch;
				break;
			case "two":
				n[1]=ch;
				break;
			case "three":
				n[2]=ch;
				break;
			case "four":
				n[3]=ch;
				break;
			case "five":
				n[4]=ch;
				break;
			case "six":
				n[5]=ch;
				break;
			case "seven":
				n[6]=ch;
				break;
			case "eight":
				n[7]=ch;
				break;
			case "nine":
				n[8]=ch;
				break;
		}

		
	}

 function checkWin (p) {

				if(n[0]==p&&n[1]==p&&n[2]==p)
					return true;
				else
					if(n[3]==p&&n[4]==p&&n[5]==p)
						return true;
				else
					if(n[6]==p&&n[7]==p&&n[8]==p)
						return true;
				else
					if(n[0]==p&&n[3]==p&&n[6]==p)
						return true;
				else
					if(n[1]==p&&n[4]==p&&n[7]==p)
						return true;
				else
					if(n[2]==p&&n[5]==p&&n[8]==p)
						return true;
				else
					if(n[0]==p&&n[4]==p&&n[8]==p)
						return true;
				else
					if(n[2]==p&&n[4]==p&&n[6]==p)
						return true;
				else
					return false;
			}
		
	
	 