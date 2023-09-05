// let window_obj = window;
// console.log(window_obj);
// window_obj.setOpacity(0.5);


// ---STEP.0   HTML の 要素を作る----------------------------------------
//             マス（square） 100個分の "<div>" "<p>" "<img>"を作る-------
//             class属性を付与、id属性を連番で付与する

genesis();
function genesis() {
    for (let i = 0; i < 100; i++) {

        const newDivs = document.createElement("div");
        newDivs.classList.add("square");
        newDivs.setAttribute("id", "squares" + (i));

        const newP = document.createElement("p");
        newP.classList.add("para");
        newP.setAttribute("id", "para" + (i));
        // newP.textContent = "●";

        const newImg = document.createElement("img");
        newImg.classList.add("img");
        newImg.setAttribute("id", "img" + (i));
        // newImg.src = "/images/white.png"; // 画像パス

        document.querySelector("#board").append(newDivs);
        newDivs.appendChild(newP);
        newDivs.appendChild(newImg);

    }
}


// ---STEP.1   グローバルスコープの定数・配列・関数置き場---------------------

// ---STEP.1.1 part1  マス100個 のブラウザ表示用『arraySquare』配列風を作る（１次元配列） 
// ---STEP.1.1 part2  削除
// ---STEP.1.1 part3  100個(10×10)が入った ２次元配列 に挑戦する 
// 配列風な『likeArraySquare』を Array.from( ) メソッドで配列『realArraySquare』にする。
const likeArraySquare = document.querySelectorAll(".square");
const realArraySquare = Array.from(likeArraySquare);
// console.log(Array.isArray(likeArraySquare)); // false
// console.log(Array.isArray(realArraySquare)); // true

const arraySquare2D = [];
for (let i = 0; i < 10; i++) {
    arraySquare2D[i] = realArraySquare.slice(i * 10, (i + 1) * 10);
}
// console.table("arraySquare2Dの.table" + arraySquare2D);


// ---STEP.1.1.2 part1  マス100個 のテキスト表示用『arrayParagraph2D』配列を作る 

const likeArrayPara = document.querySelectorAll(".para");
const realArrayPara = Array.from(likeArrayPara);

const arrayPara2D = [];
for (let i = 0; i < 10; i++) {
    arrayPara2D[i] = realArrayPara.slice(i * 10, (i + 1) * 10);
}

// ---STEP.1.1.3 part1  マス100個 のimg表示用『arrayImg2D』配列を作る 

const likeArrayImg = document.querySelectorAll(".img");
const realArrayImg = Array.from(likeArrayImg);

const arrayImg2D = [];
for (let i = 0; i < 10; i++) {
    arrayImg2D[i] = realArrayImg.slice(i * 10, (i + 1) * 10);
}


// ---STEP.1.3 part1  （PC内の）管理用の記録配列『arrayRecord』を作る。要素数は100個。（１次元配列）  
// ---STEP.1.3 part2  （PC内の）管理用の記録配列『arrayRecord』を作る。2次元配列で作る
const arrayRecord = new Array(100).fill(0);
const arrayRecord2D = [];
for (let i = 0; i < 10; i++) {
    arrayRecord2D[i] = arrayRecord.slice(i * 10, (i + 1) * 10);
}

// ---STEP.1.4   棋譜（とクリック回数）を記録する配列gameRecord2D[]
const gameRecord2D = [];



// ---STEP.2   番兵さん を作る-------------------------------------------
// ---STEP.2.1 part1  番兵さん。手打ち感満載（１次元配列）
// ---STEP.2.1 part2  番兵さん。少し手打ち感を減らす（でも１次元配列）
// ---STEP.2.1 part3  番兵さん。2次元配列に挑戦する

const arrayOuter2D = [];//周辺

outerSide();
function outerSide() {

    const arrayOuterTop = [];// 上辺
    const arrayOuterRight = [];//右辺
    const arrayOuterBottom = [];//下辺
    const arrayOuterLeft = [];//左辺


    for (let i = 0; i < 9; i++) {
        arrayOuterTop.push(arraySquare2D[0][(1 * i)]);
        arrayOuterRight.push(arraySquare2D[1 * i][9]);
        arrayOuterBottom.push(arraySquare2D[9][9 - (1 * i)]);
        arrayOuterLeft.push(arraySquare2D[9 - (1 * i)][0]);
    }
    arrayOuter2D.push(arrayOuterTop);
    arrayOuter2D.push(arrayOuterRight);
    arrayOuter2D.push(arrayOuterBottom);
    arrayOuter2D.push(arrayOuterLeft);

    outer();
}

// ---STEP.2.2 番兵さんにclass="outer" 属性を付与する。
outer();
function outer() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 9; k++) {
            arrayOuter2D[i][k].classList.add("outer");
            // arrayOuter2D[i][k].textContent = "☆";
        }
    }
}
// console.table(arrayOuter2D);

// ---STEP.2.3  番兵さんに画像を付与する。。
// banpei();
function banpei() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 9; k++) {

            arrayOuter2D[i][k].textContent = "";

            if ((i + k) % 2 === 0) {
                let banpeiImage = "url(/images/banpei_you.png)";
                arrayOuter2D[i][k].style.backgroundImage = banpeiImage;
            } else if ((i + k) % 2 === 1) {
                let banpeiImage = "url(/images/banpei_wa.png)";
                arrayOuter2D[i][k].style.backgroundImage = banpeiImage;
            }
        }
    }
}


// ---STEP.3   盤面さん を作る---別紙参照---------------------------------


// ---STEP.4   全てのはじまり -------------------------------------------

window.onload = function () {
    initialization();       // STEP.5-1   盤面初期化
    drawing();              // STEP.6     スタートの盤面表示
    gameRecord(0, 0, 0);    // STEP.7     棋譜に0手目を入れる

    // particleDefault();      // STEP.      stage起動
    // p_commetL();

    gameControl();          // STEP.11    先手、後手を切り替えるattackerSwitch()につながる

    manClick();             // STEP.8     man vs pc の場合、人間（黒、先手）クリックできるようにする

    strategyPoint();   // STEP.15.1  盤面でのトータル『strategyPoint』を計算し、表示する
    score("b");             // STEP.15.2  得点表を更新
    notice("");             // STEP.15.3  お知らせを表示（消去）

}

// ---STEP.4.2 複数のjavascriptファイルを読み込むためにもう1回『onload』する

// document.addEventListener('DOMContentLoaded', function () {
// }, false)


// ---STEP.5   スタート前 盤面の初期化-------------------------------------
// ---STEP.5.1 （PC内の）管理用の記録配列『arrayRecord』にゲーム開始時の配置を入力する
//             真ん中に黒と白を置く。配置（値）は、黒は"b"、白は"w"、空白は"0" とする

// const blackImage = "url(/images/black.png)";
// const whiteImage = "url(/images/white.png)";
const blackImage = "/images/black.png";
const whiteImage = "/images/white.png";

function initialization() {

    arrayRecord2D[4][4] = "w";
    arrayRecord2D[4][5] = "b";
    arrayRecord2D[5][4] = "b";
    arrayRecord2D[5][5] = "w";

    arrayImg2D[4][4].src = whiteImage; // 画像パス
    arrayImg2D[4][5].src = blackImage;
    arrayImg2D[5][4].src = blackImage;
    arrayImg2D[5][5].src = whiteImage;


    // arrayRecord2D[1][2] = "w";
    // arrayRecord2D[1][3] = "b";
    // arrayRecord2D[2][2] = "b";
    // arrayRecord2D[2][3] = "w";
    // arrayRecord2D[2][4] = "w";

    // arrayImg2D[1][2].src = whiteImage;
    // arrayImg2D[1][3].src = blackImage;
    // arrayImg2D[2][2].src = blackImage;
    // arrayImg2D[2][3].src = whiteImage;
    // arrayImg2D[2][4].src = whiteImage;

}

// ---STEP.6---（PC内の）管理用の記録配列『arrayRecord』のスコアに合わせてブラウザ上の盤面を表示する


// ---STEP.7   棋譜用の配列『gameRecord2D』に座標(x,y)と打ち手(attacker)を記録する。


// ---STEP.8   先手（黒、人間）の番----------------------------------------
// ---STEP.8.1 置ける場所を探す。あるならクリック。ないならパス
// ---STEP.8.2 人間（先手、黒）が石を置く（クリックする）


// ---STEP.9   PC（白、黒）の番------------------------------------------

// ---STEP.10   PCの（評価関数）-----------------------------------------

// ---STEP.11   gameControl()--- 人間とPCとの間を取り持つ -----------------
// ---STEP.11.1 棋譜『gameRecord2D』を参考にゲーム終了か続行かを確認する。
// ---STEP.11.2 先手（黒、人間）、後手（白、PC）を切り替える


// ---STEP.12   ルール上、石が置けるか置けないかを確認する----------------------
// ---STEP.12.0 備忘録は別紙参照
// ---STEP.12.1 全方向（8方向）チェックするための準備をする
//    仮引数  (own, opponent)
//    先手（黒石）のときは（"b", "w"）で、後手（白石）のときは（"w", "b"）で、置けるか置けないかを判定する

