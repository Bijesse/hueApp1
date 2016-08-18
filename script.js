$(document).ready(function(){
//console.log("works");
    var request = "http://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7";
   // $.get(request, function(response){
   //    console.log(response.lights[1].state.on);
   //  });

   // });


  //  data: JSON.stringify(yourObj)
  //  contentType: 'application/json',

   
  $.ajax(
  {
      url: request,
      type: "GET",
      success: function (response){
        console.log(response.lights[1].state.bri);

      },

  url: request + "/lights/4/state/on",
  type: 'PUT',
  datatype: 'json',
  data: {"on":false},
  success: function(data) {
   console.log("put stuff")
  },


      error: function (response) {
        console.log(response);
      }
    });

});
