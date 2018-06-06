$(document).ready(function(){
    $("#start-button").click(function(){
  
   // Start timer at 45 seconds and hide the start button and rules
        var number = 45;
        alert("Good Luck!!");
      $("#start-button").on("click", start);  // Starts Game 
      $("#submit").on("click", finish);  // Submit Answer
      $("#restart").on("click", restart);  // Restart Game 
  
    // Function when Start Pressed
      function start(){
          counter = setInterval(timer, 1000);
          Display(".question");
          Display(".answers");
          Display("#submit");
          hidden("#start-button");
          hidden(".rules");
          hidden("#restart");
          hidden("#results");
      }

    //Timer Function
      function timer(){
        number-- // Timer counts down by 1
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          alert("Times Up!")
          stop(); 
        }
      }

    //Stop Timer and Display/Hide Elements
      function stop(){
          clearInterval(counter); // Stops Timer 
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".answers").hide();
          $("#submit").hide();
      }

    //Finish Timer when clock stops
      function finish(){
          number = 1; 
          clearInterval(counter); // Stops Timer Automatically
          timer();
      }
  
      // Resets Timer to 45 seconds
      function restart(){
          number = 45;
          start();
      }
      
      // Hide elements until called
      function hidden(e) {
          $(e).hide();
      }

      //Displays elements when called
      function Display(e) {
          $(e).show();
      }

      //Calls Start function
        start(); 
    });
  });
  