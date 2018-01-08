function checkIfRadioButtonisFilled() {
  if (!($('.track-radio-button:checked').length > 0)) {
    $('.error-message').text("Choose a track first");
    $('.error-message').css('color', 'red');
  } else {
    deleteTrack();
  }
}

function deleteTrack() {
  var id = $('.track-radio-button:checked').attr('id');
  urlToAPI = "http://localhost:8080/api/tracks/" + id;
  $.ajax({
    url: urlToAPI,
    type: 'DELETE',
    success: function (response) {
      console.log("Track deleted");
      getAllTracks();
    }
  });
}
