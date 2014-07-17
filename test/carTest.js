var frederick = require("../src/car.js"),
  expect = require("chai").expect;

describe("frederick the car/prototype", function(){

  describe("is frederick being created", function(){
    it("should exist", function(){
      expect(frederick).to.exist;
    })
  })

  describe("color", function(){
    it("the color of the car should exist", function(){
      expect(frederick.color).to.exist;
    });
  });

  describe("color", function(){
    it("should be green", function(){
      expect(frederick.color).to.equal("green");
    });
  });

  describe("state property", function(){
    it("should be off for a new car", function(){
      expect(frederick.state).to.equal("off");
    });
  });

  describe("#paint", function(){
    it("should change to yellow", function(){
      frederick.paint("yellow");
      //frederick.paint("green");
      expect(frederick.color).to.equal("yellow");
    })
  })

  describe("#sale", function(){
    it("should update the owner", function(){
      frederick.sale("Lisa");
      expect(frederick.currentOwner).to.equal("Lisa");
    });
  });

  describe("#start", function(){
    it("should be on", function(){
      frederick.start();
      expect(frederick.state).to.equal("on");
    });
  });

  describe("#off", function(){
    it("should be off", function(){
      frederick.off();
      expect(frederick.state).to.equal("off");
    });
  });

  describe("#driveTo", function(){
    it("should console.log the destination", function(){
      frederick.start();
      frederick.driveTo("Mexico");
      //expect(spot).to.exist;
      expect(frederick.state).to.equal("on");
    });
  });

  describe("#park", function(){
    it("should be off first to park", function(){
      frederick.off();
      frederick.park();
      expect(frederick.state).to.equal("off");
    });
  });

  describe("#pickUp", function(){
    it("should update the passengers array to include a new name", function(){
      frederick.state = "on";
      frederick.passengers = ["me", "you", "everyone"];
      frederick.pickUp("Mom");
      var newPass = frederick.passengers[frederick.passengers.length - 1];
      expect(newPass).to.equal("Mom");
    });
  });

  // describe("#dropOff", function(){
  //   it("should take the named person off the array, if the car is started", function(){
  //     frederick.passengers = ["me", "you", "everyone", "Mom"];
  //     frederick.dropOff("Mom");
  //     console.log(frederick.passengers);
  //     var absent = frederick.passengers.indexOf("Mom");
  //     expect(absent === -1).to.equal; 


    //   // var present = frederick.passengers.indexOf("Mom");
    //   // expect(present != -1).to.equal(true);


     
// })

});














