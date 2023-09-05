// ---STEP.13.3 ひっくり返すのを画像で
function flipImage(i, k, vertical, horizontal, own, opponent, reCount) {

    // console.log(reCount + "個の絵をひっくり返すぞ絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵絵");
    // console.log("arrayRecord2D[" + i + "][" + k + "]は" + arrayRecord2D[i][k]);
    // console.log("ひっくり返す数は" + reCount);

    arrayPara2D[i][k].textContent = "";




    if (own === "b") {
        for (let m = 0; m < reCount + 1; m++) {

            // 石を置く画像
            arrayImg2D[i][k].style.marginTop = "-12px";
            arrayImg2D[i][k].src = blackImage;
            const fn0 = function () {
                arrayImg2D[i][k].style.marginTop = "8px";
            };
            setTimeout(fn0, 100);

            // 挟んだ石をひっくり返す画像
            const fn = function () {
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].src = blackImage;
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].style.marginTop = "-8px";
            };

            setTimeout(fn, m * 200);
            const fn2 = function () {
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].style.marginTop = "-8px";
            };
            setTimeout(fn2, m * 200);


            const fn3 = function () {
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].style.marginTop = "8px";
            };
            setTimeout(fn3, 100 + m * 200);



        }

    } else if (own === "w") {
        for (let m = 1; m < reCount + 1; m++) {


            // 石を置く画像
            arrayImg2D[i][k].style.marginTop = "-12px";
            arrayImg2D[i][k].src = whiteImage;
            const fn0 = function () {
                arrayImg2D[i][k].style.marginTop = "8px";
            };
            setTimeout(fn0, 100);


            const fn = function () {
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].src = whiteImage;
                // console.log("隣接する石" + (i + (vertical * m)) + "" + (k + (horizontal * m)) + "の" + opponent + "を" + own + "にひっくり返す")

                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].style.marginTop = "-8px";
            };

            setTimeout(fn, m * 200);
            const fn2 = function () {
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].style.marginTop = "-8px";
            };
            setTimeout(fn2, m * 200);


            const fn3 = function () {
                arrayImg2D[i + (vertical * m)][k + (horizontal * m)].style.marginTop = "8px";
            };
            setTimeout(fn3, 100 + m * 200);
        }
    }
}

// ---STEP.13   演出----------------------------------------------------------------------

// ---STEP.13.1 youwin()
// youwin();
function youwin() {
    document.querySelector("#main").style.backgroundImage = "url(/images/banpei_uk.png)";

    squaresOpacity(".black");

    setTimeout(youwin2, 10000);

    function youwin2() {
        headLine1(["黒", "の", "か", "ち", "で", "す", ""]);
    }
}

// ---STEP.13.2 youlose()
// youlose();
function youlose() {
    document.querySelector("#main").backgroundImage.style = "url(/images/banpei_wa.png)";

    squaresOpacity(".white");

    setTimeout(youlose2, 10000);

    function youlose2() {
        headLine1(["白", "の", "か", "ち", "で", "す", ""]);
    }
}

// ---STEP.13.3 draw()
// draw();
function draw() {

    squaresOpacity(".square");

}



// ---STEP.14   演出(arraySquare[i][k] を透明にしていく)----------
// ---STEP.14 part.1---arraySquare[][]配列全てを透明にしていく

// squaresOpacity();
// function squaresOpacity() {
//     // ここから↓が100回（i < 100）forループ
//     for (let i = 0; i < 10; i++) {
//         for (let k = 0; k < 10; k++) {
//             let counter = 0;

//             //          ここから↓が99回（counter > 99）100m秒毎に繰り返される
//             const timerId = setInterval(
//                 function () {
//                     arraySquare2D[i][k].style.opacity = 1.0 - (0.01 * counter);
//                     counter++;
//                     // console.log("カウンター" + counter);
//                     if (counter > 99) {
//                         clearInterval(timerId)
//                         // console.log("clearIntervalが実行されました")
//                     }
//                 }
//                 , 100)
//             //           ここまで↑が99回（counter > 99）100m秒毎に繰り返される
//         }
//     }
//     // ここまで↑が100回（i < 100）forループ
// }



// ---STEP.14.2---ゲーム中に相手側の石を透過する----------

// gameOpacity(".black",".white","url(/images/banpei_you.png)")

function gameOpacity(ownClass, opponentClass, image) {

    // document.querySelector("#main").style.backgroundImage = image;

    const targeArrayOwn = document.querySelectorAll(ownClass);
    const targeArrayOpponent = document.querySelectorAll(opponentClass);
    for (let i = 0; i < targeArrayOwn.length; i++) {
        // console.log(targeArrayOwn.length + "回目");
        // targeArrayOwn[i].style.opacity = 0.60;
        targeArrayOwn[i].style.opacity = 1.0;
        // console.log("カウンター" + counter);
    }
    for (let i = 0; i < targeArrayOpponent.length; i++) {
        // console.log(targeArrayOpponent.length + "回目");
        targeArrayOpponent[i].style.opacity = 1.0;
        // console.log("カウンター" + counter);
    }
}



// ---STEP.14.3---arraySquare[][]配列で".black"または".white"だけを透明にしていく

// function squaresOpacity(".black") {
function squaresOpacity(color) {

    const targeArray = document.querySelectorAll(color);
    console.log("透過する石の配列" + targeArray);
    console.log("透過する石の数" + targeArray.length);

    // const targeArray = document.querySelectorAll(color);

    // ここから↓が石の数だけ（i < targeArray.length）forループ
    for (let i = 0; i < targeArray.length; i++) {

        let counter = 0;
        console.log("ループに入りました" + targeArray.length + "回目");

        //          ここから↓が99回（counter > 99）100m秒毎に繰り返される
        const timerId = setInterval(
            function () {
                targeArray[i].style.opacity = 1.0 - ((1 / targeArray.length) * counter);
                counter++;
                // console.log("カウンター" + counter);
                if (counter > targeArray.length) {
                    clearInterval(timerId)
                    console.log("clearIntervalが実行されました")
                }
            }
            , (10000 / targeArray.length))
        //           ここまで↑が(counter > targeArray.length)回、(10000 / targeArray.length)秒毎に繰り返される
        //           targeArray.lengthの数値がいくらであろうと、10000ms(10秒)で終わる
    }
    // ここまで↑が石の数だけ（i < targeArray.length）forループ
}

//---PART.15---演出----------
// 『headLine1』関数↓　　　.outerを["せ", "ん", "て", "ん", "す", "が"]ぐるぐる廻る;

function headLine1(sentence) {

    const array = sentence;
    const arrayBackColor = ["red", "pink", "aquamarine", "yellow", "powderblue"];
    const arrayColor = ["yellow", "powderblue", "red", "pink", "aquamarine"];
    let counter = 0

    const timerId = setInterval(
        function () {

            const i = (Math.floor(counter / 9)) % 4;
            const k = counter % 9;
            const m = counter % 7;
            const r = counter % 5;

            arrayOuter2D[i][k].style.opacity = 0.0 + (0.006 * counter);
            arrayOuter2D[i][k].textContent = array[m];
            arrayOuter2D[i][k].style.backgroundColor = arrayBackColor[r];
            arrayOuter2D[i][k].style.color = arrayColor[r];

            console.log("カウンター" + counter);
            counter++;

            if (counter > 180) {
                clearInterval(timerId)
            }
        }, 150)
}



