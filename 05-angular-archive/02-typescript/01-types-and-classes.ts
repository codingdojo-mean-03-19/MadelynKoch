class Bike {
    constructor(
        public price: number,
        public maxSpeed: string,
        public miles: number = 0){}
    displayInfo = () => {
        console.log("Price: ", this.price, "Max Speed: ", this.maxSpeed, "Miles: ", this.miles);
        return this; 
    }
    ride = () => {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse = () => {
        console.log("Reversing");
        this.miles -= 5;
        return this;
    }
    
}

const redBike = new Bike(300, "30mph");

const greenBike = new Bike(250, "25pmh");

const blueBike = new Bike(450, "60mph");

redBike.displayInfo();
redBike.ride();
