function init(){
//add your javascript between these two lines of code
  function alertFunction(){
	var x1 = document.getElementById("entryinput").value;
	var x2 = document.getElementById("textoutput");
	alert("Alex DeMuth: "+ x1);
	x1.innerHTML = x1;
  }
  var x3 = document.getElementById('entrybutton');
  x3.addEventListener("click", alertFunction);
}
window.addEventListener('load', init);
