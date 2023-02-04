function saklar(){
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");
    
    if (toggle1.checked){
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }

    if (toggle2.checked){
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";
    }

    if (toggle3.checked){
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu3.src = "assets/images/off.gif";
    }

    if (toggle4.checked){
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }

      if (toggle5.checked){
        lampu5.src = "assets/images/on.gif";
    } else {
        lampu5.src = "assets/images/off.gif";
    }

      if (toggle6.checked){
        lampu6.src = "assets/images/on.gif";
    } else {
        lampu6.src = "assets/images/off.gif";
    }

      if (toggle7.checked){
        lampu7.src = "assets/images/on.gif";
    } else {
        lampu7.src = "assets/images/off.gif";
    }

      if (toggle8.checked){
        lampu8.src = "assets/images/on.gif";
    } else {
        lampu8.src = "assets/images/off.gif";
    }

      if (toggle9.checked){
        lampu9.src = "assets/images/on.gif";
    } else {
        lampu9.src = "assets/images/off.gif";
    }

      if (toggle10.checked){
        lampu10.src = "assets/images/on.gif";
    } else {
        lampu10.src = "assets/images/off.gif";
    }
    
    
}

function saklargrup(){
    let togglekeluarga = document.getElementById("default-togglekeluarga");
    let toggletidur = document.getElementById("default-toggletidur");
    let togglemakan = document.getElementById("default-togglemakan");
    let toggletamu = document.getElementById("default-toggletamu");

    if (togglekeluarga.checked){
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        lampu3.src = "assets/images/off.gif";
    }

    if (togglemakan.checked){
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }

    if (toggletidur.checked){
        lampu5.src = "assets/images/on.gif";
        lampu6.src = "assets/images/on.gif";
    } else {
        lampu5.src = "assets/images/off.gif";
        lampu6.src = "assets/images/off.gif";
    }

    if (toggletamu.checked){
        lampu7.src = "assets/images/on.gif";
        lampu8.src = "assets/images/on.gif";
        lampu9.src = "assets/images/on.gif";
        lampu10.src = "assets/images/on.gif";
    } else {
        lampu7.src = "assets/images/off.gif";
        lampu8.src = "assets/images/off.gif";
        lampu9.src = "assets/images/off.gif";
        lampu10.src = "assets/images/off.gif";
    }
}
