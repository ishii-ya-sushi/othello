// ---STEP.-1   灰白質用の（仮の）グローバルスコープの定数・配列・関数置き場---------------------

// ---STEP.-1.3   マスの評価値の配列『arrayRoutine2D』の１マスごとに評価値を付ける
const arrayTactics2D = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 30, -12, 0, -1, -1, 0, -12, 30, 0], [2, -12, -15, -3, -3, -3, -3, -15, -12, 0], [3, -3, 0, 5, -1, -1, 5, 0, -3, 0], [4, -1, -3, -1, -1, -1, -1, -3, -1, 0], [5, -1, -3, -1, -1, -1, -1, -3, -1, 0], [6, -3, 0, 5, -1, -1, 5, 0, -3, 0], [7, -12, -15, -3, -3, -3, -3, -15, -12, 0], [8, 30, -12, 0, -1, -1, 0, -12, 30, 0], [9, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
// const arrayStrategy2D = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 30, -12, 0, -1, -1, 0, -12, 30, 0], [2, -12, -15, -3, -3, -3, -3, -15, -12, 0], [3, -3, 0, 5, -1, -1, 5, 0, -3, 0], [4, -1, -3, -1, -1, -1, -1, -3, -1, 0], [5, -1, -3, -1, -1, -1, -1, -3, -1, 0], [6, -3, 0, 5, -1, -1, 5, 0, -3, 0], [7, -12, -15, -3, -3, -3, -3, -15, -12, 0], [8, 30, -12, 0, -1, -1, 0, -12, 30, 0], [9, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

// ---STEP.-1.4   石が置けるマスの座標(x,y)と評価値(strategyPoint)を記録する配列okeru2D[]
const okeru2D = [];
// ---STEP.-1.5   okeru2D[] の strategyPointを累積するための一時的な配列
const cumulativeSum1D = [];
// ---STEP.-1.6   okeru2D[] の strategyPointを累積和し直した配列
const cumulativeSum2D = [];

// ---STEP.-1.7.1   1マスではなく盤面（8*8）のトータルstrategyPointを計算するときの
//                 （仮に）石を置いたときの(strategyPoint)を記録する配列entativeRecord1[]
const entativeRecord1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

// ---STEP.-1.7.2   1マスではなく盤面（8*8）のトータルstrategyPointを計算するときの
//                 （仮に）石を置いたときの記録する配列tempRecord[]
const tempRecord = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]





// ---STEP.-1.8   マスの評価値の配列『arrayTactics2D』の戦略的価値点数 をテキスト表示用の配列『arrayPara2D』に付ける
// for (let i = 0; i < 10; i++) {
//     for (let k = 0; k < 10; k++) {
//         arrayPara2D[i][k].textContent = arrayTactics2D[i][k];
//     }
// }
// console.log(arrayTactics2D);

// ---STEP.-1.9   （仮に）石を置いて（仮に）ひっくり返した後の、相手が置ける場所と数記録する配列
for (let i = 0; i < 100; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("ablePoint");
    newDivs.setAttribute("id", "ablePoint" + (i));

    document.querySelector("#bottom").append(newDivs);

}

const likeArrayEntativeSquare = document.querySelectorAll(".ablePoint");
const realArrayEntativeSquare = Array.from(likeArrayEntativeSquare);

const entativeSquare2D = [];
for (let i = 0; i < 10; i++) {
    entativeSquare2D[i] = realArrayEntativeSquare.slice(i * 10, (i + 1) * 10);
}




// ---STEP.-1.99   （仮に）石を置いて（仮に）ひっくり返した後の、相手が置ける場所と数記録する配列
for (let i = 0; i < 100; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("tempAble");
    newDivs.setAttribute("id", "tempAble" + (i));

    document.querySelector("#bottom").append(newDivs);

}

const likeTempSquare = document.querySelectorAll(".tempAble");
const realTempSquare = Array.from(likeTempSquare);

const tempSquare2D = [];
for (let i = 0; i < 10; i++) {
    tempSquare2D[i] = realArrayEntativeSquare.slice(i * 10, (i + 1) * 10);
}



// ---STEP.-1.999   （仮に）石を置いて（仮に）ひっくり返した後の、（仮の）Point

let entativeStrategyPoint;
let entativeAblePoint;
let tempPoint;
let totalStrategyPoint;


// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// ---STEP.10   PCの（評価関数）-----------------------------------------
//              盤面全体のトータルな評価値『トータルstrategyPoint』を計算していく

// ---STEP.10.1 打てる場所を探す。そして、（仮に）そこに石を打った場合の
//              座標(x,y)と（ひっくり返した後の）トータル(totalStrategyPoint)を配列okeru2D[]に記録する

function greyMatter() {
    // console.log("greyMatter(新)まで来たぜ")

    console.log("（仮に）" + ((gameRecord2D.length - 1) + 1) + "手目の石を置くのは");

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            // 石の置ける場所（座標x,y）を確認する
            if (arraySquare2D[i][k].classList.contains('able') == true) {

                entativeStrategyPoint = 0;
                entativeAblePoint = 0;
                tempPoint = 0;
                totalStrategyPoint = 0;


                // （仮に）その座標(x,y)に石を置いたと仮定して

                // グループ10   （仮に）ひっくり返した後の盤面の『entativeStrategyPoint』を求める
                algorithm11(i, k);

                // グループ20   （仮に）石を置いて（仮に）ひっくり返した後の、相手が置ける場所と数を確認し『entativeAblePoint』を求める
                algorithm21();
                algorithm24();



                // グループ50    entative 戦略 StrategyPointとentative 可能 AblePointを合わせて totalStrategyPointポイントにする
                algorithm51()
                console.log("トータルtotalStrategyPointは" + totalStrategyPoint);




                // 配列okeru2D[]に（仮に）その座標(x,y)に白石を置いた場合のトータル(totalStrategyPoint)を記録する
                const okeru1D = [i, k, totalStrategyPoint];
                okeru2D.push(okeru1D);

                // （仮に）その座標(x,y)に白石を置いた場合のトータル(totalStrategyPoint)をブラウザ上に表示する
                arrayPara2D[i][k].textContent = totalStrategyPoint;

            }
        }
    }

}



// ----------------------------グループ 11 ------------------------------------------------------------------

// ---group.11.1   （仮に）その座標(x,y)に白石を置いた場合のトータル『strategyPoint』を計算する
//               algorithm1()から置ける座標(x,y)を受け取る
function algorithm11(i, k) {
    // console.log("algorithm11(新新新新新)まで来た")
    // console.log("（仮に）確かめるのは[" + i + "][" + k + "]")


    // console.log("本当の記録arrayRecord2D  " + arrayRecord2D);
    // console.log("（仮）記録entativeRecord1" + entativeRecord1);


    // （仮の）配列entativeRecord1[][]を初期化（要素を全削除）
    // entativeRecord1.splice(0);

    // （仮の）記録用配列entativeRecord1[]に、現在の記録をコピーする
    // 下３つは浅いコピーになり2次元配列での完全に独立した複製は出来ない
    // entativeRecord1 = arrayRecord2D.concat();
    // entativeRecord1 = ary1.slice(0, ary1.length);
    // entativeRecord1 = Array.from(arrayRecord2D);
    // 『JSON.stringify + JSON.parse』を使うと出来るかもしれないが今回はパス

    // （仮の）記録用配列entativeRecord1[]に、現在の記録をコピーする
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            entativeRecord1[i][k] = arrayRecord2D[i][k];
        }
    }
    // console.log("コピーした（仮）記録entativeRecord1" + entativeRecord1);
    // console.log("仮に）石を置くのは" + (gameRecord2D.length - 1) + "手目");


    // （仮に）石を置いてみて、（仮に）石がひっくり返せるか確認して、（仮に）ひっくり返しにいく。
    // entativeCheckFlip(i, k, own, opponent)
    if ((gameRecord2D.length - 1) % 2 === 0) {
        // 先手（黒、人間）
        entativeCheckFlip(i, k, "b", "w");
    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        // 後手（白、PC）
        entativeCheckFlip(i, k, "w", "b");
    }
    // （仮に）石を置いてみて、（仮に）ひっくり返した後の盤面のentativePointを計算する
    entativeStrategy(i, k);
}

// ---group.11.2
// （仮に）石を置いてみて、（仮に）確認し、ひっくり返す。その準備。
function entativeCheckFlip(i, k, own, opponent) {

    // どの方向の相手石が自分色挟まれてひっくり返せるか確認する
    // 引数  (i, k, vertical, horizontal, own, opponent, reCount)
    // （水平方向のチェック）
    entativeFlipStone(i, k, 0, +1, own, opponent, 1); // 右方向へ
    entativeFlipStone(i, k, 0, -1, own, opponent, 1); // 左方向
    // （垂直方向のチェック）
    entativeFlipStone(i, k, +1, 0, own, opponent, 1); // 下方向
    entativeFlipStone(i, k, -1, 0, own, opponent, 1); // 上方向
    // \\ （斜め方向のチェック）
    entativeFlipStone(i, k, +1, +1, own, opponent, 1); // 右下方向
    entativeFlipStone(i, k, -1, -1, own, opponent, 1); // 左上方向
    // // （斜め方向のチェック）
    entativeFlipStone(i, k, +1, -1, own, opponent, 1); // 左下方向
    entativeFlipStone(i, k, -1, +1, own, opponent, 1); // 右上方向

    // （仮の）記録用配列entativeRecord1[]に、（挟んだところではなくて）"自軍の色を" を（仮に）記録する
    entativeRecord1[i][k] = own;
    // console.log("コピーした（仮）記録に（仮） w b を記録" + entativeRecord1);

}
// ---group.11.3
// （仮に）石を置いてみて、各方向（8方向）をチェックし、（仮に）ひっくり返す）
function entativeFlipStone(i, k, vertical, horizontal, own, opponent, reCount) {

    if (entativeRecord1[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {
        // console.log("（仮の）第一検問");   
    } else if (entativeRecord1[i + vertical][k + horizontal] != opponent) {
        // console.log("（仮の）第二検問");
    } else {
        if (entativeRecord1[i + (vertical * reCount)][k + (horizontal * reCount)] == opponent) {
            // console.log("（仮の）第３検問");    
            reCount = reCount + 1;
            entativeFlipStone(i, k, vertical, horizontal, own, opponent, reCount);
        } else {
            if (entativeRecord1[i + (vertical * reCount)][k + (horizontal * reCount)] == own) {
                // console.log("挟めるので再起した数の" + reCount + "の石を(仮に)ひっくり返す");
                for (let m = 1; m < reCount; m++) {

                    // （仮の）記録用配列entativeRecord1[]に、"w"を記録する
                    // arrayRecord2D[i + (vertical * m)][k + (horizontal * m)] = own;                        
                    entativeRecord1[i + (vertical * m)][k + (horizontal * m)] = own;
                    // console.log("隣接する石" + (i + (vertical * m)) + "" + (k + (horizontal * m)) + "の" + opponent + "を" + own + "にひっくり返す")
                }
            } else {
                // console.log("bug????????????????");
            }
        }
    }
}
// ---group.11.4
// （仮に）石を置いてみて、（仮に）ひっくり返した後の盤面のentativeStrategyPointを計算する
function entativeStrategy(i, k) {
    // console.log("（仮の）"b"と"w"の盤面のトータルstrategyPointを算出する")

    console.log("（仮に）チェックするのはindexs■■■[" + i + "][" + k + "]■■■に石を置いたとき")

    let strategyPoint_B = 0;
    let strategyPoint_W = 0;
    // let entativeStrategyPoint = 0;

    // console.log("strategyPoint_Bは" + strategyPoint_B);// 0
    // console.log("strategyPoint_Wは" + strategyPoint_W);// 0
    // console.log("entativeStrategyPointは" + entativeStrategyPoint); // 0

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            // "b"と"w"の場所（座標x,y）を確認していき、
            if (entativeRecord1[i][k] == "b") {
                // "b"のトータル戦略ポイント(strategyPoint)として合計する
                // console.log("arrayTactics2D[" + i + "][" + k + "]は" + arrayTactics2D[i][k]);
                strategyPoint_B = arrayTactics2D[i][k] + strategyPoint_B;

                // console.log("strategyPoint_Bは" + strategyPoint_B);// 0
            } else if (entativeRecord1[i][k] == "w") {
                // "w"のトータル戦略ポイント(strategyPoint)として合計する
                // console.log("arrayTactics2D[" + i + "][" + k + "]は" + arrayTactics2D[i][k]);
                // console.log("arrayTactics2D[" + i + "][" + k + "]は" + arrayTactics2D[i][k]);
                strategyPoint_W = arrayTactics2D[i][k] + strategyPoint_W;
                // console.log("strategyPoint_Wは" + strategyPoint_W);// 0
            }
        }
    }

    // console.log("（仮にひっくり返した後の）strategyPoint_Bは" + strategyPoint_B + "になる");
    // console.log("（仮にひっくり返した後の）strategyPoint_Wは" + strategyPoint_W + "になる");

    if ((gameRecord2D.length - 1) % 2 === 0) {
        // 先手（黒、人間）の評価なら、entativeStrategyPointは、(strategyPoint_B) - (strategyPoint_W)
        entativeStrategyPoint = ((strategyPoint_B) - (strategyPoint_W));
        // console.log("黒のentativeStrategyPoint_B-Wは" + strategyPoint);

    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        // 後手（白、PC）の評価なので、、entativeStrategyPointは、(strategyPoint_W) - (strategyPoint_B)
        entativeStrategyPoint = ((strategyPoint_W) - (strategyPoint_B));
        // console.log("白のentativeStrategyPoint_W-Bは" + strategyPoint);

    } else {
        // console.log("どちらにも行かず 棋譜のカウントは" + (gameRecord2D.length - 1));
    }
    console.log("（仮にひっくり返した後の）entativeStrategyPointは" + entativeStrategyPoint + "になる");

    // entativeStrategyPoint = entativeStrategyPoint;
}

// ----------------------------グループ 11 ------------------------------------------------------------------




// ----------------------------グループ 21 ------------------------------------------------------------------

// ---group.21.1   （仮に）石を置いて（仮に）ひっくり返した後の、相手が置ける場所と数を確認する
function algorithm21() {

    // ---------------------------------------------------------------------------------------------------
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            entativeSquare2D[i][k].classList.remove("entativeAble");
        }
    }
    // console.log("（仮に）石を置いた後の相手が置ける場所の配列entativeSquare2Dを一旦初期化する");
    // ---------------------------------------------------------------------------------------------------

    if ((gameRecord2D.length - 1) % 2 === 0) {
        entativeAbleCheck("w", "b");
    } else if ((gameRecord2D.length - 1) % 2 === 1) {
        entativeAbleCheck("b", "w");
    }

}
// ---group.21.2 石が置けるか全方向（8方向）チェックするための準備をする
function entativeAbleCheck(own, opponent) {

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            // ---------------------------------------------------------------------------------------------------
            // このタイミングはよくない???
            // entativeSquare2D[i][k].classList.remove("entativeAble");
            // ---------------------------------------------------------------------------------------------------

            entativeCheckLine(i, k, 0, +1, own, opponent, 1);  // 右方向のチェック
            entativeCheckLine(i, k, 0, -1, own, opponent, 1);  // 左方向
            entativeCheckLine(i, k, +1, 0, own, opponent, 1);  // 下方向
            entativeCheckLine(i, k, -1, 0, own, opponent, 1);  // 上方向
            entativeCheckLine(i, k, +1, +1, own, opponent, 1); // 右下方向
            entativeCheckLine(i, k, -1, -1, own, opponent, 1); // 左上方向
            entativeCheckLine(i, k, +1, -1, own, opponent, 1); // 左下方向
            entativeCheckLine(i, k, -1, +1, own, opponent, 1); // 右上方向

        }
    }

}

// ---group.21.3 石が置ける全方向（8方向）をチェックする
// .             石が置けるentativeSquare2D[i][k]に"entativeAble"classを付与する
//    引数  (i, k, vertical, horizontal, own, opponent, reCount)
function entativeCheckLine(i, k, vertical, horizontal, own, opponent, reCount) {

    if (entativeRecord1[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {

    } else if (entativeRecord1[i + vertical][k + horizontal] != opponent) {

    } else {
        if (entativeRecord1[i + (vertical * reCount)][k + (horizontal * reCount)] == opponent) {

            reCount = reCount + 1;
            // console.log("再起する");
            // console.log("再起した。reCountは" + reCount);
            entativeCheckLine(i, k, vertical, horizontal, own, opponent, reCount);

        } else {

            if (entativeRecord1[i + (vertical * reCount)][k + (horizontal * reCount)] == own) {

                // クリック出来るように（仮の）entativeSquare2D[][]に("able")クラスを付与する

                entativeSquare2D[i][k].classList.add("entativeAble");
                // entativeSquare2D[i][k]はHTMLの要素ではなくてもいいのだが、将来役立つかもしれないので.class付与
                // でやってみる
                // --------------------------------重要--でも重い------------------------------------------------
                // console.log("次に相手は[" + i + "][" + k + "]に置けるようになる");
                // ----------------------------------------------------------------------------------

            } else {
                // console.log("else { 相手の最後の石の隣に石が置かれていない、つまり挟めない ) なので");
                // console.log("ルール上、石を置けない。クリックできないままにする");
                // console.log("最後は石がなかったか番兵さん　　　bagu???");
            }
        }
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
    }
}

// ---group.21.4   （仮に）石を置いて（仮に）ひっくり返した後の、相手が置ける場所と数を確認し、
//                 トータル(strategyPoint)を加減する

function algorithm24() {
    const ArrayPass = document.querySelectorAll(".entativeAble");
    console.log("（仮に）置いてひっくり返した後の相手の置ける場所の数は" + ArrayPass.length + "個")

    // 相手が置ける座標と数を確認する
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            if (entativeSquare2D[i][k].classList.contains('entativeAble') == true) {
                console.log("（仮に）置いてひっくり返した後の相手の置ける場所は■■■[" + i + "][" + k + "]■■■")


                // ----------------------------グループ 31 へ ------------------------------------------------------------------
                // さらに（仮の（仮り））で相手が置ける場所[i][k]に置いたとした場合の自身の置ける場所と数を確認する
                if ((gameRecord2D.length - 1) % 2 === 0) {
                    algorithm31(i, k);
                } else if ((gameRecord2D.length - 1) % 2 === 1) {
                    algorithm31(i, k);
                }

                // ----------------------------グループ 31 へ ------------------------------------------------------------------

            }
        }
    }


    // 相手が置ける数を確認する。もし『０』個ならば、最優先する（+100 Point）
    if (ArrayPass.length == 0) {
        console.log("相手が置ける数が" + ArrayPass.length + "個になるので、最優先する（+100 Point）");
        entativeAblePoint = +100;

    } else if (ArrayPass.length >= 1) {
        console.log("相手が置ける場所が１つ以上あるので確認する");
        // 相手が隅(1,1)(1,8)(8,1)(8,8)に置けるならば、優先度を下げる（-30 Point）
        if (entativeSquare2D[1][1].classList.contains('entativeAble') == true) {
            console.log("相手が隅(1,1)(1,8)(8,1)(8,8)に置けるようになるので、優先度を下げる（-30 Point）");
            // entativeAblePoint = -30;
            entativeAblePoint = -45;
        } else if (entativeSquare2D[1][8].classList.contains('entativeAble') == true) {
            console.log("相手が隅(1,1)(1,8)(8,1)(8,8)に置けるようになるので、優先度を下げる（-30 Point）");
            // entativeAblePoint = -30;
            entativeAblePoint = -45;
        } else if (entativeSquare2D[8][1].classList.contains('entativeAble') == true) {
            console.log("相手が隅(1,1)(1,8)(8,1)(8,8)に置けるようになるので、優先度を下げる（-30 Point）");
            // entativeAblePoint = -30;
            entativeAblePoint = -45;
        } else if (entativeSquare2D[8][8].classList.contains('entativeAble') == true) {
            console.log("相手が隅(1,1)(1,8)(8,1)(8,8)に置けるようになるので、優先度を下げる（-30 Point）");
            // entativeAblePoint = -30;
            entativeAblePoint = -45;
        } else {
            console.log("特に何もないので（0 Point）です");
        }
    }
}

// ----------------------------グループ 21 ------------------------------------------------------------------


// ----------------------------グループ 31 ------------------------------------------------------------------

function algorithm31(i, k) {
    console.log("algorithm31(i, k)31313113131313113311");

    // （仮の（仮の））記録用配列const tempRecord[]に、（仮の）記録用配列entativeRecord1[]の記録をコピーする
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            tempRecord[i][k] = entativeRecord1[i][k];
        }
    }

    algorithm32(i, k);


    // ---group.11   （仮に）その座標(x,y)に白石を置いた場合
    function algorithm32(i, k) {

        // console.log("（（仮の）仮に））石を置くのは" + (((gameRecord2D.length - 1) + 1) + "手目");
        // （（仮の）仮に））なので、(gameRecord2D.length - 1)を + 1 して手を1つ進める

        if (((gameRecord2D.length - 1) + 1) % 2 === 0) {
            // 先手（黒、人間）
            entativeCheckFlip33(i, k, "b", "w");
        } else if (((gameRecord2D.length - 1) + 1) % 2 === 1) {
            // 後手（白、PC）
            entativeCheckFlip33(i, k, "w", "b");
        }
    }


    function entativeCheckFlip33(i, k, own, opponent) {
        entativeFlipStone34(i, k, 0, +1, own, opponent, 1);  // 右方向へのチェック
        entativeFlipStone34(i, k, 0, -1, own, opponent, 1);  // 左方向
        entativeFlipStone34(i, k, +1, 0, own, opponent, 1);  // 下方向
        entativeFlipStone34(i, k, -1, 0, own, opponent, 1);  // 上方向
        entativeFlipStone34(i, k, +1, +1, own, opponent, 1); // 右下方向
        entativeFlipStone34(i, k, -1, -1, own, opponent, 1); // 左上方向
        entativeFlipStone34(i, k, +1, -1, own, opponent, 1); // 左下方向
        entativeFlipStone34(i, k, -1, +1, own, opponent, 1); // 右上方向

        // （（仮の）仮に））記録用配列entativeRecord1[]に、（挟んだところではなくて）"自軍の色を" を（（仮の）仮に））記録する
        // entativeRecord1[i][k] = own;
        tempRecord[i][k] = own;



        // console.log("コピーした（（仮の）仮に））記録に（（仮の）仮に）） w b を記録" + tempRecord);
    }


    function entativeFlipStone34(i, k, vertical, horizontal, own, opponent, reCount) {

        if (tempRecord[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {
        } else if (tempRecord[i + vertical][k + horizontal] != opponent) {
        } else {
            if (tempRecord[i + (vertical * reCount)][k + (horizontal * reCount)] == opponent) {
                reCount = reCount + 1;
                entativeFlipStone34(i, k, vertical, horizontal, own, opponent, reCount);
            } else {
                if (tempRecord[i + (vertical * reCount)][k + (horizontal * reCount)] == own) {
                    for (let m = 1; m < reCount; m++) {
                        tempRecord[i + (vertical * m)][k + (horizontal * m)] = own;
                    }
                } else {
                    // console.log("bug????????????????");
                }
            }
        }
    }




    //   （（仮の）仮に））石を置いて（（仮の）仮に））ひっくり返した後の、相手が置ける数を確認し『temp+Point』を求める
    algorithm35();

    algorithm38();


    function algorithm35() {

        // ---------------------------------------------------------------------------------------------------
        for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {
                // tempSquare2D[i][k].classList.remove("entativeAble");
                tempSquare2D[i][k].classList.remove("tempA");
            }
        }
        // console.log("（仮に）石を置いた後の相手が置ける場所の配列tempSquare2Dを一旦初期化する");
        // ---------------------------------------------------------------------------------------------------

        if (((gameRecord2D.length - 1) + 1) % 2 === 0) {
            entativeAbleCheck36("w", "b");
        } else if (((gameRecord2D.length - 1) + 1) % 2 === 1) {
            entativeAbleCheck36("b", "w");
        }

    }
    // 石が置けるか全方向（8方向）チェックするための準備をする
    function entativeAbleCheck36(own, opponent) {

        for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {

                // ---------------------------------------------------------------------------------------------------
                // このタイミングはよくない???
                // tempSquare2D[i][k].classList.remove("tempA");
                // ---------------------------------------------------------------------------------------------------

                entativeCheckLine37(i, k, 0, +1, own, opponent, 1);  // 右方向のチェック
                entativeCheckLine37(i, k, 0, -1, own, opponent, 1);  // 左方向
                entativeCheckLine37(i, k, +1, 0, own, opponent, 1);  // 下方向
                entativeCheckLine37(i, k, -1, 0, own, opponent, 1);  // 上方向
                entativeCheckLine37(i, k, +1, +1, own, opponent, 1); // 右下方向
                entativeCheckLine37(i, k, -1, -1, own, opponent, 1); // 左上方向
                entativeCheckLine37(i, k, +1, -1, own, opponent, 1); // 左下方向
                entativeCheckLine37(i, k, -1, +1, own, opponent, 1); // 右上方向

            }
        }

    }

    //               石が置ける全方向（8方向）をチェックする
    //               石が置けるtempSquare2D[i][k]に"tempA"classを付与する
    //               引数  (i, k, vertical, horizontal, own, opponent, reCount)
    function entativeCheckLine37(i, k, vertical, horizontal, own, opponent, reCount) {

        if (tempRecord[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {

        } else if (tempRecord[i + vertical][k + horizontal] != opponent) {

        } else {
            if (tempRecord[i + (vertical * reCount)][k + (horizontal * reCount)] == opponent) {

                reCount = reCount + 1;
                // console.log("再起する");
                // console.log("再起した。reCountは" + reCount);
                entativeCheckLine37(i, k, vertical, horizontal, own, opponent, reCount);

            } else {

                if (tempRecord[i + (vertical * reCount)][k + (horizontal * reCount)] == own) {

                    // クリック出来るように（仮の）tempSquare2D[][]に("tempA")クラスを付与する

                    tempSquare2D[i][k].classList.add("tempA");
                    // tempSquare2D[i][k]はHTMLの要素ではなくてもいいのだが、将来役立つかもしれないので.class付与
                    // でやってみる

                    // --------------------------------重要--でも重い------------------------------------------------
                    // console.log("次の次の自分は[" + i + "][" + k + "]に置けるようになる");
                    // ----------------------------------------------------------------------------------



                } else {
                    // console.log("else { 相手の最後の石の隣に石が置かれていない、つまり挟めない ) なので");
                    // console.log("ルール上、石を置けない。クリックできないままにする");
                    // console.log("最後は石がなかったか番兵さん　　　bagu???");
                }
            }
            // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
        }
    }

    // ---group.21.4   （仮に）石を置いて（仮に）ひっくり返した後の、相手が置ける場所と数を確認し、
    //                 トータル(strategyPoint)を加減する

    function algorithm38() {

        // 相手が置ける座標と数を確認する
        for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {
                if (tempSquare2D[i][k].classList.contains('tempA') == true) {


                // --------------------------------重要--でも重い------------------------------------------------
                    // console.log("（（仮の）仮に）置いて、相手が打った後、自身が置ける場所は■■■■■[" + i + "][" + k + "]■■■■■")
                // ----------------------------------------------------------------------------------





                    // ----------------------------グループ 31 へ ------------------------------------------------------------------
                    // さらに（仮の（仮り））置いて、相手が打った後、自身が置ける場所と数を確認する
                    // algorithm31(i, k);
                    // ----------------------------グループ 31 へ ------------------------------------------------------------------

                }
            }
        }
        const ArrayPass = document.querySelectorAll(".tempA");
        console.log("（（仮の）仮に）置いて、相手が打った後、自身が置ける場所の数は" + ArrayPass.length + "個")


        // （（仮の）仮に）置いて、相手が打った後、自身が置ける場所を確認する。もし『０』個ならば、絶対に避ける（-100 Point）
        if (ArrayPass.length == 0) {
            console.log("（（仮の）仮に）自身が置ける数が■■■■■■■" + ArrayPass.length + "個■■■■■■■になるので、絶対に避ける（-99 Point）");
            tempPoint = -99;

        } else {
            console.log("（（仮の）仮に）で置けるところが0になること以外は、すべて（0 Point）です");
        }
    }

}




// ----------------------------グループ 31 ------------------------------------------------------------------









// ----------------------------グループ 51-----------------------------------------------------------------

// ---group.51.1
// entative 戦略 StrategyPointとentative 可能 AblePointを合わせて totalStrategyPointポイントにする

function algorithm51() {

    console.log("algorithm51()5555555555555555555555555555555555555555555555");

    console.log("entative 戦略 StrategyPointは" + entativeStrategyPoint + "ポイント");
    console.log("entative 可能 AblePointは" + entativeAblePoint + "ポイント");
    console.log("temp 一時 Pointは" + tempPoint + "ポイント");

    totalStrategyPoint = entativeStrategyPoint + entativeAblePoint + tempPoint;

    console.log("合わせてトータルポイントは" + totalStrategyPoint + "ポイント");

}

// ----------------------------グループ 51-----------------------------------------------------------------




// ----------------------------グループ 61-----------------------------------------------------------------

// ---group.61   棋譜用の配列『gameRecord2D』の内容に拠っては
//               arrayTactics2D[]を書き換えたり、アルゴリズムを変更したりする。


// ---group.61.1 隅を取ったときはarrayTactics2D[]を調整する
function algorithm61(x, y, attacker) {

    // console.log("algorithm61()に来た       ay        ta       ya         ta");
    console.log("xは" + x + " yは" + y + " attackerは" + attacker);

    if (x === 9 && y === 9) {
        // console.log("(x === 6 && y === 5)にきた？？？？");

        // arrayTactics2D[1][2] = 0;
        // arrayTactics2D[2][1] = 0;
        // arrayTactics2D[2][2] = -3;

        // console.log("arrayTactics2D[1][2]は" + arrayTactics2D[1][2]);
        // console.log("arrayTactics2D[2][1]は" + arrayTactics2D[2][1]);
        // console.log("arrayTactics2D[2][2]は" + arrayTactics2D[2][2]);

        // arrayPara2D[1][2].textContent = 0;
        // arrayPara2D[2][1].textContent = 0;
        // arrayPara2D[2][2].textContent = -3;

    }
    else if (x === 1 && y === 1) {
        console.log("(x === 1 && y === 1)にきた？？？？");
        console.table("変更前");
        console.table(arrayTactics2D);

        if (attacker === "b" || attacker === "w") {
            arrayTactics2D[1][1] = 5;
            arrayTactics2D[1][2] = 5;
            arrayTactics2D[2][1] = 5;
            arrayTactics2D[2][2] = -3;
        } else if (attacker === "w") {
        }
        console.table("変更後");
        console.table(arrayTactics2D);

    } else if (x === 1 && y === 8) {
        if (attacker === "b" || attacker === "w") {
            arrayTactics2D[1][7] = 5;
            arrayTactics2D[1][8] = 5;
            arrayTactics2D[2][8] = 5;
            arrayTactics2D[2][7] = -3;
        } else if (attacker === "w") {
        }
        console.table("変更後");
        console.table(arrayTactics2D);

    } else if (x === 8 && y === 1) {
        if (attacker === "b" || attacker === "w") {

            arrayTactics2D[7][1] = 5;
            arrayTactics2D[7][2] = -3;
            arrayTactics2D[8][1] = 5;
            arrayTactics2D[8][2] = 5;
        } else if (attacker === "w") {
        }
        console.table("変更後");
        console.table(arrayTactics2D);

    } else if (x === 8 && y === 8) {
        if (attacker === "b" || attacker === "w") {
            arrayTactics2D[7][7] = -3;
            arrayTactics2D[7][8] = 5;
            arrayTactics2D[8][7] = 5;
            arrayTactics2D[8][8] = 5;


        } else if (attacker === "w") {

        }
        console.table("変更後");
        console.table(arrayTactics2D);

    } else {

    }
    // console.log("変更後");
    // console.table(arrayTactics2D);
}
// ----------------------------グループ 61-----------------------------------------------------------------

