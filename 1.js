window.onload = function ()
{
newObj =  
[
    {
        "id" : "1",
        "name": "Mamat",
        "wilayah": "Kebayoran Lama",
        "telp": "021",
        "Shift": "1"
    },
    {
        "id" : "2",
        "name": "Joni",
        "wilayah": "Palmerah",
        "telp": "089",
        "Shift": "2"
    },
    {
        "id" : "3",
        "name": "Saipul",
        "wilayah": "Kebon Keruk",
        "telp": "070",
        "Shift": "3"
    },
    {
        "id" : "4",
        "name": "Opi",
        "wilayah": "Kemanggisan",
        "telp": "001",
        "Shift": "2"
    },
    {
        "id" : "5",
        "name": "Udin",
        "wilayah": "Tanjung Duren",
        "telp": "054",
        "Shift": "3"
        
    },
    {
        "id" : "6",
        "name": "Dudung",
        "wilayah": "Grogol",
        "telp": "099",
        "Shift": "1"
    },
]

objBaru =  
[
    {
        "id" : "8",
        "name": "Baru",
        "wilayah": "Kebayoran Baru",
        "telp": "028",
        "Shift": "2"
    },
]

console.log(newObj);
console.log(objBaru);

    //var myObj = {"id":"1", "name":"satu"}; 
    var x, y, z;
    var i;
    var id = "";
    var name = "";
    var wilayah = "";
    var Shift = "";
    var telp = "";

    //ubah data json
    y = newObj[1].id = 100;
    document.getElementById("testing").innerHTML=y;

    //hapus data json
    z= "";
    z = delete newObj[6];
    document.getElementById("coba").innerHTML = z;

    //hitung panjang dijumlahkan
    document.getElementById("lagi").innerHTML = newObj.length + objBaru.length;

    /*var key;
    var item;*/
    /*newObj.forEach(function (item) {
        // print the object
        console.log(item);
        
        // print each object property individually
        for (key in item) {
            console.log(key, ':', item[key]);
            document.write("<h5>", key, ': ', item[key], "</h5>");
        }
    });*/
    
    //masukkan data json
    for (obj of newObj)
    {
        id += obj.id + " " + "<br>";
        name += obj.name + " " + "<br>";
        wilayah += obj.wilayah + " " + "<br>";
        telp += obj.telp + " " + "<br>";
        Shift += obj.Shift + " " + "<br>";
        
        document.getElementById("satu").innerHTML = id;
        document.getElementById("dua").innerHTML = name;
        document.getElementById("tiga").innerHTML = wilayah;
        document.getElementById("empat").innerHTML = telp;
        document.getElementById("lima").innerHTML = Shift;
    }

    //utk json objBaru
    /*var newID = "";
    var newName = "";
    var newWilayah = "";
    var newTelp = "";
    var newShift = "";*/
    for (objN of objBaru)
    {
        id += objN.id + " " + "<br>";
        name += objN.name + " " + "<br>";
        wilayah += objN.wilayah + " " + "<br>";
        telp += objN.telp + " " + "<br>";
        Shift += objN.Shift + " " + "<br>";

        document.getElementById("satu").innerHTML = id;
        document.getElementById("dua").innerHTML = name;
        document.getElementById("tiga").innerHTML = wilayah;
        document.getElementById("empat").innerHTML = telp;
        document.getElementById("lima").innerHTML = Shift;
    }
};

