
console.log(moment().hour())
$(document).ready(function () {
    var titleDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#title').append(titleDate);
    if (moment().hour() === 9) {
        $('.plan0').css("background-color","red")
    }
    if (moment().hour() > 9) {
        $('.plan0').css("background-color","gray")
    }
    if (moment().hour() < 9) {
        $('.plan0').css("background-color","green")
    }
    if (moment().hour() === 10) {
        $('.plan1').css("background-color","red")
    }
    if (moment().hour() > 10) {
        $('.plan1').css("background-color","gray")
    }
    if (moment().hour() < 10) {
        $('.plan1').css("background-color","green")
    }
    if (moment().hour() === 11) {
        $('.plan2').css("background-color","red")
    }
    if (moment().hour() > 11) {
        $('.plan2').css("background-color","gray")
    }
    if (moment().hour() < 11) {
        $('.plan2').css("background-color","green")
    }
    if (moment().hour() === 12) {
        $('.plan3').css("background-color","red")
    }
    if (moment().hour() > 12) {
        $('.plan3').css("background-color","gray")
    }
    if (moment().hour() < 12) {
        $('.plan3').css("background-color","green")
    }
    if (moment().hour() === 13) {
        $('.plan4').css("background-color","red")
    }
    if (moment().hour() > 13) {
        $('.plan4').css("background-color","gray")
    }
    if (moment().hour() < 13) {
        $('.plan4').css("background-color","green")
    }
    if (moment().hour() === 14) {
        $('.plan5').css("background-color","red")
    }
    if (moment().hour() > 14) {
        $('.plan5').css("background-color","gray")
    }
    if (moment().hour() < 14) {
        $('.plan5').css("background-color","green")
    }
    if (moment().hour() === 15) {
        $('.plan6').css("background-color","red")
    }
    if (moment().hour() > 15) {
        $('.plan6').css("background-color","gray")
    }
    if (moment().hour() < 15) {
        $('.plan6').css("background-color","green")
    }
    if (moment().hour() === 16) {
        $('.plan7').css("background-color","red")
    }
    if (moment().hour() > 16) {
        $('.plan7').css("background-color","gray")
    }
    if (moment().hour() < 16) {
        $('.plan7').css("background-color","green")
    }
    if (moment().hour() === 17) {
        $('.plan8').css("background-color","red")
    }
    if (moment().hour() > 17) {
        $('.plan8').css("background-color","gray")
    }
    if (moment().hour() < 17) {
        $('.plan8').css("background-color","green")
    }
    
});