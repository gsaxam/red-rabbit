$(document).ready(function() {
  $("#submit").click(function() {
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
            "http://ec2-54-209-85-137.compute-1.amazonaws.com:3000/api/v1/start",
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
