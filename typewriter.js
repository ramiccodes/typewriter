const sentence = "hello there from lighthouse labs\n";

let i = 0;
let speed = 0
const typewriter = () => {
  if (i < sentence.length) {
    process.stdout.write(sentence.charAt(i));
    i++;
    speed += 50;
    setTimeout(typewriter, speed)
  }
}

typewriter();