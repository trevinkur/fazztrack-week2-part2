// Soal 1

/*
1. Method Split
 method split merupakan methode pada string untuk memisahkan kata-kata
 dan membuatnya menjadi array.

 method split mengambil 2 parameter hanya satu parameter yang wajib
 parameter kedua adalah opsional
 parameter satu merupakan pemisah kata, dan
 mengambil string sebagai argumentnya
 lalu mereturn array
  
*/

const hobbies = "makan, gaming, tidur"
const wadah = hobbies.split(",")

console.log(wadah)

/* 2. Method concat()

concat methode merupakan methode pada string dan array untuk menggabungkan dua string/array yang berbeda
dan mereturn string/array baru

concat memiliki parameter yang dimana 
parameter tersebut mengambil string/array sebagai argumentnya
*/

const perkenalan = "Halo nama saya"
const nama = "mokey";

let tampilPerkenalan = perkenalan.concat(" ", nama);

console.log(tampilPerkenalan)

/* 3 methode slice 

metode slice merupakan methode pada string dan array untuk
mengambil sebagian porsi pada string dan menaruhnya pada string baru

methode slice memiliki 2 parameter yang pertama
index awal dan yang kedua index akhir
parameter index akhit opsional

*/

const perkenalan2 = "halo nama saya mokey"
const nama2 = perkenalan2.slice(15,perkenalan2.length);

console.log(nama2)

/* 
4. Method push
methode push merupakan methode pada array untuk
menambah element baru pada array diakhir index
jumlah parameter yang bisa dimasukan sesuai dengan 
argument ke-n   
*/

const array = [];
array.push("Makan");

console.log(array)

/* 5. Method pop
Method pop adalah method pada array untuk menghilangkan
element terakhir pada array. method ini mengubah jumlah isi array

*/

const arr = ["Terminator", "The War of the World", "Man in Black"];
arr.pop();

console.log(arr)

/* 6. Method shift
Method shift adalah method pada array untuk menghilangakan element
pertama pada array. method ini mengubah panjang array

*/
const student = ["Ahmad", "Bagus", "Rezky"];
student.shift();

console.log(student)

/* 
7. method toString 
method toString digunakan untuk  mengubah tipe data menjadi string
*/

let number = 31;
let num2 = number.toString()

console.log(typeof num2)
/* 
8. toFixed
method tofixed digunakan untuk menformat jumlah angka setelah decimal

*/
let num = 2.345;
let newNum = num.toFixed(2);

console.log(newNum)

/*
9. object.create
object.create merupakan method pada object untuk membuat object baru menggunakan 
object yang sudah ada sebagai prototypenya
parameternya diisi dengan object induknya
*/

const Person = {
    nama: "",
    perkenalan: function() {
        return `Halo nama saya ${this.nama}`
    }
}

const saya = Object.create(Person);
saya.nama = "Mokey";
let greeting = saya.perkenalan()

console.log(saya)
console.log(greeting)


/* 
10. Method toLowecase
mengubah seluruh huruf kapital menjadi lowercase/ huruf kecil

*/
const title = "The Girl Who Leap Through Time"
let lower = title.toLowerCase();

console.log(lower)







