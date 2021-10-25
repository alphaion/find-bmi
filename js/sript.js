function myBmi() {

    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;

    var weight = parseFloat(w);
    var height = parseFloat(h);

    // console.log("Weight: ",typeof(weight));
    // console.log("height: ",typeof(height));

    //main code

    bmi = ((weight) / (height) ** 2); //bmi formula

    var res = (bmi.toString().slice(0, 5)); //string value to slice number

    var res = parseFloat(res); //float value

    if (w == "" || h == "") {
        message = "Invalid";
        document.getElementById("message").innerHTML = message;
        res = "Does not Exist";
        document.getElementById("output").innerHTML = res;
    }

    if (weight <= 0 || height <= 0) {
        message = "Invalid";
        document.getElementById("message").innerHTML = message;
        res = "Does not Exist";
        document.getElementById("output").innerHTML = res;
    }

    if (res < 16) {
        message = "Severe Thinness";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#30336B");
    }

    if (res > 16 && res < 17) {
        message = "Moderate Thinness";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#0A79DF");
    }

    if (res > 17 && res < 18.5) {
        message = "Mild Thinness";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#3498DB");
    }

    if (res > 18.5 && res < 25) {
        message = "Normal";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#26ae60");
    }

    if (res > 25 && res < 30) {
        message = "Over weight";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#FDD835");
    }

    if (res > 30 && res < 35) {
        message = "Obese Class I";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#F57C00");
    }

    if (res > 35 && res < 40) {
        message = "Obese Class II";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#E64A19");
    }

    if (res > 40) {
        message = "Obese Class III";
        document.getElementById("message").innerHTML = message;
        document.getElementById("output").innerHTML = res; //result
        $("body").css("background", "#B83227");
    }
}