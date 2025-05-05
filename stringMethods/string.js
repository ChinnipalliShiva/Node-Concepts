let a = "Hello World";
let b = "!";

//gives char at given index
console.log("charat : ", a.charAt(0)); // H

//gives asic number of char at given index
console.log("code at : ", a.charCodeAt(1)); //101
console.log("code point at : ", a.codePointAt(1)); //101

//joins two strings
console.log("concat : ", a.concat(b));

//case sensitive
console.log("includes : ", a.includes("t"));
console.log("includes : ", a.includes("l"));

//case sensitive
console.log("ends : ", a.endsWith("d"));
console.log("start : ", a.startsWith("H"));

//gives first index of given char
console.log("index of : ", a.indexOf("l"));

//gives last index of given char
console.log("last index : ", a.lastIndexOf("l"));

// Retrieves the result of matching a string against a pattern.
//matches with regular expression
//matches first occurrence of the pattern
console.log("macth : ", "abcd1234abcd4567".match(/\d+/));  //op-array [ '1234', index: 4, input: 'abcd1234abcd4567', groups: undefined ]

// Returns all matches of a regular expression.
console.log("match all : ","abcd1234abcd4567".match(/\d+/g)); //op-array [ '1234', '4567' ]
// Returns the number of matches of a regular expression.

// Returns the Unicode normalization form of a string.
console.log("normalize : ", a.normalize());

//for pad start cant take variable directly
console.log("pad end : ", "5".padEnd(4, "H"));
console.log("pad start : ", "a".padStart(4, "H"));

//repeats same string mltiple times
console.log("repeat : ", a.repeat(2)); // Hello WorldHello World

//REPLACES THE FIRST OCCURRENCE OF A STRING WITH ANOTHER STRING
console.log("replace : ", a.replace("l", "L")); // HeLlo World

//REPLACES ALL OCCURRENCES OF A STRING WITH ANOTHER STRING
console.log("replace all : ", a.replaceAll("l", "L")); // HeLLo WorLd

//SLICE THE STRING FROM START TO END
console.log("slice : ", a.slice(0, 5)); // Hello

//SPLIT THE STRING INTO AN ARRAY OF SUBSTRINGS
console.log("split : ", a.split(" ")); // [ 'Hello', 'World' ]

//SUBSTRING THE STRING FROM START TO END
console.log("substring : ", a.substring(0, 5)); // Hello

// TOLOWER CASE
console.log("to lower : ", a.toLowerCase()); // hello world
// TOUPPER CASE
console.log("to upper : ", a.toUpperCase()); // HELLO WORLD

//to string() – Converts a string to a string (this is a no-op).
let c = 123;
console.log("to string : ", c.toString()); // Hello World

//trim() – Removes whitespace from both sides of a string.
console.log("trim : ", a.trim()); // Hello World

//trimEnd() – Removes whitespace from the end of a string.
console.log("trim end : ", a.trimEnd()); // Hello World

//trimStart() – Removes whitespace from the start of a string.
console.log("trim start : ", a.trimStart()); // Hello World
