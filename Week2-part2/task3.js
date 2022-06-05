const dataArr = [7,8,10,11,80,90];

function seleksiNilai(firstNum,lastNum,arr) {
    let hasil = [];
    if(arr.length  < 6 ) {
        return  "jumlah angka dalam dataArray harus lebih dari 5" 
    }  else if(firstNum > lastNum) {
        return "nilai akhir harus lebih besar dari nilai awal"
    } else {
        for(x of arr) {
            if(x > firstNum && x < lastNum) {
                hasil.push(x)     
            }
        }
        if(hasil.length == 0) {
            return "nilai tidak ditemukan";
        } else {
            return hasil.sort((a,b) => a - b)
        }
    } 
}


console.log(seleksiNilai(5, 30, [2, 25, 4, 14, 17, 30, 8]))