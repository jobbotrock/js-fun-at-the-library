
//////////////////////////////////////////////////////////////////////
/////////////////////////// CreatTitle ///////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1) Create a function that adds 'The ' to the beginning of bookTitle
// 2) Be able to create many different modified book titles

function createTitle(bookTitle) {
  return "The " + bookTitle;
}

// createTitle('The Last of the Mohicans');
// createTitle('Land Before Time');


//////////////////////////////////////////////////////////////////////
//////////////////   buildMainCharacter ///////////////////////////////
//////////////////////////////////////////////////////////////////////

// should be a function (comment the function back into the module.exports
// object in book.js)
// should create a character object

// Create a function called buildMainCharacter
// Function should be able to create a character object
// Function should assign (1) name (2) age (3) pronouns

var buildMainCharacter = (name, age, pronouns) => {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}



//////////////////////////////////////////////////////////////////////
//////////////////  saveReview ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should be a function (comment the function back into the module.exports object in book.js)
// should be able to add reviews to an array
// should be able to add reviews to an array that already contains reviews
// should only add unique reviews

// 1) create a function called saveReview that adds a review to an empty array
// 2) function should be able to add new reviews to review reviewsArray
// 3) revewsArray should not include duplicate reviews.
// 4) review should appear in index [0] of array. (unshift array prototype?)
// 5) check for duplicates in array

function saveReview(newReview, reviews) {
  reviews.push(newReview);
}



/////////////////////////////////////////////////////////////////////////////
//////////////////  calculatePageCount///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
  // should be a function (comment the function back into the module.exports object in book.js)
  // should add 20 pages per letter in the title
  // should add 20 pages per letter for a different title


  //input bookTitle as a Strings
  //output number of every letter in bookTitle * 20
  //take num add 80

function calculatePageCount(bookTitle) {
  var pageCount = 0;
  pageCount = (bookTitle.length * 20);
  return pageCount;
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
   //writeBook: writeBook,
  // editBook: editBook
}
