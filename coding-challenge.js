///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values = done
2. Calculate their scores =done

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).= done

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)= done 
*/
/*
var player1height , player2height , player3height;
var player1age , player2age , player3age; 
var player1score , player2score , player3score;

//calculate player 1 score============================== 
player1height = Number(prompt('Enter player 1 height:'));
console.log("player 1 height:" , player1height );
player1age = Number(prompt('Enter player 1 age:'));
console.log("player 1 age:" , player1age );
player1score = player1height + (5* player1age);
// alert('player 1 total score is: ' +  player1score);
console.log("player 1 total score is: " , player1score);

//calculate player 2 score============================== 
player2height = parseInt(prompt('Enter player 2 height:'));
console.log("player 2 height:" , player2height );
player2age = parseInt(prompt('Enter player 2 age:'));
console.log("player 2 age:" , player2age );
player2score = parseInt(player2height + (5* player2age));
// alert('player 2 total score is: ' + player2score);
console.log("player 2 total score is: " , player2score);

//calculate player 3 score============================== 
player3height = Number(prompt('Enter player 3 height:'));
console.log("player 3 height:" , player3height );
player3age = Number(prompt('Enter player 3 age:'));
console.log("player 3 age:" , player3age );
player3score = player3height + (5* player3age);
// alert('player 3 total score is: ' +  player3score);
console.log("player 3 total score is: " , player3score);


console.log('player 1 total score is: ' ,  player1score  , ' and player 2 total score is: ' , player2score, ' and player 3 total score is: ' , player3score);


if(player1score > player2score && player1score > player3score){
    console.log('player 1 wins');
} else if(player2score > player1score && player2score > player3score){
    console.log('player 2 wins');
} else if(player3score > player1score && player3score > player1score){
    console.log('player 3 wins');
}
 else{
    console.log("all players have the same score");
}
*/