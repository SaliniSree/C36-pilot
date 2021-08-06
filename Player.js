//Player: A new player object should be created 
// every time a new user logs in. 
// It should contain all the information
// about the player - name, position in the game 




class Player {
    constructor(){}
  
    getCount(){
      //to access playerCount from database
    }
  
    updateCount(count){
     //to update database with the new count
    }
  
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }