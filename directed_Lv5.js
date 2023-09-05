
// ---STEP.11   先手（黒、人間）、後手（白、PC）との間を取り持つ---------------
// ---STEP.11.1 棋譜『gameRecord2D』を参考にゲーム終了か続行かを確認する。
//              終了なら勝敗判定に、続行なら先手（黒、人間）後手（白、PC）を切り替える
function gameControl() {
    console.table(gameRecord2D)
    console.log("gameControl()にやってきた");
    console.log("棋譜のカウントは" + (gameRecord2D.length - 1));
    console.log(gameRecord2D.length - 1 + "手目の棋譜は" + gameRecord2D[gameRecord2D.length - 1]);


    // 2回連続パスの場合はゲーム終了
    if (gameRecord2D[gameRecord2D.length - 1][0] == "Pa" && gameRecord2D[gameRecord2D.length - 2][0] == "Pa") {

        console.log("gameControl()で2連続パスのチェック");
        console.log("２つ前の行は" + gameRecord2D[gameRecord2D.length - 2][0]);
        console.log("１つ前の行は" + gameRecord2D[gameRecord2D.length - 1][0]);
        console.log("2連続で " + gameRecord2D[gameRecord2D.length - 1][0] + gameRecord2D[gameRecord2D.length - 2][1] + " なのでcheckWin()へ");

        checkWin();
    } else {
        // 2回連続パスではないので、ゲーム続行
        attackerSwitch();
    }
}


// ---STEP.11.2 先手（黒、人間）、後手（白、PC）を切り替える
function attackerSwitch() {
    // if (attacker === "b") {
    if ((gameRecord2D.length - 1) % 2 === 0) {
        console.log("gameControl()からpcManSide()へ行くはず");
        pcManSide(); //pcman vs pc
        // console.log("gameControl()からmanSide()へ行くはず");        
        // manSide();      //man vs pc

    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        console.log("gameControl()からpcSide()へ行くはず");
        pcSide();

    } else {
        // console.log("バグ？？？どちらにも行かず 棋譜のカウントは" + (gameRecord2D.length - 1));
    }

}



// ---STEP.6   （PC内の）管理用の記録配列『arrayRecord』のスコアに合わせてブラウザ上の盤面を表示する

function drawing() {
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            arraySquare2D[i][k].classList.remove("able");
            arraySquare2D[i][k].classList.remove("black");
            arraySquare2D[i][k].classList.remove("white");


            if (arrayRecord2D[i][k] == "b") {
                arraySquare2D[i][k].classList.add("black");
            } else if (arrayRecord2D[i][k] == "w") {
                arraySquare2D[i][k].classList.add("white");
            } else if (arrayRecord2D[i][k] == 0) {
                arrayPara2D[i][k].textContent = "";

            } else {
            }
        }
    }
}

// ---STEP.7   記録エリア---------------------ー－－----------------------
// ---STEP.7   棋譜用の配列『gameRecord2D』に座標(x,y)と打ち手(attacker)を記録する。

function gameRecord(x, y, attacker) {

    const gameRecord1D = [x, y, attacker];

    gameRecord2D.push(gameRecord1D);
    // console.log(gameRecord1D);
    // console.log(gameRecord2D);

    // 棋譜用の配列『gameRecord2D』内容に拠ってはarrayTactics2D[]を書き換えたり
    // アルゴリズムを変更したりする。
    // console.log("algorithm61()に行くぞおおおおおおおおおおおおおおおおおおおぞおおおおおおおおお");
    // 隅を取ったときはarrayTactics2D[]を調整する
    algorithm61(x, y, attacker);



    // console.log("棋譜に記録する[" + x + "][" + y + "]の" + attacker + "で" + (gameRecord2D.length - 1) + "手目");
    // console.table(gameRecord2D);
}


// ---STEP.15   掲示エリア-----------------------------------------------
// ---STEP.15   掲示エリアの表示などオセロに直接関係ないところを管理する---------

// ---STEP.15.1.0 現時点の盤面でのトータル『strategyPoint』を計算する

function strategyPoint() {
    // console.log("掲示用のtotalStrategyPointを算出する")

    let strategyPoint_B = 0;
    let strategyPoint_W = 0;

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            // "w"の場所（座標x,y）を確認していき、
            // トータル戦略ポイント(strategyPoint)として合計する
            if (arrayRecord2D[i][k] == "b") {

                // console.log("arrayTactics2D[" + i + "][" + k + "]は" + arrayTactics2D[i][k]);
                strategyPoint_B = arrayTactics2D[i][k] + strategyPoint_B;
            } else if (arrayRecord2D[i][k] == "w") {

                // console.log("arrayTactics2D[" + i + "][" + k + "]は" + arrayTactics2D[i][k]);
                strategyPoint_W = arrayTactics2D[i][k] + strategyPoint_W;
            }
        }
    }
    scoreStrategyPoint(strategyPoint_B, strategyPoint_W);
}

