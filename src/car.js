// require('locus');

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
  this.passengers = [];
}

// Car#sale, we should be able to sale a car to someone, which should update the current_owner and previous_owners array.
Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner); 
  this.currentOwner = newOwner;
};

// Car#paint, which should take a new color and update the color of the car to be new color.
Car.prototype.paint = function(newColor){
  this.color = newColor || black;
};

// // Car#start should change the state of the car to on.
Car.prototype.start = function(){
  this.state = "on";
};

// // Car#off should change the state to off.
Car.prototype.off = function(){
  this.state = "off";
};

// // Car#driveTo, it should console.log "driving to <destination>", but only if the car state is on. Note: this method needs to take a destination param.
Car.prototype.driveTo = function(destination){
  //need to start car, test
  if(this.state === "on"){  
    console.log("driving to " + destination);
  } else {
    console.log("Turn the car on!");
    return -1;
  }
  // for testing
  // return destination; 
};

// // Car#park only if the car is off and if it's off console.log parked!!
Car.prototype.park = function(){
  if(this.state === "off"){
    console.log("parked!!");
  } else {
    console.log("Turn the car off, first!");
    return -1;
  }
};

// Car#pick_up should take a name and console.log that you are "driving to 'pick up <friend>'", but only if the car is on. It should also update the passengers array to include the new passanger.
Car.prototype.pickUp = function(name){
  if(this.state === "on"){
    this.passengers.push(name);
  } else {
    console.log("Turn the car on!");
    return -1;    
  }
};

// Car#dropOff it should take a name and remove them from the passangers array, but only if they are in the array. It should also only drop them off if the car is on.
Car.prototype.dropOff = function(name){
  var present = this.passengers.indexOf(name);
  if((this.state === "on") && (present !== -1)) { 
    var removed = this.passengers.splice(present, 1);

  } else {
    console.log("Turn the car on first and check your passengers' names!");
    return -1;
  }
};


var frederick = new Car("vw", "bug", 1965, "green");

var kitt = new Car("hotrod", "awesome", 1985, "black");


module.exports = kitt;


// eval(locus);