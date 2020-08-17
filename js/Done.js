class Done{
    constructor(){
        this.done = createElement('h1');
        this.done.style('fontSize', 'xx-large');
        this.done.style('fontWeight', '900');
        this.done.style('color', 'maroon');
        this.thank = createElement('h1');
        this.thank.style('fontSize', 'xx-large');
        this.thank.style('fontWeight', '900');
        this.thank.style('color', 'maroon');
        this.reset = createButton('Reset');
        this.reset.style('fontSize', 'x-large');
    }
    hide(){
        this.thank.hide();
        this.done.hide();
        this.reset.hide();
    }
    
    display(){
        this.done.html("COMPLETED!!!");
        this.done.position(300, 200);
        this.thank.html("THANK YOU FOR YOUR HELP");
        this.thank.position(300, 250);
        this.reset.position(400, 350);
        this.reset.mousePressed(() =>{
            this.thank.hide();
            this.done.hide();
            this.reset.hide();
            game1.update(0);
            game2.update1(0);
            game3.update2(0);
            game4.update3(0);
            start = new Start();
            start.display();
          });

    }
}