'use strict';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = () => {
  let ctimes = $('#count').html() || 0;
  $('button').on('click', () => {
    ctimes++;
    $('#count').html(`${ctimes} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
