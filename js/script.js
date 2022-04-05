function init(){
//add your javascrip between these two lines of code
  function alertFunction(){
	var x1 = document.getElementById("entryinput").value;
	var x2 = document.getelementById("textoutput");
	
	alert("Alex DeMuth: "+ x1);
	x1.innerHTML = x1;
  }







window.addEventListener('load', init);
