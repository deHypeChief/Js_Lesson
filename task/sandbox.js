function sandbox() {
  console.log("\n\n\nWelcome to the sandbox\n\n\n");
  // your Test code here
  /*
  console.log('======================================================================\n');

  console.log("TASK ONE\n");

        let clientName = "Aduke";
        let nameOfBank = "Scout Bank";
        let clientId = "$AK-90934453";
        const clientAccountNumber = 2306549308;
        let clientPin = 2002;
        let clientBio = "Save more to enjoy more";
        let clientBalance = 1500000;
        let isActive = false;

  console.log(
    `The datatype outputs b goes below: \n

    =============================================\n


        ${clientName} \n
        ${nameOfBank} \n
        ${clientId} \n
        ${clientAccountNumber} \n
        ${clientPin} \n
        ${clientBio} \n
        ${clientBalance} \n
        ${isActive} \n
        `
  );

  console.log("=======================================================================================\n");

    console.log(`\t\t\t\t\tTASK TWO \n
    \t\t=======================================================\n`);

  console.log(`
    Miss ${clientName} opened an account with ${nameOfBank} \n
    Her Id is ${clientId}. \n
    She inputted her account number ${clientAccountNumber} and pin ${clientPin} to log into her bank app. \n
    After the transaction, she clicked on her bio, and it displayed \n
    "${clientBio}". \n 
    She also clicked balance and it displayed #${clientBalance} \n
    then she logged out. \n
    Then her activeness turn ${isActive}
    `);
  
  
  
  
  
  console.log(
      "\tObject datatype exercise\n"
    );
  
    let name = "Scot Allen";
    let age = 56;
    let occupation = "Trader";
    const hobby = ["football", "coding", "movies",];
    const profile = {
      name: name,
      age: age,
      occupation: occupation,
      hobby: hobby,
      doSmth: function() {
        return `\tmy name is ${this.name}. \n
                I'm ${this.age} year old. \n
                My hobbies are ${this.hobby[0]}, ${this.hobby[1]}, and ${this.hobby[2]}.`;
      }
    }
  
    console.log(profile.doSmth());*/
  console.log("\n\n\n First Object Challenge\n\n\n");
    let subObjArray = [
      {
        brand: "toyota",
        model: "camry",
        year: 2022,
        type: "XV70",
        price: "$26,420",
      },
      {
        colors: ["red", "black", "silver", "gray", "blue"],
        isAutomatic: true,
        rearCamera: true,
        doubleExhaust: true,
      },
      {
        engine: "301-HP V6",
        autoPilot: false,
        electricVehicle: false,
      },
    ];

  function createCar(array) {
    let car = {};
    array.forEach(function (item) {
      for (const key in item) {
        car[key] = item[key];
      }
    });

    console.log(car);
  }

  createCar(subObjArray);

  console.log("\n\n\n Challenge two - Calculate all sum\n\n\n");

  let figures = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 9,
    dataType: "numbers",
    length: 3,
    highestNumber: 9,
    isNumber: true,
  }

  function calculateAllSum(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof(obj[key]) === "number") {
        sum += obj[key];
      }
    }

    console.log(sum);
  }

  calculateAllSum(figures);

  console.log("\n\n\n Third Challenge\n\n\n");

  const firstObj = {
    name: "Ade",
    age: 30,
    location: "texas",
    length: 3,
  }

  const secondObj = {
    name: "Tomi",
    age: 30,
    country: "NGA",
    length: 3,
  }

  function checkSamePairs(firstObj, secondObj) {
    let sameProp = {};
    for (let key in firstObj) {
      if (firstObj[key] === secondObj[key]) {
        sameProp[key] = key;
      } else {
        delete sameProp[key];
      }
      console.log(sameProp[key]);
    }
  }

  checkSamePairs(firstObj, secondObj);
}
sandbox();
//node sandbox.js
//npm run sandbox
//npm run dev
