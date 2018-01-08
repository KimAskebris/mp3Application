function check() {
  if (!($('.track-radio-button:checked').length > 0)) {
    $('.error-message').text("Choose a track first");
    $('.error-message').css('color', 'red');
  } else {
    $('#update-modal').modal('show');
  }
}



function update(){

    var track = new Object();
    track.id = $('.track-radio-button:checked').attr('id');
      track.title = $('#title').val();
      track.artist = $('#artist').val();
      track.album = $('#album').val();
      track.length = $('#length').val();
      track.year = $('#year').val();
    var json = JSON.stringify(track);
    urlToAPI = "http://localhost:8080/api/tracks/" + track.id;
    $.ajax({
      url: urlToAPI,
      type: 'PUT',
      data: json,
      contentType: 'application/json',
      dataType: 'json',
      success: function () {
        console.log("Track updated");
        $('#modal').modal('hide');
        getAllTracks();
      },
      error: function () {
         console.log("Något gick fel");
         $('#update-modal').modal('hide');
         getAllTracks();
       },
    });

}
