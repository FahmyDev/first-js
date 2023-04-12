const biodata = {
    NamaDepan: "Atep", 
    NamaBelakang: " Fahmi Albanani ", 
    Umur: 19,
    Nim: 2022010032,
    ttl: " Garut, 07 Februari 2004 ",
    Prodi: " Rekayasa Perangkat Lunak "
};
const biodata2 = {
    NamaDepan: "Bagus",
    NamaBelakang: " Fadly Hidayatullah ",
    Umur: 20,
    Nim: 2022010027,
    ttl: "Jepara, 26 Agustus 2003 ",
    Prodi: "Rekayasa Perangkat Lunak "
};

document.getElementById("1").innerHTML = 
"Biodata 1 <br>" + biodata.NamaDepan + biodata.NamaBelakang + "<br>" +biodata.Umur + " "+ "<br>" + biodata.Nim+ "<br>" + biodata.ttl+ "<br>" + biodata.Prodi;
document.getElementById("2").innerHTML = 
"Biodata 2 <br>" + biodata2.NamaDepan + biodata2.NamaBelakang + "<br>" +biodata2.Umur + " "+ "<br>" + biodata2.Nim+ "<br>" + biodata2.ttl+ "<br>" + biodata2.Prodi;