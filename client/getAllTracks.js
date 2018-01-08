$('document').ready(function() {
  getAllTracks();
});


function getAllTracks() {
  $.getJSON( "http://localhost:8080/api/tracks", function( data ) {
    $('#tracks-table').empty();
    data.forEach(function(track) {
    var id = track.id;

      $('#tracks-table').append('<tr>'+'<td><input id="'+id+'" class="track-radio-button" name="track" type="radio"></td>'+
                                   '<td>'+track.title+'</td>'+
                                   '<td>'+track.artist+'</td>'+
                                   '<td>'+track.album+'</td>'+
                                   '<td>'+track.length+'</td>'+
                                   '<td>'+track.year+'</td>'+
                                   '</tr>');
    });
  });
}
