// Play Audio
var lastNum;

function playAudio(){
    var currentNum = Math.floor(Math.random() * 28) + 1;
    if (lastNum != undefined)
    {
        var previousAudio = document.getElementById('audio' + lastNum);
        if (!previousAudio.paused)
        {
            previousAudio.pause();
        }
    }
    var currentAudio = document.getElementById('audio' + currentNum);
    currentAudio.play();
    lastNum = currentNum;
}

// Preload Images
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("img/sein0.jpg","img/sein1.jpg","img/sein2.jpg","img/sein3.jpg",
"img/sein4.jpg","img/sein5.jpg","img/sein6.jpg","img/sein7.jpg","img/sein8.jpg","img/sein9.jpg");

// Slideshow
var i=0;
var imghead=[
    "url(./img/sein0.jpg)",
    "url(./img/sein1.jpg)",
    "url(./img/sein2.jpg)",
    "url(./img/sein3.jpg)",
    "url(./img/sein4.jpg)",
    "url(./img/sein5.jpg)",
    "url(./img/sein6.jpg)",
    "url(./img/sein7.jpg)",
    "url(./img/sein8.jpg)",
    "url(./img/sein9.jpg)",
    ];

function slideimg() {
    setTimeout(function () {
        jQuery('.intro').css('background-image', imghead[i]);
        i++;
        if(i === imghead.length) {
            i=0;
        }
        slideimg();
    }, 8000);
}
slideimg();