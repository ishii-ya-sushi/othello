// ---STEP.8   先手（黒、人間）の番----------------------------------------
// ---STEP.8.1 置ける場所を探す。あるならクリック。ないならパス
//             ルール上、石を置けない所はクリックできない。同じ場所には２度クリックできない。

function manSide() {
    console.log("黒（先手、人間）。人間んんんんんんんんんんんんんんんんんんｎ");

    ableCheck("b", "w");    // STEP.9-1   先手の黒石が置ける場所を探す

    // 先手（黒、人間）の置くところを確認する
    const ArrayPass = document.querySelectorAll(".able");
    // もし置くところがなければ人間はパスとなる
    if (ArrayPass.length === 0) {
        checkPass("b");
    } else if (ArrayPass.length > 0) {
        // もし置くところがあればmanClick()に行く // ←駄目！絶対！！！
        // manClick(); // ←駄目！絶対！！！
    }

    greyMatter();
    // algorithm1();

}


// ---STEP.8.2 人間（先手、黒）が石を置く（クリックする）

function manClick() {

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            arraySquare2D[i][k].addEventListener('click', function () {

                // 黒（先手、人間）
                // console.log("黒（先手、人間）。人間んんんんんんんんんんんんんんんんんんｎ");
                console.log("index[" + i + "][" + k + "]にクリックされました")

                // 棋譜に記録する
                gameRecord(i, k, "b");

                // クリックしたら(数字) を ("●") にする
                // arrayPara2D[i][k].textContent = "●";


                // 引数 (i, k, own, opponent)
                // (i, k) はクリックした座標。// 黒（先手）が白（"b", "w"）をひっくり返す
                checkFlip(i, k, "b", "w");

                // ブラウザ上の表示を書き換える（管理用の記録配列に沿って）
                drawing();

                // ゲーム中に相手側の石を透過する（背景画像も変える）
                gameOpacity(".black", ".white", "url(/images/banpei_uk.png)")

                // 得点表を更新
                score("w");
                // totalStrategyPoint表を更新
                strategyPoint();
                // お知らせを消す
                notice("");

                // console.log("gameControl();に行くはず？");
                gameControl("b");
            })
        }
    }


    
}
