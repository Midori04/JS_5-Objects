let bilfirma = {
    Firmanavn: "Mechanix",
    Antallansatte: "50",
    billiste: ['Mazda', "BMW"]
    };

console.log(bilfirma);
console.log(bilfirma.billiste);

bilfirma.billiste.shift("index");
console.log(bilfirma.billiste);