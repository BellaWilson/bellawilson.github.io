// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Voice Chatbot with p5.Speech
// Edited Video: https://youtu.be/iFTgphKCP9U

function setup() {
  noCanvas();
  let speech = new p5.Speech();
  let speechRec = new p5.SpeechRec('en-US', gotSpeech);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous, interim);

  let bot = new RiveScript();
  bot.loadFile("brain.rive").then(function() {
    console.log("bot loaded!");
    bot.sortReplies();
  }).catch(function(err, filename, lineno) {
    console.error("an error has occured!");

  });




  // let button = select('#submit');
  // let user_input = select('#user_input');
  // let output = select('#output');

  // button.mousePressed(chat);

  function gotSpeech() {
    if (speechRec.resultValue) {
      let input = speechRec.resultString;
      //user_input.value(input);
      let reply = bot.reply("local-user", input);
      speech.speak(reply);
      //output.html(reply);
    }
  }

  // function chat() {
  //   let input = user_input.value();
  // }

}
