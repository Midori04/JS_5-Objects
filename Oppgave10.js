let bilfirma = {
    Firmanavn: "Mechanix",
    Antallansatte: "50",
    billiste: ['Mazda', "BMW"],
    nettside: "www.christoffersCars.com"
    };

        

function skriveUt(params) {
    console.log(bilfirma.billiste[params]);

}

skriveUt(0)