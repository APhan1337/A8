'use strict';

$(document).ready(function () {
    initializePage();
})

function initializePage() {
    // $('#myRange').mousemove(function(){
    //     $('#rangeValue').text($('#myRange').val());
    // });
    $('#progressbar1').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#3DA67D',
        height: '20px',
        radius: '15px',
        width: '50%'
    });

    $(document).on("click", "#flag-btn-1", function(event){
        $('#modal1').modal('show');
    });

    $(document).on("click", ".close-btn-1", function(event){
        $('#modal1').modal('toggle');
    });

    $(document).on("click", "#flag-btn-2", function(event){
        $('#modal2').modal('show');
    });

    $(document).on("click", ".close-btn-2", function(event){
        $('#modal2').modal('toggle');
    });

    $(document).on("click", "#flag-btn-3", function(event){
        $('#modal3').modal('show');
    });

    $(document).on("click", ".close-btn-3", function(event){
        $('#modal3').modal('toggle');
    });

    $(document).on("click", "#cap-btn", function(event){
        $('#modal4').modal('show');
    });

    $(document).on("click", ".close-btn-4", function(event){
        $('#modal4').modal('toggle');
    });
}