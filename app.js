//* SECTION - global variables

const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

//!SECTION for loops/ forEach loops

// console.group()
console.log('people length:', people.length);

// for (let i = 0; i < people.length; i++) {
//   let person = people[i];
//   console.log('person:', person);
// }



//!SECTION functions

// step 1 id's are firstLocation through fifteenthLocation 

// step 2 this sets a random location, 
// how do we assign this to a person?

function personRandomLocation() {

  people.forEach(person => {

    console.log('person for each!', person)

    let randomNumber = Math.floor(Math.random() * locations.length)
    // console.log('random number for location: ', randomNumber);
    let randomLocation = locations[randomNumber]

    person.location = randomLocation

    console.log(person, 'is at ', randomLocation);
  })
}

function drawPeople() {
  let peopleString = ''

  locations.forEach(location => {

    let peopleAtLocationArray = people.filter(p => p.location == location)
    console.log(peopleAtLocationArray);
    // peopleString = peopleAtLocationArray.map(person => person.picture)
    peopleAtLocationArray.forEach(person => {
      peopleString = person.picture
    })
    console.log("people string", peopleString);
    const getPeopleOnScreenElem = document.getElementById(`${location}`)
    getPeopleOnScreenElem.innerText = peopleString
  })
  // peopleArray.forEach(person => { peopleString += person.picture })
  // console.log(peopleString);
}

function turnToBat() {
  let peopleAtLocationArray = people.filter(p => p.location == location)
  console.log('this is when I click my bat button', peopleAtLocationArray);

}

personRandomLocation()
drawPeople()
// function filterPeople() {

// }

// 1 - look at all the locations with a forEach

// 2 - declare a variable ... atLocation this function is going to look at our people array and filter them by location ... which right now is an empty string... FILTER people array 

// 3 - put emoji on the map ... declare a new variable... peopleEmoji.... atLocation we want to MAP each person in our people array with their person.emoji 

// NOTE this is randomizing the location

// use this function when we start moving people around the map
function randomizeLocation() {

}


// // step 7
// function makeAHunter() {
//   let randomNumber = Math.floor(Math.random() * people.length)
//   console.log('random number', randomNumber);
//   let randomPerson = people[randomNumber]
//   randomPerson.isHunter = true
//   console.log('random person: ', randomPerson);
// }


// //!SECTION invoke a function
// makeAHunter()