$(this).css({backgroundColor: 'green'});
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonobj =  JSON.parse(this.response);
      
        var checkboxes= "";
      var row="";
      var table="";
for ( var i=0;i<jsonobj.length; i++) 
        {
                   if(jsonobj[i].completed==true)   {
             row +="<br>"+'<input type="checkbox" class="check" checked disabled>'+(jsonobj[i].title)+"<br>";
           }
           else{
            row +="<br>"+'<input type="checkbox" class="checks">'+(jsonobj[i].title)+"<br>";
            
           }
               
        document.getElementById("result").innerHTML=row;
        
          }  ;
        }
      };
     

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
        }

//   Checking maximum number of tasks should be selected using promise//
var count=0;
function counter()
{
  
     count=$(".checks:checked").length;
   console.log(count);
   const promise=new Promise((resolve,reject) => {
    if(count>=5)
    setTimeout(() => {
      resolve("You have reached the maximum 5 values!!!");
   })
   setTimeout(() => {
     reject('oops !!');
   });
  });
   promise
   .then(alert)
   .catch(console.error);
}


























