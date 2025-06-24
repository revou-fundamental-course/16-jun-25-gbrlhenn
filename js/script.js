function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = 0.5 * alas * tinggi;
    document.getElementById("hasilLuas").innerText = "Luas Segitiga: " + luas;
}

function resetLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasilLuas").innerText = "";
}

function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
    var sisiC = parseFloat(document.getElementById("sisiC").value);
    var keliling = sisiA + sisiB + sisiC;
    document.getElementById("hasilKeliling").innerText = "Keliling Segitiga: " + keliling;
}

function resetKeliling() {
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("hasilKeliling").innerText = "";
}
