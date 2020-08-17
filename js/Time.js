class Time{
    constructor(){
        this.buttonC = createButton("Confirm");
        // this.buttonE = createB
        this.item = createElement('h2');
        this.num = createElement('h2');
        this.place = createElement('h2');
        this.time = createElement('h2');

    }
    hide(){
        this.buttonC.hide();
        this.item.hide();
        this.num.hide();
        this.place.hide();
        this.time.hide();

    }
    display(){
        this.buttonC.mousePressed(()=>{
            this.buttonC.hide();
            this.item.hide();
            this.num.hide();
            this.place.hide();
            this.time.hide();
            done = new Done();
            done.display();
        });
    }
   
    displayButton(){
        this.buttonC.position(500, 500);

    }
    getItemInfo(item){
        this.item.html("Item :- " + item);
        this.item.position(200, 200);
    }

    getNumInfo(num){
        this.num.html("Item Number :- " + num);
        this.num.position(200, 250);
    }

    getPlaceInfo(place){
        this.place.html("Destination :- " + place);
        this.place.position(200, 300);
    }

    getTimeInfo(time){
        this.time.html("Time :- " + time);
        this.time.position(200, 350);
    }
}