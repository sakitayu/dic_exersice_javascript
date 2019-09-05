$(document).ready(function(){
  // コードの意味を記述① → HTML=DOMの読み込みが終わったらfunction(){ ~ }の中の処理を実行する
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          // コードの意味を記述④ → IDが"national_language"の入力フォームの中のvalue値を取得
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
                          // コードの意味を記述⑤ → 取得した点数を数値に変換して処理

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    // コードの意味を記述⑥ → IDが"sum_indicate"のlabelタグで囲った部分に5教科の合計点を追加

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average = sum / 5

    $("#average_indicate").text(average);
  };

  function get_achievement(){

    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    let average = sum / 5

    if (average >= 80) {
      $("#evaluation").text("A");
    } else if (average >= 60) {
      $("#evaluation").text("B");
    } else if (average >= 40) {
      $("#evaluation").text("C");
    } else {
      $("#evaluation").text("D");
    }
  }

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let n_lang = subject_points[0];
    let eng = subject_points[1];
    let math = subject_points[2];
    let sci = subject_points[3];
    let soc = subject_points[4];
    if (n_lang >= 60 && eng >= 60 && math >= 60 && sci >= 60 && soc >= 60) {
      $("#judge").text("合格");
    } else {
      $("#judge").text("不合格");
    }

  }

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    let achievement = $("#evaluation").text();
    let pass_or_failure = $("#judge").text();
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };
  // コードの意味を記述⑦ → ID ="declaration"のlabelタグで囲った部分に引数の内容を追加

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    // コードの意味を記述③ → ５教科のいずれかの点数の入力フォームが変更された場合に処理を実行
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    // コードの意味を記述② → ランクボタンがクリックされた時に処理を実行
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない
