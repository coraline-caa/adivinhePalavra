player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_name =0;
player2_name = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player_question").innerHTML = "Turno de pergutas - " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de respostas - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("palavra em minusculo" + word);

    chartAt1 = word.chartAt(1);
    console.log(chartAt1);

    length_divide_2 = Math.floor(word.length/2);
    chartAt2 = word.chartAt();
    console.log(chartAt2);

    length_minus_1 = word.length -1;
    chartAt3 = word.chartAt(length_minus_1);
    console.log(chartAt3);

    remove_chartAt1 = word.replace(chartAt1, "_");
    remove_chartAt2 = remove_chartAt1.replace(chartAt2, "_");
    remove_chartAt3 = remove_chartAt2.replace(chartAt3, "_");

    question_word = "<h4 id ='word_display'> p" + removechaAt3 +"</h4>";
    input_box = "<br>Resposta: <input type= 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row = question_word + input_box +check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}