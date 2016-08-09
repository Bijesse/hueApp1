$(document).ready(function(){
console.log("works");
    var request = "http://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7";  
   // $.get(request, function(response){
   //    console.log(response.lights[1].state.on);
   //  });

   // });
   
  $.ajax(
  {
      url: request,
      type: "GET",
      success: function (response){
        console.log(response.lights[1].state.bri);

      },
      
  // url: request,
  // type: 'PUT',
  // data: "/lights/1/state/on",
  // success: function(data) {
  //  alert("put stuff")
  //   {"on":false};
  // },
      error: function (response) {
        console.log(response);
      }
    });


});