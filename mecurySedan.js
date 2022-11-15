//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.availableRoom = false;
    }

    //checks room availability
    laodPassenger(num) 
    {
        this.passenger = num;
        if(this.passenger <= this.maximumPassengers)
        {
            return this.availableRoom = true;
        }
        else
        {
            console.log("No more avaible room");
        }
        


    }

    //checks to see if the car can start
    start() 
    {
        if(this.fuel > 0)
        {
            this.start = true;
            console.log("Car has started");
        }
        else
        {
            console.log("Car is off");
        }

    }

    //checks to see if the car needs maintenance
    checkService() 
    {
       if(this.mileage > 30000)
       {
        console.log("Time for maintenance");
        return this.scheduleService = true;
       }
       
    }

}



//this shows how to call from this module...
let Sedan = new Car("Mecury", "Sedan", "1965", "blue", 30000)

Sedan.laodPassenger(5)
Sedan.start()
Sedan.checkService()
console.log(Sedan)
