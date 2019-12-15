console.log('HAVANA EN BELGRADO 10')

// DATE AND TIME

var current = setInterval(function () {

    var now, days, hours, minutes, seconds, countDownDate, distance;
    // Get countdown date
    var countDownDate = new Date("Nov 7, 2020 21:00:00").getTime();

    // Get today's date and time
    now = new Date().getTime();

    // Find the distance between now and the count down date
    distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.brojj_day').textContent = days;
    document.querySelector('.brojj_hour').textContent = hours;
    document.querySelector('.brojj_minute').textContent = minutes;
    document.querySelector('.brojj_sec').textContent = seconds;

}, 100);



var responsive = setInterval(function () {

    var artists = document.querySelector('.artists');
    var vreme = document.querySelector('.vremee');
    var afterm = document.querySelector('.elnino');
    // var news = document.querySelector('.news');

    if (window.innerWidth < 768) {
        artists.style.width = "90%";
        vreme.style.display = "none";
        afterm.style.width = "90%";
        // news.style.width = "90%";

    } else if (window.innerWidth >= 768) {
        artists.style.width = "55%"
        artists.style.height = "400px";
        vreme.style.display = "block";
        afterm.style.width = "55%";
        // news.style.width = "90%";
    }
    console.log(artists.style.width);

}, 50);




