$("#add-new-track").submit(function(evt){
  evt.preventDefault();
  var formData = new FormData($(this)[0]);
  $.ajax({
    url: 'http://localhost:8080/api/tracks',
    type: 'POST',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    success: function (response) {
      getAllTracks();
    }
  });
  return false;
});
