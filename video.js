$(document).ready(function () {
  var key = "AIzaSyCfS_hgsLLjxXhKDPY7W-LJppOIYZmwKmk";
  var playlistId = "PLXU1ceSUlGLgDo4FkSfP-YLTxwl3SxGQn";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key,
    maxResults: 50,
    playlistId,
  };

  loadVids();
  function loadVids() {
    $.getJSON(URL, options, function (data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }

  function mainVid(id) {
    $("#video").html(`
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);
  }

  function resultsLoop(data) {
      $.each(data.items, function(i, item){
          var thumb=item.snippet.thumbnails.medium.url;
          var title = item.snippet.title;
          var des = item.snippet.description.substring(0, 50);
          var vid = item.snippet.resourceId.videoId;

          $('main').append(`
          <article class="item" data-key="${vid}">
          <img src="${thumb}" alt="" class="thumb">
          <div class="details">
            <h4>${title}</h4>
            <p>${des}</p>
          </div>
        </article>`);

    });
    $('main').on('click', 'article', function(){
        var id =$(this).attr('data-key');
        mainVid(id);
    });

  }

});
