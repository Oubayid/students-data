var available = 15



function decrement() {

  var firstname = document.getElementById("name").value
  var id = document.getElementById("id").value
  var age = document.getElementById("age").value
  var cohort = document.getElementById("cohort").value



  available--
  document.getElementById("counter").innerHTML = available
  console.log(available)
  console.log("input", id)
  console.log('input', firstname);
  console.log("input", age)
  console.log("input", cohort)



}





var button = document.getElementsByClassName("ins")
console.log(button)
button[0].addEventListener("click", decrement)


var y = document.getElementById("b1")
y.onclick = function () {

  var firstname = document.getElementById("name").value
  var id = document.getElementById("id").value
  var age = document.getElementById("age").value
  var cohort = document.getElementById("cohort").value



  var x = JSON.parse(localStorage.getItem("data"))
  console.log(x)
  x.push({ "name": firstname, "age": age, "id": id, "cohort": cohort })
  localStorage.setItem("data", JSON.stringify(x))
}






function addStudent(){


    
      var IdNumber=document.sample.IdNumber.value; 
      var name=document.sample.name.value; 
      var age=document.sample.age.value; 
      var cohort=document.sample.cohort.value; 
    

        var tr = document.createElement('tr');
        
      
      var td1 = tr.appendChild(document.createElement('td'));
      var td2 = tr.appendChild(document.createElement('td'));
      var td3 = tr.appendChild(document.createElement('td'));
      var td4 = tr.appendChild(document.createElement('td'));

      td1.innerHTML=IdNumber;
      td2.innerHTML=name;
      td3.innerHTML=age;
      td4.innerHTML=cohort;

      

      document.getElementById("tb4").appendChild(tr);


      }


      


      $(document).ready(function(){
        $(".chose1").click(function(){
          $("p6").slideUp();
        });
        $(".chose1").click(function(){
          $("p6").slideDown();
          $("p7").slideUp();
          $(".table1").show();
    
          $(".table2").hide();
    
    
    
        });
      });
    
      $(document).ready(function(){
        $(".chose2").click(function(){
          $("p7").slideUp();
        });
        $(".chose2").click(function(){
          $("p7").slideDown();
          $("p6").slideUp();
          $(".table2").show();
          $(".table1").hide();
    
    
    
    
        });
      });
      
$("#myDropdown").on("click","a",function(e){
 console.log($($(e.target)[0]).text())


})





//this part of code from w3scholl
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
