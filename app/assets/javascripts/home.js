window.addEventListener("DOMContentLoaded",function(){


var string1 = "orange";

function test(string){
  Rails.ajax({
    url: "/posting",
    type: "POST",
    data: "word=" + string,
    success: function(data) {
      console.log(string)
    }
  });
}

// test(string1)


















})