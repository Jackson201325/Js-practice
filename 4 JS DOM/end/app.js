/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer, score, roundScore, gamePlaying, previusNum, finalScore

init()

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('#dice-1').style.display = 'none'
    document.querySelector('#dice-2').style.display = 'none'
    
}

function init () {
    score = [0,0]
    roundScore = 0
    activePlayer = 0 
    gamePlaying = true
    previusNum = [0,0]

    document.querySelector('#dice-1').style.display = 'none'
    document.querySelector('#dice-2').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')

    
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
         // 1.   Random Number
        dice1 = Math.floor(Math.random() * 6) + 1
        dice2 = Math.floor(Math.random() * 6) + 1

        // 2.   Display de Result
        var diceDom1 = document.querySelector('#dice-1');
        var diceDom2 = document.querySelector('#dice-2');
        diceDom1.style.display = 'block'
        diceDom2.style.display = 'block'

        diceDom1.src = 'dice-' + dice1 + '.png'
        diceDom2.src = 'dice-' + dice2 + '.png'
    
        console.log('dice1 = ' , dice1)
        console.log('dice2 = ' , dice2)
        
        //3.    Update the round score if the rolled number was not a 1
        if (dice1 !== 1 && dice2 !== 1){
            if (previusNum[activePlayer] === 6 && totalScore === 6) {
                score[activePlayer] = 0 
                previusNum[activePlayer] = 0
                roundScore = 0
                document.querySelector('#score-' + activePlayer).textContent = '0'
                nextPlayer()
            } else {
                totalScore = dice1 + dice2
                previusNum[activePlayer] = totalScore
                roundScore += totalScore
                document.querySelector('#current-' + activePlayer).textContent = roundScore
            }
        } else {
            nextPlayer()
        }
    }
}) 

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
         //1.    Add current score to global score
        score[activePlayer] += roundScore

        //2.    update de ui
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]

        var finalScore = document.querySelector(".final-score").value 

        if (finalScore){
            var winningScore = finalScore
        } else {
            winningScore = 100
        }
        //3.    check if player has won else next 
        if (score[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active')
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner')
            gamePlaying = false
        } else {
            nextPlayer()
        }
    }
   
})

document.querySelector('.btn-new').addEventListener('click', init)


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
   (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the 
    predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. 
    This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when 
    one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code 
    for the first one.)
*/

















