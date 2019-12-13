$(document).ready(function () {
    var titleDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var savedEvents = JSON.parse(localStorage.getItem("events"));
    var planText0, planText1, planText2, planText3, planText4, planText5, planText6, planText7, planText8 = '';
    for (var i = 0; i < savedEvents.length; i++) {
        $("#" + i + "plan").val(savedEvents[i]);
    }
    
    $('#title').append(titleDate);
    // shading logic...
    if (moment().hour() === 9) {
        $('.plan0').css("background-color","red")
    }
    if (moment().hour() > 9) {
        $('.plan0').css("background-color","gray", "overflow", "hidden")
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
    $('.save-btn').click(saveEvent);
    function saveEvent(e) {
        var btnClicked = e.target.id;
        console.log(btnClicked)
        var eventTemp = '';
        if (btnClicked === '0btn') {
            eventTemp = $("#0plan").val()
            planText0 = eventTemp;
            savedEvents[0] = planText0;
        }
        if (btnClicked === '1btn') {
            eventTemp = $("#1plan").val()
            planText1 = eventTemp;
            savedEvents[1] = planText1;
        }
        if (btnClicked === '2btn') {
            eventTemp = $("#2plan").val()
            planText2 = eventTemp;
            savedEvents[2] = planText2;
        }
        if (btnClicked === '3btn') {
            eventTemp = $("#3plan").val()
            planText3 = eventTemp;
            savedEvents[3] = planText3;
        }
        if (btnClicked === '4btn') {
            eventTemp = $("#4plan").val()
            planText4 = eventTemp;
            savedEvents[4] = planText4;
        }
        if (btnClicked === '5btn') {
            eventTemp = $("#5plan").val()
            planText5 = eventTemp;
            savedEvents[5] = planText5;
        }
        if (btnClicked === '6btn') {
            eventTemp = $("#6plan").val()
            planText6 = eventTemp;
            savedEvents[6] = planText6;
        }
        if (btnClicked === '7btn') {
            eventTemp = $("#7plan").val()
            planText7 = eventTemp;
            savedEvents[7] = planText7;
        }
        if (btnClicked === '8btn') {
            eventTemp = $("#8plan").val()
            planText8 = eventTemp;
            savedEvents[8] = planText8;
        }
        localStorage.setItem("events", JSON.stringify(savedEvents));
    }
});