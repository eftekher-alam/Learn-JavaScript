console.log("-----> Find Vowel from sentence <--------");
const vowel = ["a", "e", "i", "o", "u"];
let sentence = "I love Bangladesh";

const sentArray = Array.from(sentence.toLowerCase());
let timesOfViewl = 0;
sentArray.forEach(function (value) {
    if (vowel.includes(value)) {
        timesOfViewl++;
    }
});

console.log("Number of vowel exist in the sentence : " + timesOfViewl);