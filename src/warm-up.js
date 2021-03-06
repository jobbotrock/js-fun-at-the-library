// Read the instructions for each of the warm up exercises carefully. This may
// seem repititious or pedandtic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.


//------------------------- Variables -------------------------//


// Initialize two new variables, "title", and "pages", and assign values to them with
// a book's title and page count.

var title = "The Golden Compass";
console.log('*COMMENT* returns comment of book: ', title);

var pages = 499;
console.log('*COMMENT* returns pages of book: ', pages);



// Reassign (not initialize) your "page" variable from above. An editor came around and
// condensed the book, use a built in math operator to make the page count a quarter
// of what it currently is

pages = pages / 4;
console.log('pages after being divides by 4: ', pages);

// Initialize a new variable "movie", but leave it undefined

var movie;
console.log('*COMMENT* this should return as undefined: ', movie);

// Create a variable named "sequel", and assign it to a be a sequel of your
// book (made up or not!). Your sequel must make use of your "title" variable from above

var newBook = 'Daddy Shark'
var sequel = 'Have you heard about the sequel to ' + title + '? apparenly ' + newBook + ' is way better.'
console.log('*COMMENT* this sould return a long sentence: ', sequel);

// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the book you chose is your favorite book or not

var isFavorite = true;
console.log('*COMMENT* this should return true: ', isFavorite);

// Create a new variable named "isShortStory", and use a comparison operator to
// assign a boolean value to this variable. If "pageCount" is less than 25, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator. √

var isShortStory = '';
if (pages < 25) {
  isShortStory = true;
} else {
  isShortStory = false;
}
console.log('*COMMENT* does this return false? ', isShortStory);

//------------------------- Conditionals -------------------------//


// Express the following in code: If the variable title is less than 1000 log
// the statement 'I could read that in a day!', otherwise, log the statement
// 'Ok, maybe I could read that in a day and a half' √


if (pages < 1000) {
  console.log('I could read that in a day!');
} else {
  console.log('Ok, maybe I could read that in a day and a half');
}


// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite book is [title]!'. Otherwise, log the
// statement 'I recently read the [title] book'. In either case, the value stored in
// the "title" variable should be included in the logged statement. √

var isFavorite = ''
if (isFavorite === true) {
  console.log(`My favorite book is ${title}!`);
} else {
  console.log(`I recently read the ${title} book`);
}

//------------------------- Arrays -------------------------//


// Create a new variable "books" and assign it to an Array of 5 different
// book titles, represented by their names as Strings. √

var books = [
  'The Lion, The Witch, and the Wardrobe',
  'Prince Caspien',
  'The Horse and His Boy',
  'Voyage of the Dawn Treader',
  'The Silver Chair'
]

// Write the code to access the 3rd element of the Array, using bracket
// notation. √

books[2];
console.log('element 3 in index 2: ', books[2]);

// Create a new variable "belowTwoHundred" and assign it to an Array of 12
// different numbers below two hundred. √

var belowTwoHundred = [13, 123, 132, 89, 121, 89, 98, 90, 23, 29, 32, 129]

// Write the code to access the number cllosest to two hundred, using bracket notation. √

belowTwoHundred[11];
console.log('Check to see if element 12 equals 129: ', belowTwoHundred[11]);


//------------------------- Objects -------------------------//

// Create a new variable "dictionary" and assign to it an object literal with two
// keys: name, and hasThesaurus. The value for name should the string 'Webster's', and
// the value for hasThesaurus should be false  √

var dictionary = {
  name: 'Webster\'s',
  hasThesaurus: false
}


// Write the code to add the key of pageCount, with the value of 720. Use dot
// notation to do this. DO NOT modify your code from above. √

dictionary.pageCount = 720;
console.log('*COMMENT* test to see if pageCount was added to dictionary object: ', dictionary);
