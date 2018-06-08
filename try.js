alert('RULES:'
	+'\n1. The game has 2 players, playing in rounds'
+'\n2.In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score'
+"\n3.BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it is the next player's turn"
+"\n4.The player can choose to HOLD, which means that his ROUND score gets added to his GLOBAL score. After that, it is the next player's turn"
+ '\n5.The first player to reach 100 points on GLOBAL score wins the game'
+'\n6.By Default the final Score is 100')
var scores, roundScore, activePlayer,play,final;
init();
console.log("Dice History");
document.querySelector('.btn-roll').addEventListener('click', function(){

		if(play)
		{
			if(document.querySelector('.final-score').value!='')
			{
				final=document.querySelector('.final-score').value;
			}
			var d= document.querySelector('.dice');
		d.style.display='block';
		var dice;
		for(var i=0;i<5;i++)
			dice= Math.floor(Math.random()*6)+1;
		    d.src="dice-"+dice+'.png';
		    console.log('PLAYER: '+ activePlayer + "     DICE: "+ dice);
		 if(dice===1)
		 {
		 	nextPlayer();
		 }
		 else 
		 {
		 	roundScore+=dice;
		 	document.querySelector('#currentScore'+ activePlayer).textContent=roundScore;
		 } 
		}	   
});

document.querySelector('.btn-hold').addEventListener('click',function(){

		if(play)
		{
			scores[activePlayer]+=roundScore;
			roundScore=0;
			document.getElementById('score'+ activePlayer).textContent=scores[activePlayer];
			if(scores[activePlayer]>=final)
			{
				document.getElementById('name'+activePlayer).textContent='WINNER!';
				document.querySelector('.player'+activePlayer+'Panel').classList.toggle("active");
				document.querySelector('.dice').style.display='none';
				document.querySelector('.player'+activePlayer+'Panel').classList.add('winner');
				play=false;
			}
			else
				nextPlayer();
		}
			
});
document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer()
{
	document.getElementById('currentScore'+activePlayer).textContent=0;
	roundScore=0;
			if(activePlayer===0)
				activePlayer=1;
			else
				activePlayer=0;
			document.querySelector('.player1Panel').classList.toggle("active");
			document.querySelector('.player0Panel').classList.toggle("active");
			document.querySelector('.dice').style.display='none';
}

function init()
{
	scores = [0, 0];
	roundScore=0;
	activePlayer=0;
	play=true;
	final=100;
	document.querySelector('.dice').style.display='none';
	document.querySelector('#score0').textContent=0;
	document.querySelector('#score1').textContent=0;
	document.querySelector('#currentScore0').textContent=0;
	document.querySelector('#currentScore1').textContent=0;
	document.getElementById('name1').textContent="Player 2";
	document.getElementById('name0').textContent="Player 1";
	document.querySelector('.player0Panel').classList.remove('winner');
	document.querySelector('.player1Panel').classList.remove('winner');
	document.querySelector('.player0Panel').classList.remove("active");
	document.querySelector('.player1Panel').classList.remove("active");
	document.querySelector('.player0Panel').classList.add("active");
	document.querySelector('.final-score').value='';
}