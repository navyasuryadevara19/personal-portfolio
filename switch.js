let age = 4;

switch (true) { // Use true to evaluate conditions
    case age >= 18 && age < 80:
        console.log("You are eligible for election criteria");
        break;

    case age < 18 && age >= 13:
        console.log("You are a teenager, not eligible for election criteria");
        break;

    case age >= 80:
        console.log("You are above 80 not eligible for voting");
        break;

    case age < 13:
        console.log("You are too young for voting, not eligible");
        break;

    default:
        console.log("Invalid age");
}





