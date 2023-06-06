//To print single quotes in consol.
let sentence = "'Matador' pen.";
console.log(sentence);

//To print double quotes in consol.
sentence = '"Matador" pen.';
console.log(sentence);

//Get length of string
console.log(sentence.length);


//--------------> SubString Methods <----------------
let info = "Hello this is Eftekher Alam";

// SubString by slice(startIndex, endIndex)
console.log(info.slice(13, 22));
//It also take nagative value which count from last.
console.log(info.slice(-13, -4));
//Cut from index 13 to the last.
console.log("From index 13 to the last : " + info.slice(13));

//SubString(startIndex, endIndex)
console.log(info.substring(5,22));

//substr(startIndex, length)
console.log(info.substr(13, 9));



//--------------> Replace Methods <----------------
let mineInfo = "Hello this is Eftekher Alam";

console.log(mineInfo.replace("Eftekher", "Shuvo")); //Hello this is Shuvo Alam


//--------------> UpperCase & LowerCase Methods <----------------
console.log(mineInfo.toLowerCase())
console.log(mineInfo.toUpperCase())