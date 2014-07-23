var kitt = require("../src/car.js"),
  expect = require("chai").expect;

describe("kitt the car/prototype", function(){

  describe("creating kitt", function(){
    it("should exist", function(){
      expect(kitt).to.exist;
    })

    it("the color of the car should exist", function(){
      expect(kitt.color).to.exist;
    });

    it("should be black", function(){
      expect(kitt.color).to.equal("black");
    });

    it("should be off for a new car", function(){
      expect(kitt.state).to.equal("off");
    });
  });

  describe("#paint", function(){
    it("should change to yellow", function(){
      kitt.paint("yellow");
      //kitt.paint("green");
      expect(kitt.color).to.equal("yellow");
    })
  })

  describe("#sale", function(){
    it("should update the owner", function(){
      kitt.sale("Lisa");
      expect(kitt.currentOwner).to.equal("Lisa");
    });
  });

  describe("#start", function(){
    it("should be on", function(){
      kitt.start();
      expect(kitt.state).to.equal("on");
    });
  });

  describe("#off", function(){
    it("should be off", function(){
      kitt.off();
      expect(kitt.state).to.equal("off");
    });
  });

  describe("#driveTo", function(){
    it("should console.log the destination", function(){
      kitt.start();
      kitt.driveTo("Mexico");
      //expect(spot).to.exist;
      expect(kitt.state).to.equal("on");
    });

    it("should protest if the car is off", function(){
      kitt.off();
      var driving = kitt.driveTo("Mexico");
      //expect(spot).to.exist;
      expect(driving).to.equal(-1);
    });
  });

  describe("#park", function(){
    it("should be off first to park", function(){
      kitt.off();
      kitt.park();
      expect(kitt.state).to.equal("off");
    });

    it("should not park if it is still on", function(){
      kitt.start();
      var parking = kitt.park();
      expect(parking).to.equal(-1);
    });
  });

  describe("#pickUp", function(){
    it("should update the passengers array to include a new name", function(){
      kitt.state = "on";
      kitt.passengers = ["me", "you", "everyone"];
      kitt.pickUp("Mom");
      var newPass = kitt.passengers[kitt.passengers.length - 1];
      expect(newPass).to.equal("Mom");
    });
    it("should not go anywhere if it is off", function(){
      kitt.state = "off";
      kitt.passengers = ["me", "you", "everyone"];
      var result = kitt.pickUp("Waldo");
      expect(result).to.equal(-1);
    });
  });

  describe("#dropOff", function(){
    it("should take the named person off the array, if the car is started", function(){
      kitt.passengers = ["me", "you", "everyone", "Mom"];
      kitt.dropOff("you");
      console.log(kitt.passengers);
      var absent = kitt.passengers.indexOf("you");
      expect(absent === -1).to.equal(true); 
    });
    it("should not go anywhere if the car is off", function(){
      kit.state = "off";
      var result = kitt.dropOff("me");
      expect(result).to.equal(-1);
    });
    it("should not go anywhere if you are dropping off an invalid passenger", function(){
      kitt.state = "on";
      var answer = kitt.dropOff("Joe");
      expect(answer).to.equal(-1); 
    });
  });

});


