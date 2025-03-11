// Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ")
console.log(moo, neigh, baa, oink, cluck);

// cow horse sheep pig chicken






// Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, ,dolly, babe, little] =farmAnimals.split(" ");
console.log(bessie, dolly, babe, little)

// cow sheep pig chicken






// Little the chicken had to go back to the coop, so now we're left with three. 
// Let's use color variables of blackAndWhite, black, and pink.
//uses destructuring to declare the three traditional animal colors
const[blackAndWhite, ,black, pink] = farmAnimals.split(" ")
console.log(blackAndWhite, black, pink);

// cow sheep pig






// Use destructuring to assign appropriate variables using the color names.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors
console.log(red, orange, yellow, green, blue, indigo, violet);

// red orange yellow green blue indigo violet








// Array: uses destructuring to declare six rainbow color variables using initials
// Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
// uses destructuring to declare Indigo using indg:
const [r, o, y, g, b, indg, v] = colors
console.log(indg);

// indigo







// Use destructuring to assign all variables using the keys as the variable names
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const {muppetName, color, song, job, partner} = muppet
console.log(muppetName, color, song, job, partner);


// Miss Piggy pink Never Before, Never Again Cast member of The Muppet Show Kermit




// Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {song2, song4} = nestedMuppet.album.theMuppetMovie;
console.log(song2, song4);

// Moving Right Along I Hope That Something Better Comes Along




const {nestedJob, nestedPartner} = nestedMuppet
console.log(nestedJob, nestedPartner);

// Host of The Muppet Show Miss Piggy







// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner