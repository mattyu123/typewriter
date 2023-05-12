const sentence = "hello there from lighthouse labs";
let start = 0;

for (let letter = 0; letter < sentence.length; letter ++) {
  if (letter === sentence.length - 1) {
    start += 50
    setTimeout(() => {
      process.stdout.write(sentence[letter] + '\n')
    }, start)
  } else {
    start += 50
    setTimeout(() => {
      process.stdout.write(sentence[letter])
    }, start)
  }
};