function ableCheck(own, opponent) {

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            //         // 引数  (i, k, vertical, horizontal, own, opponent, reCount)
            //         // i と k は どの要素をクリックしたか
            //         // vertical は行（i） の移動   horizontal は列（k） の移動   
            //         // own は自軍を, opponent は敵軍を表す。"b"は黒, "w"は白
            //         // reCount は『再起』の回数をカウントする

            // （水平方向のチェック）
            checkLine(i, k, 0, +1, own, opponent, 1); // 右方向へ
            checkLine(i, k, 0, -1, own, opponent, 1); // 左方向
            // （垂直方向のチェック）
            checkLine(i, k, +1, 0, own, opponent, 1); // 下方向
            checkLine(i, k, -1, 0, own, opponent, 1); // 上方向
            // （斜め\\方向のチェック）
            checkLine(i, k, +1, +1, own, opponent, 1); // 右下方向
            checkLine(i, k, -1, -1, own, opponent, 1); // 左上方向
            // （斜め//方向のチェック）
            checkLine(i, k, +1, -1, own, opponent, 1); // 左下方向
            checkLine(i, k, -1, +1, own, opponent, 1); // 右上方向

        }
    }
}

// ---STEP.12.2 石が置ける全方向（8方向）をチェックする-------

//    引数  (i, k, vertical, horizontal, own, opponent, reCount)
function checkLine(i, k, vertical, horizontal, own, opponent, reCount) {

    if (arrayRecord2D[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {
        // console.log("if ( 石が置かれている   または   番兵さん ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("indexは" + (i) + (k) + "です);

    } else if (arrayRecord2D[i + vertical][k + horizontal] != opponent) {
        // console.log("if ( 隣接の石は相手の石でない。つまり自分の石が置かれているか、あるいは石が置かれていないか ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("隣接はのindexは" + (i + vertical) + (k + horizontal) + "です");

    } else {
        if (arrayRecord2D[i + (vertical * reCount)][k + (horizontal * reCount)] == opponent) {
            // console.log("if ( 隣接の石は相手の石である。) なので");
            // console.log("更にその隣も検索する");

            reCount = reCount + 1;
            // console.log("reCountは" + reCount);
            // console.log("更にその隣のindexは" + (i + (vertical * reCount)) + (k + (horizontal * reCount)) + "石は、 敵軍の石が置かれている");

            // console.log("再起する");
            // console.log("再起した。reCountは" + reCount);
            checkLine(i, k, vertical, horizontal, own, opponent, reCount);

        } else {
            // console.log("else { 更にその相手の最後の石の隣が、自身の石か、あるいは石が置かれていないか");
            //if (     隣接の石が相手の相手の石......ならば                )
            if (arrayRecord2D[i + (vertical * reCount)][k + (horizontal * reCount)] == own) {
                // console.log("if ( 相手の最後の石の隣が自身の石 ) ならば");
                // console.log("挟めるのでクリックできるようにする（ついでに背景色も変える）");
                // クリック出来るように("able")クラスを付与する
                arraySquare2D[i][k].classList.add("able");

                // console.log("人間のときだけ打てるところが分からないようにする");

                // if (own === "b") {

                //     arraySquare2D[i][k].style.color = "darkgreen";
                //     arraySquare2D[i][k].style.backgroundColor = "darkgreen";
                // } else if (own === "w") {

                // }



            } else {
                // console.log("else { 相手の最後の石の隣に石が置かれていない、つまり挟めない ) なので");
                // console.log("ルール上、石を置けない。クリックできないままにする");
                // console.log("最後は石がなかったか番兵さん　　　bagu???");
            }
        }
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
    }
}


// ---STEP.13   挟まれた石をひっくり返す-----------------------------------
// ---STEP.13.1 どの方向に幾つひっくり返せるか確認する

function checkFlip(i, k, own, opponent) {
    // 全方向（8方向）確認する
    // 黒石（"b", "w"）に、白石（"w", "b"）にひっくり返す

    // 引数  (i, k, vertical, horizontal, own, opponent, reCount)
    // （水平方向のチェック）
    flipStone(i, k, 0, +1, own, opponent, 1); // 右方向へ
    flipStone(i, k, 0, -1, own, opponent, 1); // 左方向
    // （垂直方向のチェック）
    flipStone(i, k, +1, 0, own, opponent, 1); // 下方向
    flipStone(i, k, -1, 0, own, opponent, 1); // 上方向
    // // （斜め方向のチェック）
    flipStone(i, k, +1, +1, own, opponent, 1); // 右下方向
    flipStone(i, k, -1, -1, own, opponent, 1); // 左上方向
    // // （斜め方向のチェック）
    flipStone(i, k, +1, -1, own, opponent, 1); // 左下方向
    flipStone(i, k, -1, +1, own, opponent, 1); // 右上方向

    // 記録用配列に、クリックしたところ（挟んだところではなくて）"自軍の色を" を記入する
    arrayRecord2D[i][k] = own;


    // -----------------------------------------------------------------------------

    if (own === "b") {

        arrayImg2D[i][k].src = blackImage; // 画像パス

    } else if (own === "w") {
        arrayImg2D[i][k].src = whiteImage;

    }

    // -----------------------------------------------------------------------------


}
// ---STEP.13.2 各方向（8方向をチェックし、挟んでいるところをひっくり返す）

function flipStone(i, k, vertical, horizontal, own, opponent, reCount) {

    if (arrayRecord2D[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {
        // console.log("if ( 石が置かれている   または   番兵さん ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("indexは" + (i) + (k) + "です);

        // console.log("第一検問");

        // console.log(arrayRecord2D[i][k]);
        // console.log(arraySquare2D[i][k].classList.contains("outer"));



    } else if (arrayRecord2D[i + vertical][k + horizontal] != opponent) {
        // console.log("if ( 隣接の石は相手の石でない。つまり自分の石が置かれているか、あるいは石が置かれていないか ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("隣接はのindexは" + (i + vertical) + (k + horizontal) + "です");

        // console.log("第二検問");

    } else {
        if (arrayRecord2D[i + (vertical * reCount)][k + (horizontal * reCount)] == opponent) {

            // console.log("第３検問");

            // console.log("if ( 隣接の石は相手の石である。) なので");
            // console.log("更にその隣も検索する");

            reCount = reCount + 1;
            // console.log("reCountは" + reCount);
            // console.log("更にその隣のindexは" + (i + (vertical * reCount)) + (k + (horizontal * reCount)) + "石は、 敵軍の石が置かれている");

            // console.log("再起する");
            // console.log("再起した。reCountは" + reCount);
            flipStone(i, k, vertical, horizontal, own, opponent, reCount);
        } else {
            // console.log("else { 更にその相手の最後の石の隣が、自身の石か、あるいは石が置かれていないか");

            if (arrayRecord2D[i + (vertical * reCount)][k + (horizontal * reCount)] == own) {
                // console.log("if ( 相手の最後の石の隣が自身の石 ) なので");
                // console.log("挟めるので再起した数の" + reCount + "の石をひっくり返す");

                for (let m = 1; m < reCount; m++) {
                    // console.log(reCount + "個の石をひっくり返すぞ");
                    arrayRecord2D[i + (vertical * m)][k + (horizontal * m)] = own;
                    console.log("隣接する石" + (i + (vertical * m)) + "" + (k + (horizontal * m)) + "の" + opponent + "を" + own + "にひっくり返す")


                    // 画像処理に移行する
                    flipImage(i, k, vertical, horizontal, own, opponent, reCount);

                }

            } else {
                // console.log("bug????????????????");
            }
        }
    }
}


// ---STEP.14   パスか確認する---石を置く場所がない場合はパスになる------------

function checkPass(attacker) {

    // console.log("自軍" + attacker + "の置ける場所が " + ArrayPass.length + "なのでパスする")
    console.log("自軍" + attacker + "の置ける場所が 0 なのでパスする")
    console.log("checkPass()にきたたたったたったたたああたたた");


    if (attacker === "b") {
        document.querySelector("#noticeBlack1").textContent = "";
        document.querySelector("#noticeBlack2").textContent = "黒の置くところがありません。パスになります。";
        document.querySelector("#scoreBlack1").style.border = "0px dashed black";
        document.querySelector("#scoreBlack5").style.border = "15px dashed white";
    } else if (attacker === "w") {
        document.querySelector("#noticeBlack4").textContent = "白の置くところがありません。パスになります。";
        document.querySelector("#noticeBlack5").textContent = "";
        document.querySelector("#scoreBlack1").style.border = "15px dashed black";
        document.querySelector("#scoreBlack5").style.border = "0px dashed white";
    }


    // 棋譜にパスを記録する
    gameRecord("Pa", "Su", attacker);
    // // 先手（黒）、後手（PC）を切り替える
    gameControl();

}


// ---STEP.15   掲示エリア-----------------------------------------------
// ---STEP.15.1.0 現時点の盤面でのトータル『strategyPoint』を計算する
// ---STEP.15.1.1 現時点のトータル『strategyPoint』を表示する
// ---STEP.15.2 現在の石の数を表示
// ---STEP.15.3 お知らせを表示（消す）


// ---STEP.16   勝敗を確かめる-------------------------------------------



// ---STEP.13   演出--- effect.js -----------------------------------------------------------------

// ---STEP.13.1 youwin()
// ---STEP.13.2 youlose()
// ---STEP.13.3 draw()


// ---STEP.14   演出(arraySquare[i][k] を透明にしていく)----------
// ---STEP.14.1 arraySquare[][]配列全てを透明にしていく
// ---STEP.14.2 ゲーム中に相手側の石を透過する
// ---STEP.14.3 arraySquare[][]配列で".black"または".white"だけを透明にしていく

//---PART.15---演出----------
// 『headLine1』関数↓　　　.outerを["せ", "ん", "て", "ん", "す", "が"]ぐるぐる廻る;