// ---STEP.15.1.1 現時点のトータル『strategyPoint』を表示する
function scoreStrategyPoint(strategyPoint_B, strategyPoint_W) {
    // console.log("scoreStrategyPoint(message);に来ました");
    document.querySelector("#scoreBlack2").textContent = strategyPoint_B;
    document.querySelector("#scoreBlack4").textContent = strategyPoint_W;

    if ((gameRecord2D.length - 1) % 2 === 0) {
        document.querySelector("#scoreBlack3").textContent = (strategyPoint_B) - (strategyPoint_W);

    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        document.querySelector("#scoreBlack3").textContent = (strategyPoint_W) - (strategyPoint_B);
    }
}

// ---STEP.15.2 得点エリアの表示

function score() {
    // console.log("score();に来ました");

    // 石を数え、得点を表示する
    const arrayBlack = document.querySelectorAll(".black");
    const arrayWhite = document.querySelectorAll(".white");
    document.querySelector("#scoreBlack1").textContent = "黒 " + arrayBlack.length;
    document.querySelector("#scoreBlack5").textContent = "白 " + arrayWhite.length;
    // console.log("棋譜[]の要素数は" + (gameRecord2D.length));
    // console.log("棋譜のカウントは" + (gameRecord2D.length - 1));


    // 得点をふわふわ動かす
    if ((gameRecord2D.length - 1) % 2 === 0) {
        document.querySelector("#scoreBlack1").classList.add("score");
        document.querySelector("#scoreBlack5").classList.remove("score");
    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        document.querySelector("#scoreBlack5").classList.add("score");
        document.querySelector("#scoreBlack1").classList.remove("score");
    } else {
    }


    // 『StrategyPoint』を表示
    if ((gameRecord2D.length - 1) % 2 === 0) {
        document.querySelector("#noticeBlack1").textContent = "黒の置くところはあります";
        document.querySelector("#noticeBlack5").textContent = "";
        document.querySelector("#scoreBlack1").style.border = "15px dashed black";
        document.querySelector("#scoreBlack5").style.border = "0px dashed white";
    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        document.querySelector("#noticeBlack1").textContent = "";
        document.querySelector("#noticeBlack5").textContent = "白の置くところはあります";
        document.querySelector("#scoreBlack1").style.border = "0px dashed black";
        document.querySelector("#scoreBlack5").style.border = "15px dashed white";
    } else {
        console.log("どちらにも行かず 棋譜のカウントは" + (gameRecord2D.length - 1));
    }
}


// ---STEP.15.3 お知らせエリアの表示（消す）
function notice(message) {

    // お知らせを横に動かす
    if ((gameRecord2D.length - 1) % 2 === 0) {
        document.querySelector("#noticeBlack1").classList.add("notice");
        document.querySelector("#noticeBlack5").classList.remove("notice");
    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        document.querySelector("#noticeBlack5").classList.add("notice");
        document.querySelector("#noticeBlack1").classList.remove("notice");
    } else {
    }



    // console.log("notice(message);に来ました");
    document.querySelector("#noticeBlack2").textContent = message;
    document.querySelector("#noticeBlack4").textContent = message;
}


// ---STEP.16   勝敗を確かめる-------------------------------------------

function checkWin() {

    for (let i = 0; i < 100; i++) {
        likeArraySquare[i].style.opacity = 1.0;
    }

    // const arrayAble = document.querySelectorAll(".able");
    const arrayBlack = document.querySelectorAll(".black");
    const arrayWhite = document.querySelectorAll(".white");

    if (arrayBlack.length > arrayWhite.length) {
        // console.log("黒の勝ち");
        document.querySelector("#noticeBlack2").textContent = "黒の勝ち";
        document.querySelector("#scoreBlack1").style.border = "15px dashed black";
        document.querySelector("#scoreBlack5").style.border = "0px dashed white";

        // youwin();
    } else if (arrayBlack.length < arrayWhite.length) {
        // console.log("白の勝ち");
        document.querySelector("#noticeBlack4").textContent = "白の勝ち";
        document.querySelector("#scoreBlack1").style.border = "0px dashed black";
        document.querySelector("#scoreBlack5").style.border = "15px dashed white";
        // youlose();

    } else if (arrayBlack.length == arrayWhite.length) {
        // console.log("引き分け");
        document.querySelector("#noticeBlack2").textContent = "引き分け";
        document.querySelector("#noticeBlack4").textContent = "引き分け";
        document.querySelector("#scoreBlack1").style.border = "15px dashed black";
        document.querySelector("#scoreBlack5").style.border = "15px dashed white";
        // draw();
    } else {
    }

    // --------------------------------リロード 無限繰り返し------------------------------------------------
    const jugem = location.reload();
    setTimeout(jugem, 13000);


}