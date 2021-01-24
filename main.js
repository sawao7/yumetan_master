var pattern = /[,]/; // 「/」,「-」,「.」を区切って年月日に分割するコード。
const myenglish_words =
    "effort,dawn,supply,grade,instrument,means,rate,subject,access,glance,surrender,profession,architecture,condition,habit,trouble,funeral,dialogue,shorage,stuff,divorce,diet,instruction,flavor,nap,majority,role,medicine,finance,fortune,incident,affair,appetite,trash,politics,count,display,taste,prepare,add,feed,consume,reduce,communicate,estimate,last,seize,decorate,range,rent,sew,exclaim,stare,decay,possess,lie,cheer,wipe,wonder,purchase,pour,spill,rise,hang,store,postpone,inform,fix,reply,protect,domestic,inevitable,likely,distinct,familiar,annual,alive,alike,convenient,adequate,slight,bare,loose,frequent,vain,private,accustomed,spare,rough,precious,distant,worth,available,casual,conscious,exact,sufficient,further,ordinay,eager";
const myjapanese_words =
    "努力,夜明け,供給,等級,道具,手段,割合,主題,接近方法,一見,引き渡し,職業,建築,状況,習慣,心配,葬式,対話,不足,物,離婚,飲食物,指示,風味,うたた寝,大多数,役割,薬,財政,運,出来事,事柄,食欲,ごみ,政治,〜を数える,〜を展示する,〜を味わう,〜の用意をする,〜を(…に)加える,〜に食べ物(えさ)を与える,消費する,減らす,〜を伝達する,〜を見積もる,続く,〜を(急に、強く)つかむ,〜を飾る,及んでいる,〜を賃借りする,〜を縫う,叫ぶ,じっと見つめる,腐る,〜を持つ,横たわる,〜を励ます,〜をふく,〜かなと思う,〜を購入する,〜をつぐ,〜をこぼす,上がる,〜をつるす,〜を蓄える,〜を延期する,〜に(...について)知らせる,〜を修理する,返事する,〜を保護する,家庭の,避けられない,ありそうな,異なった,よく知られた,年一回の,生きて,似ている,便利な,適した,わずかな,裸の,緩い,たびたび起こる,無駄な,私的な,慣れた,予備の,ざらざらした,高価な,遠い,勝ちがある,利用できる,打ち解けた,気づいている,正確な,十分な,さらなる,ありふれた,しきりに〜したがって";
var wordlist = myenglish_words.split(pattern);
var wordlistJapanese = myjapanese_words.split(pattern);

let Jamusic_1 = [];
let Jamusic_2 = [];
let Jamusic_3 = [];
let a = 1;
let y = 0;
let x;
for (let b = 1; b < 301; b++) {
    // console.log(a,b);
    if (a < 10) {
        x = "https://yumetanweb.alc.co.jp/audio/2/A0" + a + "_" + b + "_1.mp3";
        if (a < 5) {
            Jamusic_1.push(x);
        } else {
            Jamusic_2.push(x);
        }
    } else {
        x = "https://yumetanweb.alc.co.jp/audio/2/A" + a + "_" + b + "_1.mp3";
        if (b < 201) {
            Jamusic_2.push(x);
        } else if (b < 301) {
            Jamusic_3.push(x);
        }
    }
    if (b % 25 === 0) {
        a++;
        y = 0;
    }
    if ((a - 1) % 4 === 0 && a !== 1 && y === 0) {
        y++;
        a += 4;
    }
}

let Enmusic_1 = [];
let Enmusic_2 = [];
let Enmusic_3 = [];
let a2 = 1;
let y2 = 0;
let x2;
for (let b = 1; b < 301; b++) {
    // console.log(a2,b);
    if (a2 < 10) {
        x2 =
            "https://yumetanweb.alc.co.jp/audio/2/A0" + a2 + "_" + b + "_2.mp3";
        if (a2 < 5) {
            Enmusic_1.push(x2);
        } else {
            Enmusic_2.push(x2);
        }
    } else {
        x2 = "https://yumetanweb.alc.co.jp/audio/2/A" + a2 + "_" + b + "_2.mp3";
        if (b < 201) {
            Enmusic_2.push(x2);
        } else if (b < 301) {
            Enmusic_3.push(x2);
        }
    }
    if (b % 25 === 0) {
        a2++;
        y2 = 0;
    }
    if ((a2 - 1) % 4 === 0 && a2 !== 1 && y2 === 0) {
        y2++;
        a2 += 4;
    }
}
// var Enmusic_1 = [];
// for (let n = 1; n < 101; n++) {
//     var a = "https://yumetanweb.alc.co.jp/audio/2/A01_" + n + "_2.mp3";
//     Enmusic_1.push(a);
// }

