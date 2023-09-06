function sandbox() {
  console.log("Welcome to the sandbox");
  // your code here
  console.log("================================\n");

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
    "\tTASK TWO\n"
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

  console.log(profile.doSmth());

  console.log(


    `The datatype outputs goes below: \n

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
}
sandbox();
