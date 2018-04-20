// First attempt

function findShort(s){
 var theThing = s.split(' ')
 var theLengthsOfTheThings = []

 for (var i = 0; i < theThing.length; i++){
   theLengthsOfTheThings.push(theThing[i].length)
 }
 var theCurrentThing = theLengthsOfTheThings[0]
 for (var i = 0; i < theLengthsOfTheThings.length; i++){
   if (theCurrentThing < theLengthsOfTheThings[i]){
     // lolnope
   }
   else{
     theCurrentThing = theLengthsOfTheThings[i]
   }
 }
 return theCurrentThing
}
console.debug(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
/*
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
});
*/

// Best Perceivable
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
