// ---STEP.9   PC（白、黒）の番------------------------------------------
// ---STEP.9.1 置ける場所を探す。あるならクリック。ないならパス
//             ルール上、石を置けない所はクリックできない。同じ場所には２度クリックできない。

function pcSide() {
    console.log("白(後手、PC)のコンピュータタタタタタッタタッタタタッタタタタタタタｔ");

    // 黒（先手、人間）がクリックしたらまずは、白（後手、PC）へのチェックが入る前に
    // 配列okeru2D[][]の要素を全削除
    okeru2D.splice(0)
    console.log("配列okeru2Dの要素を全削除" + okeru2D);

    // 後手（白軍、PC）が置くことが可能なマスを調べる
    ableCheck("w", "b");

    // 後手（白、PC）の置くところを確認する
    // もし置くところがなければPCはパスの処理をする
    const ArrayPass = document.querySelectorAll(".able");

    if (ArrayPass.length == 0) {
        console.log("置くところがないのでPCはパスの処理をする");
        checkPass("w");
    } else if (ArrayPass.length > 0) {
        // もし置くところがあればpcClick()の処理をする
        console.log("置くところがあるのでpcClick()へ");

        // greyMatter()にいく
        greyMatter();

        // setTimeout(pcClick, 1700);
        setTimeout(pcClick, 2000);
    }
}


// ---STEP.9.2 PC（後手、白）が石を置く

function pcClick() {
    console.log("PC ・ ・ ・ ・ ・ ・ 考 ・ ・ ・ ・ ・ ・ え ・ ・ ・ ・ ・ ・ 中");

    // どこに白石を置くか考える
    // algorithm1(); // 配列okeru2D[]に座標(x,y)とreturnされたトータル(strategyPoint)を記録する
    // algorithm2(); // （仮に）その座標に白石を置いた場合のトータル『strategyPoint』を計算し、returnする
    // ↑の結果に従って白石を置く

    algorithm3(); // okeru2D[]の"strategyPoint"を降順でソートする

    algorithm4(); // okeru2D[]のstrategyPointをcumulativeSum2D[]に累積していく

    algorithm5(); // どの座標(x,y)に白石を置くか決定してPC側のクリックをする

    // gameRecord(x, y, "w");                   // algorithm5()で済み
    // arrayPara2D[x][y].textContent = "●";  // algorithm5()で済み
    // checkFlip(x, y, "w", "b");               // algorithm5()で済み

    drawing();

    // 得点表を更新
    // console.log("score(b);に行きます");
    score("b");

    // お知らせを消す
    notice("");

    // totalStrategyPoint表を更新
    strategyPoint();

    // console.log("gameControl();に行くはず？");
    gameControl();

}




// ---STEP.23   トータル『strategyPoint』
// ---STEP.24.3   okeru2D[]の"strategyPoint"を降順でソートする---

function algorithm3() {
    console.log("algorithm3333333");

    // okeru2D = [[i, k, strategyPoint],[],[]]
    // index[0]にはx、index[1]にはy、index[2]にはstrategyPointが

    console.log("ソート前は" + okeru2D);
    okeru2D.sort(function (a, b) {
        // return a - b; // 昇順
        // return b - a; // 降順
        // return a[2] - b[2]; // 二次元配列の昇順
        return b[2] - a[2]; // 二次元配列の降順
        // 二次元配列の場合のソートはindex[2]基準にsortしたければreturnするデータのindexを指定する        
    });

    console.log("降順された" + okeru2D);

}


