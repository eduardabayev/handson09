let newRequest = new XMLHttpRequest()
newRequest.onreadystatechage = function() {
   if (this.readyState == 4 && this.status == 200)
       let myObj = JSON.parse(this.responseText); 
       document.getElementById("Einstein).innerHTML = myObj.name;

}
newRequest.open("GET", "name, birthday");
newRequest.send();