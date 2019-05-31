
var scores,activePlayer,roundScore,gamePlaying;

scores=[0,0];
activePlayer=0;
roundScore=0;

init();

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click', function(){

 if(gamePlaying){

	var dice1=Math.floor(Math.random()*6)+1;
	var dice2=Math.floor(Math.random()*6)+1;
	
	var diceDOM1=document.getElementById('dice-1');
		var diceDOM2=document.getElementById('dice-2');

			diceDOM1.style.display='block';
            diceDOM2.style.display='block';
	
	    diceDOM1.src='dice-' + dice1 +'.png';
		diceDOM2.src='dice-' + dice2 +'.png';

	  if(dice1 !== 1 && dice2 !== 1 ){
		
		roundScore += dice1+dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		
		} 	
    else{
		nextPlayer();			
	}
	
 }
	
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	 
   if(gamePlaying){	 
	  //add current score to Global score
	  
	  scores[activePlayer] +=roundScore;
	  
	  //display UI
	  
	  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
	  
	  if(scores[activePlayer]>=100){
		  document.querySelector('#name-'+activePlayer).textContent='WINNER!!';
		  document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		 document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		  document.getElementById('dice-1').style.display=none;
		  document.getElementById('dice-2').style.display=none;
		 gamePlaying=false;  
		  
	  }else{
      nextPlayer();
	  }
   } 
});



document.querySelector('.btn-new').addEventListener('click',function(){
	
	init();
	
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';	
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';	

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');




})



function init(){
	scores=[0,0];
activePlayer=0;
roundScore=0;
 gamePlaying=true;

}



function nextPlayer(){
	
	
	 activePlayer === 0 ? activePlayer = 1 : activePlayer=0;
		
		roundScore=0;
		
	
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		
       document.getElementById('dice-1').style.display='none';
       document.getElementById('dice-2').style.display='none'	   
		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');
	
}



//dice=Math.floor(Math.random()*6+1);


//document.querySelector('#current-'+activeplayer).textContent=dice;

/*
var x=document.querySelector('#score-1').textContent;
console.log(x);
*/

//document.querySelector('.dice').;
