/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';

/**
 * Set up the game.
 */
var config = {
    name:'Forest Trump or Donald Gump rulz'
}

// Make some test game objects
var game = new GamePiece(config);
console.log(game.getName());

//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);


var config2 = {
  name: 'Thud Mutton, Esq'
};

var something = new GamePiece(config2);
console.log(something.getName());
