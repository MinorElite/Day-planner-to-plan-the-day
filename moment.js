$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 1st 2021, 4:36:27 pm

setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000)
//moment().format('dddd');                    // Monday
//moment().format("MMM Do YY");               // Mar 1st 21
//moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
//moment().format(); 