// ---STEP.24.4   okeru2D[]のstrategyPointをcumulativeSum2D[]に累積していく---
function algorithm4() {
    console.log("algorithm44444444444444444444");

    // const cumulativeSum1D = [];   // okeru2D[] の strategyPointを累積するための一時的な箱
    // const cumulativeSum2D = [];   // okeru2D[] の strategyPointを累積和し直した配列

    // console.log("okeru2D[0][2]の" + okeru2D[0][2]); // ←置けるところが1つ未満になるとエラーになる
    // console.log("okeru2D[1][2]の" + okeru2D[1][2]); // ←置けるところが2つ未満になるとエラーになる
    // console.log("okeru2D[2][2]の" + okeru2D[2][2]); // ←置けるところが3つ未満になるとエラーになる


    cumulativeSum1D.splice(0)
    cumulativeSum2D.splice(0)
    // console.log("配列cumulativeSum1Dの要素を全削除" + cumulativeSum1D);
    // console.log("配列cumulativeSum2Dの要素を全削除" + cumulativeSum2D);



    for (let i = 0; i < okeru2D.length; i++) {


        cumulativeSum1D[0] = 0;   // okeru2D[0]のstrategyPointを累積するための一時的な箱の最初に『０』を入れておく


        // console.log("cumulativeSum1D[i]の" + cumulativeSum1D[i] + "と");
        // console.log("okeru2D[i][2]の" + okeru2D[i][2] + "とを足す");

        let cSum = cumulativeSum1D[i] + okeru2D[i][2];

        // console.log("と" + cSum + "と累積和になる");


        cumulativeSum1D.push(cumulativeSum1D[i] + okeru2D[i][2]);

        cumulativeSum2D.push([okeru2D[i][0], okeru2D[i][1], cSum]);


        // console.log("cumulativeSum2D[i][2]は" + cumulativeSum2D[i][2] + "と累積和になる");


    }

    // console.log("okeru2Dの        " + okeru2D);
    // console.log("cumulativeSum1Dは" + cumulativeSum1D);
    // console.log("cumulativeSum2Dの" + cumulativeSum2D);

}



// ---STEP.24.5
// ---okeru2D[]のstrategyPointをcumulativeSum2D[]に累積していく---
// －－－　"クリックするときの確率分母（乱数）の設定　－－－//
function algorithm5() {
    console.log("algorithm55555555555555555555555555555555まで来たぜ")

    // 一番ポイントの大きいものを選ぶ（同率一位ならindexが若い方。）
    // x = okeru2D[0][0];
    // y = okeru2D[0][1];

    console.log("algorithm5 ランダム ランダム ランダム ランダム ランダム ランダム ランダム ランダム まで来たぜ")
    // ポイントの大きさがindex[0][2]とindex[1][2]（またはindex[2][2]も）同率一位ならランダムで選ぶ
    if (okeru2D.length >= 3 && okeru2D[0][2] === okeru2D[1][2] && okeru2D[1][2] === okeru2D[2][2]) {
        const r = Math.floor(Math.random() * 3);
        x = okeru2D[r][0];
        y = okeru2D[r][1];

        console.log("0から2までの乱数は乱数は乱数は" + r)

    } else if (okeru2D.length >= 2 && okeru2D[0][2] === okeru2D[1][2]) {

        const r = Math.floor(Math.random() * 2);
        x = okeru2D[r][0];
        y = okeru2D[r][1];
        console.log("0から1までの乱数は乱数は乱数は" + r)

    } else {
        x = okeru2D[0][0];
        y = okeru2D[0][1];
    }


    gameRecord(x, y, "w");
    // console.log(gameRecord2D.length - 1 + "手目の棋譜は" + gameRecord2D[gameRecord2D.length - 1]);
    // console.log("棋譜は" + gameRecord2D);

    // console.log("棋譜のカウントは" + (gameRecord2D.length - 1));

    // arrayPara2D[x][y].textContent = "●";



    // ----------------------------------------------------------------------------
    // const arreyJson = [start, circle, bgscreen, commetL, fireBall, firewall];



    // ----------------------------------------------------------------------------


    // ----------------------------------------------------------------------------

    // particleDefault(x, y, "w");


    // ----------------------------------------------------------------------------






    checkFlip(x, y, "w", "b");
}

