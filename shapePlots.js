canvas = {
    width: 240,
    height: 240,
    pos_y: 240 / 2 - 40,
    neg_y: 240 / 2 + 40,
    cl_w: 240 / 8,
}

function drawShapes1(num) { //Амплітудна модуляція
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '0') {
            for (i = 0; i < canvas.width / 8; i++) {
                step = i * 4 * Math.PI / 30.0;
                vertex(i + k * canvas.width / 8, canvas.height / 2 + 5 * Math.sin(step));
            }
        } else {
            for (i = 0; i < canvas.width / 8; i++) {
                step = i * 4 * Math.PI / 30.0;
                vertex(i + k * canvas.width / 8, canvas.height / 2 + 10 * Math.sin(step));
            }
        }
    }
    endShape();
}

function drawShapes2(num) { //Частотна модуляція
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '0') {
            for (i = 0; i < canvas.width / 8; i++) {
                step = i * 4 * Math.PI / 30.0;
                vertex(i + k * canvas.width / 8, canvas.height / 2 + 5 * Math.sin(step * 2));
            }
        } else {
            for (i = 0; i < canvas.width / 8; i++) {
                step = i * 4 * Math.PI / 30.0;
                vertex(i + k * canvas.width / 8, canvas.height / 2 + 5 * Math.sin(step));
            }
        }
    }
    endShape();
}

function drawShapes3(num) { //Фазова модуляція
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '0') {
            for (i = 0; i < canvas.width / 8; i++) {
                step = i * 4 * Math.PI / 30.0;
                vertex(i + k * canvas.width / 8, canvas.height / 2 + 5 * Math.sin(step));
            }
        } else {
            for (i = 0; i < canvas.width / 8; i++) {
                step = i * 4 * Math.PI / 30.0;
                vertex(i + k * canvas.width / 8, canvas.height / 2 + 5 * Math.sin(step) * (-1));
            }
        }
    }
    endShape();
}

function drawShapes4(num) { //NRZ
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '0') {
            for (i = 0; i < canvas.width / 8; i++) {
                vertex(i + k * canvas.width / 8, 100);
            }
        } else {
            for (i = 0; i < canvas.width / 8; i++) {
                vertex(i + k * canvas.width / 8, 140);
            }
        }
    }
    endShape();
}

function drawShapes5(num) { //NRZI
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    isOn100 = true;
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '1') {
            isOn100 = !isOn100;
        }
        if (isOn100) {
            for (i = 0; i < canvas.width / 8; i++) {
                vertex(i + k * canvas.width / 8, 100);
            }
        } else {
            for (i = 0; i < canvas.width / 8; i++) {
                vertex(i + k * canvas.width / 8, 140);
            }
        }
    }
    endShape();
}

function drawShapes6(num) { //AMI
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    isOn100 = true;
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '0') {
            for (i = 0; i < canvas.width / 8; i++) {
                vertex(i + k * canvas.width / 8, canvas.height / 2);
            }
        } else {
            isOn100 = !isOn100;
            if (isOn100) {
                for (i = 0; i < canvas.width / 8; i++) {
                    vertex(i + k * canvas.width / 8, 100);
                }
            } else {
                for (i = 0; i < canvas.width / 8; i++) {
                    vertex(i + k * canvas.width / 8, 140);
                }
            }
        }
    }
    endShape();
}

function drawShapes7(num) { //Біполярний імпульсний код
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '1') {
            line(k * canvas.width / 8, 100, k * canvas.width / 8, canvas.height / 2);
            line(k * canvas.width / 8, 100, k * canvas.width / 8 + 15, 100);
            line(k * canvas.width / 8 + 15, 100, k * canvas.width / 8 + 15, canvas.height / 2);
            line(k * canvas.width / 8 + 15, canvas.height / 2, k * canvas.width / 8 + 30, canvas.height / 2);
        } else {
            line(k * canvas.width / 8, 140, k * canvas.width / 8, canvas.height / 2);
            line(k * canvas.width / 8, 140, k * canvas.width / 8 + 15, 140);
            line(k * canvas.width / 8 + 15, 140, k * canvas.width / 8 + 15, canvas.height / 2);
            line(k * canvas.width / 8 + 15, canvas.height / 2, k * canvas.width / 8 + 30, canvas.height / 2);
        }
    }
}

function drawShapes8(num) { //2B1Q
    drawGrid(num);
    noFill();
    stroke(90);
    strokeWeight(2.0);
    strokeJoin(ROUND);
    beginShape();
    for (k = 0; k < 8; k += 2) {
        if (num.charAt(k) == '1' && num.charAt(k + 1) == '0') {

            vertex(k * canvas.width / 8, 80)
            vertex(k * canvas.width / 8 + 60, 80)
        } else if (num.charAt(k) == '1' && num.charAt(k + 1) == '1') {

            vertex(k * canvas.width / 8, 110)
            vertex(k * canvas.width / 8 + 60, 110)

        } else if (num.charAt(k) == '0' && num.charAt(k + 1) == '0') {

            vertex(k * canvas.width / 8, 160)
            vertex(k * canvas.width / 8 + 60, 160)

        } else {

            vertex(k * canvas.width / 8, 130)
            vertex(k * canvas.width / 8 + 60, 130)
        }
    }
    endShape();
}

function drawShapes9(num) { //Манчестерський код
    drawGrid(num);
    stroke(90);
    strokeWeight(2.0);
    z = 0;
    canvas.pos_y = 80
    canvas.neg_y = 160
    canvas.cl_w = 30
    currentLevelHigh = false;
    for (k = 0; k < 8; k++) {
        if (num.charAt(k) == '0') {
            if (currentLevelHigh) {
                line(z, canvas.pos_y, z + canvas.cl_w / 2, canvas.pos_y);
                z += canvas.cl_w / 2;
                line(z, canvas.pos_y, z, canvas.neg_y);
                line(z, canvas.neg_y, z + canvas.cl_w / 2, canvas.neg_y);
                z += canvas.cl_w / 2;
                currentLevelHigh = false;
            } // inner if
            else {
                line(z, canvas.neg_y, z, canvas.pos_y);
                line(z, canvas.pos_y, z + canvas.cl_w / 2, canvas.pos_y);
                z += canvas.cl_w / 2;
                line(z, canvas.pos_y, z, canvas.neg_y);
                line(z, canvas.neg_y, z + canvas.cl_w / 2, canvas.neg_y);
                z += canvas.cl_w / 2;
                currentLevelHigh = false;
            } // inner else
        } else if (num.charAt(k) == '1') {
            if (currentLevelHigh) {
                line(z, canvas.pos_y, z, canvas.neg_y);
                line(z, canvas.neg_y, z + canvas.cl_w / 2, canvas.neg_y);
                z += canvas.cl_w / 2;
                line(z, canvas.neg_y, z, canvas.pos_y);
                line(z, canvas.pos_y, z + canvas.cl_w / 2, canvas.pos_y);
                z += canvas.cl_w / 2;
                currentLevelHigh = true;
            } // inner if
            else {
                line(z, canvas.neg_y, z + canvas.cl_w / 2, canvas.neg_y);
                z += canvas.cl_w / 2;
                line(z, canvas.neg_y, z, canvas.pos_y);
                line(z, canvas.pos_y, z + canvas.cl_w / 2, canvas.pos_y);
                z += canvas.cl_w / 2;
                currentLevelHigh = true;
            } // else with inner if
        } // outer if
    } // for loop
}
