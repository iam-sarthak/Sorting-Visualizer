var stick_body = document.getElementById('stickbody');
var div_sizes = [];
var divs = [];
var margin_size;
var array_size = 0;
let tag_speed = document.getElementById("speed");

function generate_array() {
    stick_body.innerHTML = "";
    div_sizes = [];
    divs = [];
    array_size = document.getElementById("arraylength").value;
    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (100)) + 10;
        divs[i] = document.createElement("div");
        stick_body.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " text-align:center; margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "0px;";
        divs[i].innerHTML = div_sizes[i];
    }
}

function customarray() {
    stick_body.innerHTML = "";
    div_sizes = [];
    divs = [];
    array_size = document.getElementById("arraylength").value;
    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = prompt('Enter array Element ' + (i+1));
        divs[i] = document.createElement("div");
        stick_body.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " text-align:center; margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "0px;";
        divs[i].innerHTML = div_sizes[i];
    }
}

// var delay_time = 10000 / (Math.floor(array_size / 10) * 100);       
var c_delay = 0;
function div_update(cont, height, color) {
    var delay_time = 10000 / (Math.floor(array_size / 10) * Number(tag_speed.value));

    window.setTimeout(function () {
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "0px; background-color:" + color + ";";
        cont.innerHTML = height;

    }, c_delay += delay_time);
}


function Bubble_sort() {
    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow");//Color update

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red");//Color update
                div_update(divs[j + 1], div_sizes[j + 1], "red");//Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red");//Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red");//Height update
            }
            div_update(divs[j], div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j], div_sizes[j], "green");//Color update
    }
    div_update(divs[0], div_sizes[0], "green");//Color update
console.log(div_sizes);
    // enable_buttons();
}



function selectionsort() {


    // One by one move boundary of unsorted subarray
    for (let i = 0; i < divs.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        div_update(divs[i], div_sizes[i], "yellow");

        for (let j = i + 1; j < divs.length; j++) {
            div_update(divs[j], div_sizes[j], "yellow");//Color update
            if (div_sizes[j] < div_sizes[min_idx]) {
                div_update(divs[min_idx], div_sizes[min_idx], "blue");//Color update

                min_idx = j;
                div_update(divs[j], div_sizes[j], "red");//Color update
                continue;
            }
            div_update(divs[j], div_sizes[j], "blue");//Color update
        }
        // Swap the found minimum element with the first element

        // swap(arr, min_idx, i);
        div_update(divs[i], div_sizes[i], "red");//Color update
        div_update(divs[min_idx], div_sizes[min_idx], "red");//Color update

        var temp = div_sizes[i];
        div_sizes[i] = div_sizes[min_idx];
        div_sizes[min_idx] = temp;

        div_update(divs[i], div_sizes[i], "green");//Height update
        div_update(divs[min_idx], div_sizes[min_idx], "blue"); //Height update

    }
}



function insertionSort() {
    for (var j = 0; j < div_sizes.length; j++) {
        div_update(divs[j], div_sizes[j], "yellow");//Color update

        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "red");//Color update
            div_update(divs[i + 1], div_sizes[i + 1], "red");//Color update

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "red");//Height update
            div_update(divs[i + 1], div_sizes[i + 1], "red");//Height update

            div_update(divs[i], div_sizes[i], "blue");//Color update
            if (i == (j - 1)) {
                div_update(divs[i + 1], div_sizes[i + 1], "yellow");//Color update
            }
            else {
                div_update(divs[i + 1], div_sizes[i + 1], "blue");//Color update
            }
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(divs[t], div_sizes[t], "green");//Color update
        }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "green");//Color update
}

function Quick_sort() {
    
}

