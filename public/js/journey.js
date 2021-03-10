'use strict';

$(document).ready(function () {
    if (matchMedia('only screen and (max-width: 600px)').matches) {
        console.log("Mobile view");
        initializePage();
    } else {
        console.log("Web view");
        $('head').append('<script src="/js/jquery.rwdImageMaps.min.js"></script>');
        $('img[usemap]').rwdImageMaps();
    }
})

function initializePage() {
    $('#map_ID area').each(function() {
        var arr = [[593,790,729,1000],[36,726,136,879],[601,390,674,495],[357,196,432,302],[410,6,598,137]];
        // console.log("Testing");
        // console.log($(this).attr("coords"));
        var temp = $(this).attr("coords").split(',');
        var alt = $(this).attr("alt");
        // console.log(typeof alt);
        var numAlt = Number(alt)
        // console.log(typeof numAlt);
        for (var i = 0; i < temp.length; i++) {
            var nums = temp[i].split(',');
            for (var j = 0; j < nums.length; j++) {
                // console.log(arr[numAlt][i]);
                nums[j] = arr[numAlt][i];
                console.log(arr[numAlt][i]);
            }
            temp[i] = nums.join(',');
        }
        $(this).attr("coords", temp.join(','));
    });
}