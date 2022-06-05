const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

const searchNama = (str,num,condition) => {
    const newArr =[];
    for(x of name) {
        if(newArr.length == num) {
            break;
        }
        condition(str, x, newArr)
    
    }

    if(newArr.length == 0) {
        return "Nama tidak ditemukan"
    } else {
        return newArr
    }
    // return newArr
}

const include = (str, nama, newArr) => {
    if(nama.toLowerCase().includes(str.toLowerCase())) {
        newArr.push(nama)
    }  
}


console.log(searchNama("an",3,include))

const firstName = (str, nama, newArr) => {
    let str2 = "";
    for(let i = 0; i < str.length; i++) {
        str2 += nama[i];
    } 

    if(str2.toLowerCase() === str.toLowerCase()) {
        newArr.push(nama)
    }
}

const lastName = (str, nama, newArr) => {
    if(nama.toLowerCase().indexOf(str.toLowerCase()) === nama.length - str.length) {
        newArr.push(nama)
    }
}