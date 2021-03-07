'use strict';

$(document).ready(function () {
    initializePage();
})

function initializePage() {
    $('#myRange').mousemove(function(){
        $('#rangeValue').text($('#myRange').val());
    });
}