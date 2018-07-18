var download = {
  start: function(req, res) {
    var user = req.body.user.toLowerCase();
    var collection = req.body.collection.toLowerCase();
    var url = req.body.url;
    var fs = require('fs');
    var youtubedl = require('youtube-dl');

    youtubedl.exec(url, ['-x', '--audio-format', 'mp3', "--embed-thumbnail", "-o", user+ "/" + collection + "/" + "%(title)s".split(" ")[0] + ".%(ext)s"], {}, function exec(err, output) {
    'use strict';
      if (err) { throw err; }
      console.log(output.join('\n'));
    });

    var video = youtubedl(url);

    // Will be called when the download starts.
    video.on('info', function(info) {
      console.log('Download started');
      console.log('filename: ' + info._filename);
      console.log('title:', info.title);
      console.log('url:', info.url);
      console.log('format id:', info.format_id);
});
    res.json({"status": "success"});
  }
};

module.exports = download;
