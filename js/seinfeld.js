var curImg = 0;
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


//Solution 1
// function pageLoad() {
//     //slideShow(curImg, 3000);
// }

// function slideShow(curImg, duration){
//     var imgArray = ['sein0','sein1','sein2','sein3','sein4','sein5','sein6','sein7','sein8','sein9'];
//     setTimeout(function(){
//         $($(".intro")[0]).css("background-image","url(./img/" + imgArray[curImg] + ".jpg)");
//         // currImg++;
//         // $($(".intro2")[0]).css("background-image","url(./img/" + imgArray[curImg] + ".jpg)");
//         slideShow(curImg, duration);
//     }, duration);
//     curImg++;
//     if (curImg == imgArray.length) {
//         curImg = 0;
//     }
// }

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