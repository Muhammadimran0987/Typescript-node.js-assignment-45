//Task.2
//Personal Message Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let personName: string= "eric";
// console.log(`Hello ${personName}, would you like to learn some python today?`);
//Task.3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in 
//lowercase, uppercase, and titlecase.
//lower case
var person_Name = "muhammad imran";
console.log("lowercase:", person_Name.toLowerCase());
//upper case
console.log("uppercase:", person_Name.toLocaleUpperCase());
//Title case
console.log("titlecase:", person_Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//Task.4
//Famous Quote Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var qoute = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(qoute, "\""));
//Task.5
//Famous Quote 2 Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.
var famous_person = 'Albert Einstein';
var quote = "Life is like riding a bicycle. To keep your balance, you must keep moving.";
console.log("".concat(famous_person, " once said, ").concat(quote));
//Task.6
//Stripping Names Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. Then print the name after striping the white spaces
var personName = "\n\t shaheen afridi\t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
//Task.7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result 
//in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("addition" + (5 + 3));
console.log("subtraction" + (10 - 3));
console.log("multiplication" + (4 * 3));
console.log("division" + (16 / 2));
//Task.8
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(7 + 1);
console.log(2 + 6);
console.log(4 + 4);
console.log(5 + 3);
//Task.9
//Favorite Number Store your favorite number in a variable. Then, using that variable, 
//create a message that reveals your favorite number. Print that message.
var favoriteNumber = 5;
console.log("my favorite number is ".concat(favoriteNumber));
//Task.10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.
//author: [muhammad imran]
// //dated: [ sunday , feburary 12 , 2024]
// //task 9: printing my favourite number.
var favorite_Number = 10;
//reveling my favourite number in a message formate.
console.log("My favorite number is ".concat(favorite_Number));
//Task.11
//Names Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
var names = ["ali", "anees", "haseeb", "muzamil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//Task.12
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
var members = ['khwaja', 'jabir', 'bin', 'hayan'];
var message = 'do u like to play cricket:';
for (var i = 0; i < members.length; i++) {
    console.log(message + members[i]);
}
//Task.13
//Your Own Array Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”
var transportation = ["honda motercycle", "CD 70 bike", "civic"];
transportation.map(function (items) { return console.log("i would like to own a ".concat(items)); });
//Task.14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
//includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.
var guestArr = ["Ali", "Anees", "Haseeb",];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , you are inviyed at lunch"))); });
//Task.15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// //Original guest list
// const guestList: string[] = ["Imran", "kashif", "Raja"];
// // Print the guest who can't make it
// //const guestWhoCantMakeIt: string = guestList[1]; // Assuming the second person can't make it
// console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
//const newGuest: string = "Suleman";
//guestList[1] = newGuest;
// Print a second set of invitation messages for the updated guest list
// for (let i = 0; i < guestList.length; i++) {
// console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
//Task.16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//Print a new set of invitation messages, one for each person in your list.
// Original guest list
var guestList = ["Babar", "Sohail", "Tanveer"];
// Print the guest who can't make it
var guestWhoCantMakeIt = guestList[1]; // Assuming the second person can't make it
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Shadab";
guestList[1] = newGuest;
// Print a second set of invitation messages for the updated guest list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add new guests using pop() and push()
guestList.push("Hamza"); // Add at the end using push()
guestList.splice(guestList.length / 2, 0, "Hunain"); // Add in the middle using splice()
guestList.push("Amjad"); // Add at the end using push()
// Print new invitation messages for the updated guest list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
//Task.17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
//only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
//an empty list at the end of your program.
// Original guest list
//const guestList: string[] = ["Abdullah", "Adeel", "Saim", "Haris", "Sarfarz", "Naseem", "Afridi"];
// Print a message saying you can only invite two people
console.log("Due to limited space, you can invite only two people for dinner.");
// Loop through the guest list and remove excess guests
for (var i = 0; i < guestList.length; i++) {
    if (i >= 2) {
        var removedGuest = guestList.pop(); // Remove the last person from the list
        console.log("Sorry, ".concat(removedGuest, "! You can't be invited to dinner."));
    }
}
// Print invitation messages to the remaining guests
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Remove the last two names from the list to make it empty
guestList.pop();
guestList.pop();
// Print to confirm that the list is empty
console.log("The guest list is now empty:", guestList);
//Task.18
//store the locations in an array 
var placesToVisit = ["china", "pakistan", "japan"];
//print the array in its original order
console.log("original order:", placesToVisit);
//print the array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", __spreadArray([], placesToVisit, true).sort());
//show that the array is stil in its original order.
console.log("original order after sorting:", placesToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:", placesToVisit);
//Reverse the order of your list.
placesToVisit.reverse();
console.log("reversed order:", placesToVisit);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("back to original order:", placesToVisit);
//sort the array in alphabetical order.
console.log("sorted in alphabetical order:", placesToVisit);
//sorted the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesToVisit);
//Task.19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner
var invitations = ["Ali", "Bilal"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, " people will come to the dinner"));
//Task.20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var country = ["pakistan", "india", "china", "japan"];
console.log("list of country:");
console.log(country);
//Task.21
//They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.
var person = { name: "imran", fname: "male", age: 21 };
console.log(person);
//Task.22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the 
//program.
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(days{7})
console.log(days[6]);
//Task.23
//Conditional Tests Write a series of conditional tests. Print a statement describing each test and 
//your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False
var car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("is car != 'honda city'? predict true");
console.log(car != 'honda city');
console.log("is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length != 10? predict true");
console.log(car.length != 10);
console.log(" is 10 > 45 ? predict false");
console.log(10 > 45);
console.log(" is 3 <= 2 ? predict false");
console.log(3 <= 2);
//Task.24
// More Conditional Tests You don’t have to limit the number of tests you create to 10. If you want to try 
//more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less 
//than or equal to Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array
var name_1 = "Muhammad";
var name_2 = "muhammad imran";
var name_3 = "muhammad imran ali";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for test");
}
if (age_1 != 22) {
    console.log("eligible for test in new category");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
//let country: string[] = ["pakistan", "china"]
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
//Task.25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color 
//and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
//just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will 
//have no output.)
//let alien_color = "green"
//if (alien_color == "green")
console.log("you earn 5 points");
//let alien_color: string = "red"
//if (alien_color == "red")
console.log("no output");
//Task.26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.
//let alien_color = "green"
//if (alien_color == "green"){
console.log("players just earned 5 points for shooting the alien");
//} else {
console.log("players just earned 10 points");
//}
//let alien_color = "red"
//if (alien_color == "green") {
console.log("players just earned 5 points for shooting the alien");
//} else {
console.log("players just earned 10 points");
//}
//Task.27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = "red";
if (alien_color == "green") {
    console.log("5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
//Task.28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.
//Task No 28........ 2, 4, 13, 20, 65, older
var age = 100;
if (age < 2) {
    console.log("you are a baoby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are older");
}
//Task.29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
//statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
//Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favourite_fruit = ["kivi", "orange", "apple", "berry", "peach"];
if (favourite_fruit.includes("kivi")) {
    console.log("kivi");
}
if (favourite_fruit.includes("apple")) {
    console.log("apple");
}
if (favourite_fruit.includes("orange")) {
    console.log("orange");
}
if (favourite_fruit.includes("berry")) {
    console.log("you really like banans");
}
if (favourite_fruit.includes("peach")) {
    console.log("you really like banans");
}
//Task.30
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
//statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
//Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//let favourite_fruit: string[] = ["kivi", "orange", "apple", "berry", "peach"]
if (favourite_fruit.includes("kivi")) {
    console.log("kivi");
}
if (favourite_fruit.includes("apple")) {
    console.log("apple");
}
if (favourite_fruit.includes("orange")) {
    console.log("orange");
}
if (favourite_fruit.includes("berry")) {
    console.log("you really like banans");
}
if (favourite_fruit.includes("peach")) {
    console.log("you really like banans");
}
//Task.31
//No Users Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ["eric", "haseeb", "ali", "fatima", "admin"];
// if (users.length === 0) {
//     console.log("We need to find some users!")
// } else {
// for(let user of users) {
//  if (user === "admin"){
//  console.log("Hello admin, would you like to see a status report")
// } else {
// console.log(Hello ${users}, thank you for logging in again)
// }
//    }
// }
users = [];
if (users.length === 0) {
    console.log("we need to find some users");
}
//Task.32
//Checking Usernames Do the following to create a program that simulates how websites ensure that everyone 
//has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
//in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message 
//that the person will need to enter a new username. If a username has not been used, print a message saying that 
//the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
var new_users = ["admin", "fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", is still in avaliable list"));
    }
}
//Task.33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
//Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
//Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    if (number === 1) {
        console.log("".concat(number, "st")); //1st
    }
    else if (number === 2) {
        console.log("".concat(number, "nd")); //2nd
    }
    else if (number === 3) {
        console.log("".concat(number, "rd")); //3rd
    }
    else {
        console.log("".concat(number, "th")); //4th , 5th , 6th , 7th , 8th , 9th
    }
}
//Task.34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!{}
var favourite_pizza = ["California", "chicken", "veg"];
for (var _b = 0, favourite_pizza_1 = favourite_pizza; _b < favourite_pizza_1.length; _b++) {
    var pizza = favourite_pizza_1[_b];
    console.log(pizza);
}
console.log("\n");
for (var _c = 0, favourite_pizza_2 = favourite_pizza; _c < favourite_pizza_2.length; _c++) {
    var pizza = favourite_pizza_2[_c];
    console.log("i really like ".concat(pizza, " pizza!"));
}
console.log("i really love pizza");
//Task.35
//Animals Think of at least three different animals that have a common characteristic. Store the names 
//of these animals in a list, and then use a for loop to print out the name of each animal.
//Modify your program to print a statement about each animal, such as A dog would make a great pet.
//Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!
var animals = ["lion", "cat", "monkey"];
for (var _d = 0, animals_1 = animals; _d < animals_1.length; _d++) {
    var animal = animals_1[_d];
    console.log(animal);
}
console.log("\n");
for (var _e = 0, animals_2 = animals; _e < animals_2.length; _e++) {
    var animal = animals_2[_e];
    console.log("A ".concat(animal, " has a tail"));
}
console.log("\n all of these are great pet but i love lions more");
//Task.36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
//printed on it. Call the function.
function makeShirt(size, text) {
    console.log("You order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt('large', '"i love typescript"');
makeShirt('medium', '"i need a big shirt"');
//Task.37
//Large Shirts Modify the make_shirt() function so that shirts are large by default with a message that
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
//function makeShirt(size: string= 'large', text: string= 'i love typescript'): void {
//console.log(`You have order a ${size}, shirt that says ${text}`)
//}
// makeShirt();
// makeShirt('medium')
// different message
makeShirt('small', 'I need a big shirt to wear');
//Task.38
//ities Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//for the country a default value. Call your function for three different cities, at least one of 
//which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi'); //default sentence
describe_city('france', 'europe');
describe_city('lahore', 'Punjab.pk');
//Task.39
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var c1 = cityCountry('lahore', 'pakistan');
var c2 = cityCountry('tokyo', 'japan');
var c3 = cityCountry('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
//Task.40
//Album Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object 
//containing these two pieces of information. Use the function to make three dictionaries representing 
//different albums. Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling 
//line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function 
//call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("imran", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("ali", "seenbreez");
console.log(album);
//Task.41
//Magicians Make a array of magician’s names Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["imran", "hamza", "bilal"];
show_magicians(magician);
//Task.42
//Great Magicians Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase 
//the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// function show_magicians(magicians: string[]): void {
//for (let i = 0; i < magicians.length; i++) {
//console.log(magicians[i]);
//}
//}
// Array of magician names
var magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Call make_great to modify the magicians
make_great(magicianNames);
// Call show_magicians to see the modified list
show_magicians(magicianNames);
//Task.43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to 
// show that you have one array of the original names and one array with the Great added to each
//  magician’s name.
// function make_great(magicians: string[]): string[] {
//     const greatMagicians:string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push("the Great" + magicians[i]);
//     }
//     return greatMagicians;
// }
// function show_magicians(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }
// // Array of magician names
// const magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];
// // Call make_great with a copy of the original array and store the new array
// const greatMagicianNames = make_great([...magicianNames]); // making shallow copy using spread operator
// // Call show_magicians to display the original list
// show_magicians(magicianNames);
// // Call show_magicians again to display the new list with "the Great" added
// show_magicians(greatMagicianNames);
//Task.44
//Sandwiches Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function orderSandwich(items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var i = 0; i < items.length; i++) {
            console.log("- ".concat(items[i]));
        }
    }
}
// Call the function with different numbers of arguments
orderSandwich(["Ham", "Cheese", "Lettuce"]);
orderSandwich(["Turkey", "Swiss"]);
orderSandwich([]);
function createCar(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var car = __assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
//Partial<Car> is a TypeScript utility type that makes all properties of the Car type optional.
//This means you can provide some, all, or none of the properties when calling the function.
// Call the function with required and optional information
var myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Leather Seats"] });
// Print the created car object
console.log(myCar);
//End
