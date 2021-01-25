var pattern = /[,]/; // 「/」,「-」,「.」を区切って年月日に分割するコード。
let unit1_en =
    "effort,dawn,supply,grade,instrument,means,rate,subject,access,glance,surrender,profession,architecture,condition,habit,trouble,funeral,dialogue,shorage,stuff,divorce,diet,instruction,flavor,nap,majority,role,medicine,finance,fortune,incident,affair,appetite,trash,politics,count,display,taste,prepare,add,feed,consume,reduce,communicate,estimate,last,seize,decorate,range,rent,sew,exclaim,stare,decay,possess,lie,cheer,wipe,wonder,purchase,pour,spill,rise,hang,store,postpone,inform,fix,reply,protect,domestic,inevitable,likely,distinct,familiar,annual,alive,alike,convenient,adequate,slight,bare,loose,frequent,vain,private,accustomed,spare,rough,precious,distant,worth,available,casual,conscious,exact,sufficient,further,ordinay,eager";
let unit1_ja =
    "努力,夜明け,供給,等級,道具,手段,割合,主題,接近方法,一見,引き渡し,職業,建築,状況,習慣,心配,葬式,対話,不足,物,離婚,飲食物,指示,風味,うたた寝,大多数,役割,薬,財政,運,出来事,事柄,食欲,ごみ,政治,〜を数える,〜を展示する,〜を味わう,〜の用意をする,〜を(…に)加える,〜に食べ物(えさ)を与える,消費する,減らす,〜を伝達する,〜を見積もる,続く,〜を(急に、強く)つかむ,〜を飾る,及んでいる,〜を賃借りする,〜を縫う,叫ぶ,じっと見つめる,腐る,〜を持つ,横たわる,〜を励ます,〜をふく,〜かなと思う,〜を購入する,〜をつぐ,〜をこぼす,上がる,〜をつるす,〜を蓄える,〜を延期する,〜に(...について)知らせる,〜を修理する,返事する,〜を保護する,家庭の,避けられない,ありそうな,異なった,よく知られた,年一回の,生きて,似ている,便利な,適した,わずかな,裸の,緩い,たびたび起こる,無駄な,私的な,慣れた,予備の,ざらざらした,高価な,遠い,勝ちがある,利用できる,打ち解けた,気づいている,正確な,十分な,さらなる,ありふれた,しきりに〜したがって";

let unit2_ja =
    "利益,料金,産業,相続人,大使,役人,遺産,内閣,境界,法人,結果,保証,保険,農業,年金,消臭は,民主主義,賃金,人口,条約,状況,目的,価値,労働組合,特許,候補者,共和国,割合,会議,軍隊,地域,危険,政治,税金,選挙,交渉,職務,会社,収入,費用,悪,借金,預金口座,合計,頂上,＝を(...しようと)試みる,〜をに(...を)警告する,〜を妨げる,〜の原因となる,〜に(...を)与える,〜を含む,〜を明らかにする,〜を(努力の結果)得る,〜を広げる,〜を提供,〜を取って代わる,〜を関係する,餓死する,〜を追う,〜を立証する,悲鳴を上げる,〜を(...と)見なす,〜を解雇する,投票する,〜を延期する,爆発する,〜を豊かにする,〜を発表する,〜を押しつぶす,〜を許す,〜を廃止する,逃げる,〜を確認する,〜を要求する,〜を設立する,公の,ふさわしい,第一位の,重大な,込み入った,市民の,目に見える,二者択一の,強烈な,逆の,経済の,恐ろしい,即座の,非常に小さい,当然支払われるべき,社会の,財政上の,裕福な,共通の,劣った,全体の,永続する,小さい方の,大きい方の,不明瞭な";
let unit2_en =
    "benefit,charge,industry,heir,ambassador,officer,legacy,cabinet,border,corporation,result,guarantee,insurance,agriculture,pension,minority,democracy,wage,population,treaty,situation,purpose,value,union,patent,candidate,republic,proportion,conference,military,region,hazard,administration,tax,election,negotiation,duty,firm,income,expense,vice,debt,account,sum,summit,attempt,warn,interrupt,cause,provide,involve,reveal,gain,spread,offer,replace,concern,starve,pursue,prove,scream,regard,dismiss,vote,extend,explode,enrich,announce,crush,permit,abolish,escape,confirm,demand,establish,official,proper,primary,significant,complicated,civil,visible,alternative,intense,reverse,economic,scary,immediate,minute,due,social,financial,wealthy,common,inferior,entire,permanent,minor,major,obscure";

