//Function that will run to print the menu to the user
const { PrintMenu } = require("./menu");

//Printing the Menu
PrintMenu();

const prompt = require("prompt-sync")();

let running = true;
while (running) {
  let trueoption = false;
  while (!trueoption) {
    const Option = prompt("Enter CP to Compress Folders or EZ to Extract Zip:    ");
    console.log(`You have choosen ${Option}`);
    const Confirm = prompt("Please enter Y to confirm selection or N to rechoose")
  }
  console.log("bnrowse top location once in location type begin and press enter")
}
