class Finish{
    constructor(){
        this.buttono = createButton("OK");
    }
    hide(){
        this.buttono.hide();
    }
    display(){
        this.buttono.position(500, 500);
        // console.log(game5.getItemInfo());
        this.buttono.mousePressed(()=>{
            this.buttono.hide();
            done = new Done();
            done.display();
        });
    }
}