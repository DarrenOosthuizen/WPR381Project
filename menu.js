
let Welcome1 = "__        __  	    _                                        _";
let Welcome2 =
  "\\ \\      / /  ___  | |   ___    ___    _ __ ___     ___     | |_    ___";
let Welcome3 =
  " \\ \\ /\\ / /  / _ \\ | |  / __|  / _ \\  | '_ ` _ \\   / _ \\    | __|  / _ \\";
let Welcome4 =
  "  \\ V  V /  |  __/ | | | (__  | (_) | | | | | | | |  __/    | |_  | (_) |";
let Welcome5 =
  "   \\_/\\_/    \\___| |_|  \\___|  \\___/  |_| |_| |_|  \\___|     \\__|  \\___/";

let Amazing1 = "   _     _                                                   _";
let Amazing2 =
  "  | |_  | |__     ___      __ _   _ __ ___     __ _    ____ (_)  _ __     __ _ ";
let Amazing3 =
  "  | __| | `_ \\   / _ \\    / _` | | `_ ` _ \\   / _` |  |_  / | | | `_ \\   / _` |";
let Amazing4 =
  "  | |_  | | | | |  __/   | (_| | | | | | | | | (_| |   / /  | | | | | | | (_| |";
let Amazing5 =
  "   \\__| |_| |_|  \\___|    \\__,_| |_| |_| |_|  \\__,_|  /___| |_| |_| |_|  \\__, |";
let Amazing6 =
  "                                                                         |___/";

let Extract1 =
  "   _____  __  __  _____   ____       _       ____   _____   ___           _   _      _     _____    ___    ____  ";
let Extract2 =
  "  | ____| \\ \\/ / |_   _| |  _ \\     / \\     / ___| |_   _| |_ _|         | \\ | |    / \\   |_   _|  / _ \\  |  _ \\ ";
let Extract3 =
  "  |  _|    \\  /    | |   | |_) |   / - \\   | |       | |    | |   _____  |  \\| |   / - \\    | |   | | | | | |_) |";
let Extract4 =
  "  | |___   /  \\    | |   |  _ <   / ___ \\  | |___    | |    | |  |_____| | |\\  |  / ___ \\   | |   | |_| | |  _ < ";
let Extract5 =
  "  |_____| /_/\\_\\   |_|   |_| \\_\\ /_/   \\_\\  \\____|   |_|   |___|         |_| \\_| /_/   \\_\\  |_|    \\___/  |_| \\_\\";

let Text1 =
  "          A simple application for creating and extracting archives";
let Text2 = "          For Commands Run";
let Text3 = "Just Follow These Instruction";

async function PrintMenu() {
  console.log("\x1b[33m%s\x1b[0m", Welcome1);
  console.log("\x1b[33m%s\x1b[0m", Welcome2);
  console.log("\x1b[33m%s\x1b[0m", Welcome3);
  console.log("\x1b[33m%s\x1b[0m", Welcome4);
  console.log("\x1b[33m%s\x1b[0m", Welcome5);
  console.log("");

  console.log("\x1b[36m%s\x1b[0m", Amazing1);
  console.log("\x1b[36m%s\x1b[0m", Amazing2);
  console.log("\x1b[36m%s\x1b[0m", Amazing3);
  console.log("\x1b[36m%s\x1b[0m", Amazing4);
  console.log("\x1b[36m%s\x1b[0m", Amazing5);
  console.log("\x1b[36m%s\x1b[0m", Amazing6);
  console.log("");
  console.log("\x1b[31m%s\x1b[0m", Extract1);
  console.log("\x1b[31m%s\x1b[0m", Extract2);
  console.log("\x1b[31m%s\x1b[0m", Extract3);
  console.log("\x1b[31m%s\x1b[0m", Extract4);
  console.log("\x1b[31m%s\x1b[0m", Extract5);
  console.log("");

  console.log("\x1b[34m%s\x1b[0m", Text1);
  console.log("\x1b[34m%s\x1b[0m", Text2, "\x1b[32m", Text3);
  console.log("");

  console.log(
    "\x1b[34m%s\x1b[0m",
    "?",
    "\x1b[1m",
    "Please browse to location..."
  );
}

module.exports ={PrintMenu};