let unit3_ja =
    "脅迫,善,緊張,感謝,暴力,論点,歓喜,見解,抗議,深い悲しみ,匂い,責任,教育,予報,感覚,同情,恥,衝動,本能,影響,〜を批評する,〜に賛成する,ためらう,〜を面白いと思わせる,〜をかき乱す,〜を困惑させる,〜を魅了する,〜であるらしいと思う,〜を褒める,〜を悟る,〜を拒絶する,〜を祝う,〜に責任を負わせる,〜だと思う,衰える,〜を引きつける,〜を推測する,〜に賛成する(〜を承認する),〜を大事にする,〜を驚かせる,〜を予言する,〜の感情を害する,顔を赤らめる,〜に(...)させてやる,〜を否定する,〜を刺激する,ため息をつく,〜を非難する,〜を侮辱する,〜を容赦する,〜に反対する,〜を予期する,〜を正しく理解する,(〜することを)を強く望む,に乗り損なう,〜を悩ませる,〜を想像する,(場所など)を突き止める,(〜の)不評を言う,〜を後悔する,間違いのない,受動的な,有能な,したがらない,いとわない,無関心な,頑固な,油断のない,誤った,論理にかなった,楽天主義の,必死の,驚くべき,一般的な,いらいらした,怖がる,確信している,ばかばかしい,冷酷な,前向きな,否定的な,正直な,思いやりがある,熱心な,厳しい,複合の,恐ろしい,失望した,耳を傾けない,巨大な,失礼な,好奇心が強い,控えめな,神経質な,本気の,気前の良い,不快な,分別のある,取り乱している,熱狂的な";
let unit3_en =
    "threat,virtue,tension,gratitude,violence,issue,delight,viewpoint,protest,grief,scent,responsibility,education,forecast,sensation,sympathy,shame,impulse,instince,impact,criticize,agree,hesitate,amuse,disturb,confuse,fascinate,suspect,praise,realize,reject,celebrate,blame,suppose,fade,attrace,guess,approve,cherish,astonish,predict,offend,blush,let,deny,stimulate,sigh,condemn,insult,excuse,oppose,expect,appreciate,desire,miss,annoy,imagine,locate,complain,regret,accurate,passive,efficient,reluctant,willing,indifferent,stubborn,alert,false,logical,optimistic,desperate,marvelous,general,irritated,scared,certain,silly,oruel,positive,negative,sincere,considerate,keen,strict,complex,terrible,disappointed,deaf,huge,rude,curious,modest,nervous,serious,generous,nasty,sensible,upset,enthusiastic";

// select_ja = select_ja.split(pattern);
// select_en = select_en.split(pattern);
// var select_en = select_en.split(pattern);
// var select_ja = select_ja.split(pattern);

let Jamusic;
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

let Enmusic;
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
const un_1 = document.querySelector(".un_1");
const un_2 = document.querySelector(".un_2");
const un_3 = document.querySelector(".un_3");
let select_en;
let select_ja;
un_1.addEventListener("click", () => {
    console.log("un_1");
    select_en = unit1_en;
    select_ja = unit1_ja;
    Enmusic = Enmusic_1;
    Jamusic = Jamusic_1;
});
un_2.addEventListener("click", () => {
    console.log("un_2");
    select_en = unit2_en;
    select_ja = unit2_ja;
    Enmusic = Enmusic_2;
    Jamusic = Jamusic_2;
});
un_3.addEventListener("click", () => {
    console.log("un_3");
    select_en = unit3_en;
    select_ja = unit3_ja;
    Enmusic = Enmusic_3;
    Jamusic = Jamusic_3;
});

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

