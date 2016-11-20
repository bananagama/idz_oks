function setup() {
    var myCanvas = createCanvas(240, 240);
    var num = String(document.getElementById("myNum").value);
    myCanvas.parent('mycontainer');
    drawGrid(num);
}

function capture() {
    var currentdate = new Date();
    var fileName = "Графік модуляції " + currentdate.getDate() + "-" +
        (currentdate.getMonth() + 1) + "-" +
        currentdate.getFullYear() + " " +
        currentdate.getHours() + "-" +
        currentdate.getMinutes() + "-" +
        currentdate.getSeconds();
    saveCanvas(fileName, 'png');
}

function drawGrid(num) {
    clear();
    background(225);
    strokeWeight(1)
    stroke(170);
    line(0, 0, canvas.width, 0);
    line(0, canvas.height / 2, canvas.width, canvas.height / 2);
    line(0, canvas.height, canvas.width, canvas.height);
    line(canvas.width / 2, 0, canvas.width / 2, canvas.height);
    line(canvas.height - 1, 0, canvas.height - 1, canvas.height - 1);
    line(0, canvas.height - 1, canvas.height - 1, canvas.height - 1);
    for (i = 0; i < canvas.width + 1; i += canvas.width / 8) {
        line(i, 0, i, canvas.height);
    }
    textSize(14);
    fill(30);
    for (k = 0; k < 8; k += 1) {
        text(num.charAt(k), k * canvas.width / 8 + canvas.width / 8 - 20 + 1, canvas.width / 8 - 10)
    }
}

function showInfo(i) {
    document.getElementById("nameGraph").innerHTML = data[i].title + "<span>*</span>";
    document.getElementById("desc").innerHTML = "* — " + data[i].content;
}

function numIsCorrect(num) {
    document.getElementById("err").innerHTML = ""
    if (num.length != 8) {
        document.getElementById("err").innerHTML = "Число некоректне"
        return false;
    }
    for (i = 0; i < 8; i++)
        if (!(num.charAt(i) == '0' || num.charAt(i) == '1')) {
            document.getElementById("err").innerHTML = "Число некоректне"
            return false;
        }
    return true;
}

function Graph(task) {
    var num = String(document.getElementById("myNum").value);
    document.getElementById("nameGraph").innerHTML = "Модуляція";
    document.getElementById("desc").innerHTML = "";
    if (numIsCorrect(num)) {
        showInfo(task)
        switch (task) {
            case 1: //Амплітудна модуляція
                drawShapes1(num);
                break;
            case 2: //Частотна модуляція
                drawShapes2(num);
                break;
            case 3: //Фазова модуляція
                drawShapes3(num);
                break;
            case 4: //NRZ
                drawShapes4(num);
                break;
            case 5: //NRZI
                drawShapes5(num);
                break;
            case 6: //AMI
                drawShapes6(num);
                break;
            case 7: //Біполярний імпульсний код
                drawShapes7(num);
                break;
            case 8: //2B1Q
                drawShapes8(num);
                break;
            case 9: //Манчестерський код
                drawShapes9(num);
                break;
        }
    }
}
