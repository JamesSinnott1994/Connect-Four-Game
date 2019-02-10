// Entry Point
// Interaction Layer: Where the DOM meets the objects
const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 * Callback function is a function that is executed after the click event
 */
document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
* Listen for keyboard presses
*/
document.addEventListener('keydown', function(event){
    game.handleKeydown(event);
});