const btn = document.querySelector("#start_button");
btn.addEventListener("click", () => {
    // mymusic.play();
    console.log("hey");
    three_random = Math.floor(Math.random() * 3 + 1);
    if (three_random == 1) {
        select_en = unit1_en;
        select_ja = unit1_ja;
        Enmusic = Enmusic_1;
        Jamusic = Jamusic_1;
    } else if (three_random == 2) {
        select_en = unit2_en;
        select_ja = unit2_ja;
        Enmusic = Enmusic_2;
        Jamusic = Jamusic_2;
    } else if (three_random == 3) {
        select_en = unit3_en;
        select_ja = unit3_ja;
        Enmusic = Enmusic_3;
        Jamusic = Jamusic_3;
    }
    select_ja = select_ja.split(pattern);
    select_en = select_en.split(pattern);
});
const notime_btn = document.querySelectorAll(".change");
// console.log(notime_btn);
notime_btn.forEach((exchange) => {
    exchange.addEventListener("click", () => {
        select_ja = select_ja.split(pattern);
        select_en = select_en.split(pattern);
        console.log("ok");
        notime = true;
        // console.log("trueにしたぞ" + notime)
    });
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
    notime_btn.forEach((exchange) => {
        exchange.style.visibility = "hidden";
    });
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
            count_time_limit.innerHTML = "全体の残り：" + time_remaining;
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
        } else if (select_ja.length === finish_list_size) {
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
        good.innerHTML = "";
        // console.log(mytime);
        if (char_num == select_en[random].length) {
            char_num = 0;
            word.innerHTML = "";
            select_en.splice(random, 1);
            select_ja.splice(random, 1);
            Jamusic.splice(random, 1);
            Enmusic.splice(random, 1);
            console.log("yey2");
            // if (mytime > 2) {
            //     music_answer.play();
            // }
            good.innerHTML = "<h1 style='color: rgb(212, 181, 0);'>Good!!</h1>";
            english_score++;
            all_number++;
            clearInterval(mytimer);

            // english_score++;
            // all_number++;
            wordDisplay();
        } else if (mytime < 0) {
            console.log("sawao3");
            all_number++;
            mistakelist.push(select_ja[random]);
            // count.innerHTML = "題" + (all_number + 1) + "問";
            clearInterval(mytimer);
            char_num = 0;
            word.innerHTML = "";
            select_en.splice(random, 1);
            select_ja.splice(random, 1);
            Jamusic.splice(random, 1);
            Enmusic.splice(random, 1);
            if (select_ja.length !== finish_list_size) {
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
                select_en[random].substr(0, char_num) +
                "</span>" +
                "<span style = 'color:red'>" +
                select_en[random].substr(char_num, select_en[random].length) +
                "</span>";
            console.log("後ろの" + mytime);
            console.log("終了");
        } else if (mytime == 2) {
            // console.log("music");
            var music_answer = new Audio(Enmusic[random]);
            music_answer.play();
        }
    }, 1000);

    if (select_ja.length !== finish_list_size) {
        random = Math.floor(Math.random() * select_en.length);
        // word.innerHTML = select_en[random];
        var music = new Audio(Jamusic[random]);
        music.play();
        japanese.innerHTML =
            select_ja[random] +
            "(" +
            "<span style='color: red;'>" +
            select_en[random].length +
            "</span>" +
            "語)";
        charInsort();
    } else {
        japanese.innerHTML = "集計中…………";
    }
}
function charInsort() {
    word_char = select_en[random].charAt(char_num);
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
    // mistakes.innerHTML = mistakelist;
    start_button.style.display = "none";
    notime_btn.forEach((exchange) => {
        exchange.style.display = "none";
    });
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
            select_en[random].substr(0, char_num + 1) +
            "</span>";
        // select_en[random].substr(char_num + 1, select_en[random].length);
        japanese.innerHTML =
            select_ja[random] +
            "(" +
            "<span style='color: red;'>" +
            select_en[random].substr(char_num + 1, select_en[random].length)
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
    // if (char_num == select_en[random].length) {
    //     char_num = 0;
    //     word.innerHTML = "";
    //     select_en.splice(random, 1);
    //     select_ja.splice(random, 1);
    //     console.log("yey2");
    //     wordDisplay();
    // }
};