var mistakelist = [];
var time_limit = 60;
var readytime = 3;
var score;
var correct;
var mistake;
var char_num = 0;
var word_char;
var random;
var english_score = 0;
var myfinish = 1;
var all_number = 0;
var my_time = 5;
var notime = false;

//リストの単語数が〇〇になったら終了する
var finish_list_size = 0;
var mymusic = new Audio(
    "https://soundeffect-lab.info/sound/anime/mp3/electronic-countdown1.mp3"
);

// const btn = document.querySelector("#start_button");
// btn.addEventListener("click", () => {
//     mymusic.play();
// });
const notime_btn = document.querySelector("#change_time");
notime_btn.addEventListener("click", () => {
    notime = true;
    // console.log("trueにしたぞ" + notime)
});
function ready() {
    // console.log("まだfalseだぞ "+ notime);
    // var music = new Audio("https://yumetanweb.alc.co.jp/audio/2/A01_1_1.mp3");
    // music.play();
    // var music = new Audio("https://yumetanweb.alc.co.jp/audio/2/A01_1_1.mp3");
    // music.play();
    readytime = 3;
    scoredis.innerHTML = "";
    start_button.style.visibility = "hidden";
    change_time.style.visibility = "hidden";
    mistake_again.style.display = "none";
    var readytimer = setInterval(function () {
        count.innerHTML = readytime;
        readytime--;
        if (readytime < 0) {
            count.innerHTML = "題" + (all_number + 1) + "問";
            clearInterval(readytimer);
            gameStart();
        }
    }, 1000);
}
function gameStart() {
    // console.log("ここfalseじゃまずいでしょ"+notime);
    mymusic.pause();
    score = 0.0;
    mistake = 0;
    correct = 0;
    wordDisplay();
    if (notime == false) {
        var time_remaining = time_limit;
        var gametimer = setInterval(function () {
            // count.innerHTML = "残り時間：" + time_remaining;
            time_remaining--;
            if (time_remaining <= 0) {
                myfinish = 0;
                clearInterval(gametimer);
            }
        }, 1000);
    }
}
function wordDisplay() {
    // var time_remaining = time_limit;
    // var gametimer = setInterval(function () {
    //     // count.innerHTML = "残り時間：" + time_remaining;
    //     time_remaining--;
    //     if (time_remaining <= 0) {
    //         clearInterval(gametimer);
    //         finish();
    //     }
    // }, 1000);

    var mytime = my_time + 1;
    var mytimer = setInterval(function () {
        if (myfinish === 0) {
            clearInterval(mytimer);
            console.log("finish_log");
            finish();
            mytime = null;
        } else if (wordlistJapanese.length === finish_list_size) {
            clearInterval(mytimer);
            finish();
            mytime = null;
            console.log("why1");
        } else {
            // console.log("why");
            console.log(mytime);
            mytime--;
            if (mytime !== -1) {
                count.innerHTML = "残り時間" + mytime;
            } else {
                count.innerHTML = "<h1>お疲れ様!!</h1>";
            }
        }
        // console.log(mytime);
        if (char_num == wordlist[random].length) {
            char_num = 0;
            word.innerHTML = "";
            wordlist.splice(random, 1);
            wordlistJapanese.splice(random, 1);
            Jamusic_1.splice(random, 1);
            Enmusic_1.splice(random, 1);
            console.log("yey2");
            count.innerHTML =
                "<h1 style='color: rgb(212, 181, 0);'>Good!!</h1>";
            clearInterval(mytimer);
            english_score++;
            all_number++;
            wordDisplay();
        } else if (mytime < 0) {
            console.log("sawao3");
            all_number++;
            mistakelist.push(wordlistJapanese[random]);
            // count.innerHTML = "題" + (all_number + 1) + "問";
            clearInterval(mytimer);
            char_num = 0;
            word.innerHTML = "";
            wordlist.splice(random, 1);
            wordlistJapanese.splice(random, 1);
            Jamusic_1.splice(random, 1);
            Enmusic_1.splice(random, 1);
            if (wordlistJapanese.length !== finish_list_size) {
                count.innerHTML = "題" + (all_number + 1) + "問";
            }
            // console.log("yey");
            wordDisplay();
            // testtime = 1;
            // var test = setInterval(function () {
            //     console.log(testtime + "これtest");
            //     testtime--;
            //     if (testtime == 0) {
            //         clearInterval(test);
            //         wordDisplay();
            //     }
            // },1000)
        } else if (mytime == 0) {
            count.innerHTML = "時間切れ";
            word.innerHTML =
                "<span style='color: black;'>" +
                wordlist[random].substr(0, char_num) +
                "</span>" +
                "<span style = 'color:red'>" +
                wordlist[random].substr(char_num, wordlist[random].length) +
                "</span>";
            console.log("後ろの" + mytime);
            console.log("終了");
        } else if (mytime == 2) {
            // console.log("music");
            var music_answer = new Audio(Enmusic_1[random]);
            music_answer.play();
        }
    }, 1000);

    if (wordlistJapanese.length !== finish_list_size) {
        random = Math.floor(Math.random() * wordlist.length);
        // word.innerHTML = wordlist[random];
        var music = new Audio(Jamusic_1[random]);
        music.play();
        japanese.innerHTML =
            wordlistJapanese[random] +
            "(" +
            "<span style='color: red;'>" +
            wordlist[random].length +
            "</span>" +
            "語)";
        charInsort();
    } else {
        japanese.innerHTML = "集計中…………";
    }
}
function charInsort() {
    word_char = wordlist[random].charAt(char_num);
    // console.log(char_num);
    // console.log(word_char);
}
function finish() {
    // score = Math.floor(
    //     Math.pow(correct, 2) * Math.pow(correct / (correct + mistake), 5)
    // );
    var total_score = ((english_score / all_number) * 100).toFixed(1);
    var message;
    if (total_score == 100) {
        message = "Congratulation!!";
    } else if (total_score >= 80) {
        message = "Great!!";
    } else if (total_score >= 60) {
        message = "Good!!";
    } else if (total_score >= 40) {
        message = "So so...";
    } else if (total_score >= 20) {
        message = "Good luck...";
    } else if (total_score >= 0) {
        message = "More Study...";
    }
    scoredis.innerHTML =
        "FINISH!! <span style = 'font-size:30px;font-weight:bold;color:red;'>" +
        message +
        "</span>" +
        "<h1>" +
        "あなたの正答率は..." +
        "<span style='font-size:40px;font-weight:bold;'>" +
        total_score +
        "%" +
        "</span>" +
        " です" +
        "</h1>" +
        "<span style = 'font-weight:bold;'>正解数 : </span>" +
        "<span style='font-size:40px;font-weight:bold;color:red;'>" +
        english_score +
        "</span>" +
        "<hr>" +
        "<span style = 'font-weight:bold;'>間違えた問題 : </span>" +
        "<span style = 'font-weight:bold;color:red;'>" +
        mistakelist +
        "</span>";
    // " 点" +
    // "<hr>正タイプ数:" +
    // correct +
    // "<br>ミスタイプ数:" +
    // mistake +
    // "<br>正答率" +
    // ((correct / (correct + mistake)) * 100).toFixed(1) +
    // "%";
    count.style.display = "none";
    // console.log("heloo");
    word.innerHTML = "";
    japanese.innerHTML = "";
    mistakes.innerHTML = mistakelist;
    start_button.style.display = "none";
    change_time.style.display = "none";
    mistake_again.style.display = "inline";
    word_char = 0;
    random = 0;
    char_num = 0;
}
document.onkeydown = function (e) {
    if (e.keyCode == 189) {
        keyStr = "-";
    } else if (e.keyCode == 188) {
        keyStr = ",";
    } else {
        var keyStr = String.fromCharCode(e.keyCode);
        keyStr = keyStr.toLowerCase();
    }
    if (keyStr == word_char) {
        // document.getElementById("missaudio").pause();
        // document.getElementById("missaudio").currentTime = 0;
        // document.getElementById("correctaudio").pause();
        // document.getElementById("correctaudio").currentTime = 0;
        // document.getElementById("correctaudio").play();
        word.innerHTML =
            "<span style='color: black;'>" +
            wordlist[random].substr(0, char_num + 1) +
            "</span>";
        // wordlist[random].substr(char_num + 1, wordlist[random].length);
        japanese.innerHTML =
            wordlistJapanese[random] +
            "(" +
            "<span style='color: red;'>" +
            wordlist[random].substr(char_num + 1, wordlist[random].length)
                .length +
            "</span>" +
            "語)";
        char_num++;
        correct++;
        charInsort();
    } else {
        // document.getElementById("missaudio").pause();
        // document.getElementById("missaudio").currentTime = 0;
        // document.getElementById("correctaudio").pause();
        // document.getElementById("correctaudio").currentTime = 0;
        mistake++;
        // document.getElementById("missaudio").play();
    }
    // if (char_num == wordlist[random].length) {
    //     char_num = 0;
    //     word.innerHTML = "";
    //     wordlist.splice(random, 1);
    //     wordlistJapanese.splice(random, 1);
    //     console.log("yey2");
    //     wordDisplay();
    // }
};
