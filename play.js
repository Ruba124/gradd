function delayPrint(message, time) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = message;  // 👈 Display message on screen
      resolve();
    }, time);
  });
}

function play(no) {
  alert("SWIPE DOWN TO SEE THE RESULT");
  delayPrint("3", 1000)
    .then(function() {
      return delayPrint("2", 1000);
    })
    .then(function() {
      return delayPrint("1", 1000);
    })
    .then(function() {
      return delayPrint("The " + no + " best player in the year is", 1500);
    })
    .then(function() {
        switch(no) {

            case 'first':{return delayPrint("Declan Rice", 2000);
                break;}

            case 'second':{return delayPrint("bokayo saka", 2000);
                break;}
            case 'third':{return delayPrint("david raya", 2000);
                break;}
        }
      
    });
}


