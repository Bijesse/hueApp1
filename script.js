$(document).ready(function(){
console.log("works");
   // var request = "https://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7/lights";  
   // $.get(request, function(response){
   //    var lightString = JSON.stringify(response);
   //    var lightObj = JSON.parse(response);
   //    console.log(lightObj);
   //    //console.log(request["1"].state.on);

   // });
   
  $.ajax({
      url: "https://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7/lights",
      type: "GET",
      success: function (response){
        console.log(url);

      },
      error: function (response) {
        console.log(response);
      }
    });


});