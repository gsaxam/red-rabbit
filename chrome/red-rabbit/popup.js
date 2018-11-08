$(document).ready(function() {
  
  $("#username").val(localStorage["red-rabbit.username"])	
  $("#collection").val(localStorage["red-rabbit.collection"])

  $("#submit").click(function() {
  	localStorage["red-rabbit.username"] = document.getElementById('username').value;
  	localStorage["red-rabbit.collection"] = document.getElementById('collection').value;

    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true
      },
      function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        $.ajax({
          type: "POST",
          url:
            "http://rabbit.ghimire.org/api/v1/start",
            // "http://localhost:3000/api/v1/start",
          async: false,
          data: {
            user: document.getElementById('username').value,
            collection: document.getElementById('collection').value,
            url: url
          },
          success: function(msg) {
            document.getElementById('result').innerHTML = "success!"
          },
          error: function() {
            document.getElementById('result').innerHTML = "error!"
          }
        });
      }
    );
  });
});
