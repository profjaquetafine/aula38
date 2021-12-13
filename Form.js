class Form{
  constructor(){
    this.input = createInput("Digite seu nome");
    this.button = createButton("Play");
    this.greeting = createElement('h3');
    this.title = createElement('h2');
   }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide()
  }

  display(){
    
     this.title.html("Jogo de Corrida");
     this.title.position(displayWidth /2 -50,10);

     this.input.position(displayWidth /2 -40, displayHeight /2 -80);

     this.button.position(displayWidth /2 +30, displayHeight /2);
// colocou a palavra funcition ao invés de fazer a function de seta X Mentira!
     this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();

     playerCount+=1;
     player.index = playerCount;
     player.update();
     player.updateCount(playerCount);
     
     this.greeting.html("Hello "+player.name);
     this.greeting.position(displayWidth /2 -70, displayHeight /4);

    }) 

  }

}