var noOFSquares=6;

var arr=[];

var picked;

var squares=document.getElementsByClassName("square");

var targetColor=document.getElementById("targetColor");

var message=document.getElementById("message");

var head=document.querySelector("h1");

var reset=document.getElementById("NewColor");

init();

function init()
 {
	 // body... 
	 //generate random color
	  arr=generateRandomColor(noOFSquares);

     //get target color randomnly from the array size
	picked= arr[randomPickedColorIndex()];

     //updated color 
	targetColor.textContent = picked;


     for (var i=0; i<squares.length; i++)
       {
	      //setting squares color one by one to palatte color
	      squares[i].style.backgroundColor=arr[i];
    
          //addind event listener to all squares
	      squares[i].addEventListener("click",function()
	      {
		   if (picked===this.style.backgroundColor)
		    {
			message.textContent="Correct";
			message.style.color="green";

			//when correct, set everything to the target color and set newcolor to playagain
			changeColor(this.style.backgroundColor);
			reset.textContent="Play Again?";
		    }
            else
            {
			message.textContent="Try Again";
			message.style.color="red";

			//to hide the wrong square, we will set it to background color 

			this.style.backgroundColor= "#232323";
		    }
	       });
       }
}

reset.addEventListener("click", resetIn);


//to get the random color from existing palatte
function randomPickedColorIndex()
{
	return Math.floor(Math.random()*arr.length);
}

function generateRandomColor(limit)
{
	var color=[];
	for (var i=0; i<limit; i++)
		color.push(rgbGenerator());
	return color;
}

function rgbGenerator() {
	
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb("+r+" ,"+g+", "+b+")";
}

function changeColor(color){
	for (var i=0; i<squares.length;i++)
		squares[i].style.backgroundColor=color;
	head.style.backgroundColor=color;
}

function resetIn(){
	arr=generateRandomColor(noOFSquares);
	picked=arr[randomPickedColorIndex()];
	targetColor.textContent=picked;
	message.textContent="";
	head.style.backgroundColor="steelblue";

	for (var i=0; i<squares.length; i++)
		squares[i].style.backgroundColor=arr[i];
}