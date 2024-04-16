import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#button').on('click', _.debounce(updateCounter, 300));

$(document).ready(function() {
  $('<p>').text('Holberton Dashboard').appendTo('body');
  $('<p>').text('Dashboard data for the students').appendTo('body');
  $('<button>').text('Click here to get started').attr('id', 'button').appendTo('body');
  $('<p>').attr('id', 'count').appendTo('body');
  $('<p>').text('Copyright - Holberton School').appendTo('body');
});

