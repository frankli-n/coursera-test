
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (i of names) {
    var firstLetter = i.charAt(0);
    if (firstLetter.toLowerCase() === 'j') {
      byeSpeaker.speak(i)
    } else {
      helloSpeaker.speak(i)
    }

  }
})(window);
