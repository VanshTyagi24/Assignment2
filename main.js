let x = document.getElementById("confirm");
let slider = document.getElementById("difficulty");
var div = document.getElementById("stage");
var div1 = document.getElementById("test");
var count = 0;
var time = 0;

var wordArray = [
	"Hello",
	"mate",
	"welcome",
	"to",
	"my",
	"Speed",
	"Writer",
	"Application",
	"Good",
	"Luck"

];

x.addEventListener('click',clickHandler);
function clickHandler(event){
  var level = slider.value;
  //console.log(level);
  event.target.remove();
	  slider.remove();
		x.removeEventListener('click',clickHandler);

   var timeoutId = window.setTimeout(ticker, 20000);



    var p = document.createElement('p');
    var pText = document.createTextNode("Next Word: ");
    var wordText = document.createTextNode(wordArray[count]);
    p.appendChild(pText);
    p.appendChild(wordText);
    div1.appendChild(p);

    var input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','word');
    div1.appendChild(input);
    input.focus();
		var seconds = window.setInterval(timeCount, 1000);
		 function timeCount(){
			 time++;
		 }
		function ticker(){

      if(count<level){
        p.remove();
    		var p1 = document.createElement('p');
    	  var pText1 = document.createTextNode("TIMES UP!    You Got "+ count +" out of "+level+" words!");
    	  p1.appendChild(pText1);
    	  div.appendChild(p1);0
    		p1.setAttribute("class","red");
        input.disabled = true;
				input.removeEventListener('keyup',validation);
    	}
    }

    input.addEventListener('keyup',validation);
    function validation(e){
   	 console.log(e.target.value);
      if(e.target.value === wordArray[count]){

        wordText.remove();
        input.value = "";
   		  count++;
        if(count<level)
      {  wordText = document.createTextNode(wordArray[count]);
        p.appendChild(wordText);
      }
      else {
        wordText = document.createTextNode("Congratulations You Won!  Your Time was "+ time+" seconds");
        p.appendChild(wordText);
        p.setAttribute("class","green");
        pText.remove();
        input.disabled = true;
        input.removeEventListener('keyup',validation);
      }
      }

  }
}
