$(document).ready(function(){
    // var ClockHour = document.getElementById('clock_hour');
    // var ClockMinute = document.getElementById('clock_minute');
    // var ClockSecond = document.getElementById('clock_second');
    // var lastDate = [];
    // const date = new Date();
    // lastDate['H'] = date.getHours();
    // lastDate['M'] = date.getMinutes();
    // lastDate['S'] = date.getSeconds();

    

    // function newNumber(elem, num){
    //     if(elem){
    //         elem.classList.add('clock_item--active');

    //         setTimeout(function(){
    //             elem.classList.remove('clock_item--active');
    //             if(num >= 10){
    //                 elem.innerHTML = num;
    //             }else{
    //                 elem.innerHTML = '0' + num;
    //             }
    //         }, 200);
            
    //     }
    // }

    // newNumber(ClockHour, lastDate['H']);
    // newNumber(ClockMinute, lastDate['M']);
    // newNumber(ClockSecond, lastDate['S']);

    // setInterval(function(){
    //     const date = new Date();
    //     if(lastDate['H'] != date.getHours()){
    //         lastDate['H'] = date.getHours();
    //         newNumber(ClockHour, lastDate['H']);
    //     }
    //     if(lastDate['M'] != date.getMinutes()){
    //         lastDate['M'] = date.getMinutes();
    //         newNumber(ClockMinute, lastDate['M']);
    //     }
    //     if(lastDate['S'] != date.getSeconds()){
    //         lastDate['S'] = date.getSeconds();
    //         newNumber(ClockSecond, lastDate['S']);
    //     }
    // })

    function newNumber(elem, num){
        if(elem){
            elem.classList.add('clock_item--active');

            setTimeout(function(){
                elem.classList.remove('clock_item--active');
                if(num >= 10){
                    elem.innerHTML = num;
                }else{
                    elem.innerHTML = '0' + num;
                }
            }, 200);
            
        }
    }

    var ClockHour = document.getElementById('clock_hour');
    var ClockMinute = document.getElementById('clock_minute');
    var ClockSecond = document.getElementById('clock_second');

    var countDownDate = new Date("Feb 6, 2023 15:09:00").getTime();
    // var countDownDate = new Date("Jan 21, 2023 23:59:59").getTime();
    var NewYear = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        newNumber(ClockHour, hours);
        newNumber(ClockMinute, minutes);
        newNumber(ClockSecond, seconds);
        if (distance < 0) {
            clearInterval(NewYear);
            document.getElementById("remove").remove();
            document.getElementById("clock").innerHTML = "55KMT - Happy New Year!";
        }
    }, 1000);
});