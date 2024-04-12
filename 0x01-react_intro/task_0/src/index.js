import $ from 'jquery'; // Import jQuery

$(document).ready(function() {
  $('body').append([
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<p>').text('Copyright - Holberton School'),
  ]);
});

