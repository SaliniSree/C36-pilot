// Form: 
// Form should contain theinput box 
// and a button to log in.

// ● When the button is pressed, the player's
// name should be registered in the database 
// and a newplayer should be created

class Form {

    constructor() {
      
    }

    display(){
      var title = 
     

      
      var input = 
      var button = 
      
      
  
      button.mousePressed(function(){ 
        
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);

        
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }
