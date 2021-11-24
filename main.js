let products = [
    {
        category: "konyhai", 
        name: "turmix 2000", 
        price: 5000, 
        stock: 1, 
        attachments: ["fej", "motor"]
    },
    {
        category: "pipere", 
        name: "Tusfürdő", 
        price: 2000, 
        stock: 3, 
        attachments: ["valami", "masvalami"]
    },
    {
        category: "pipere", 
        name: "Sampon", 
        price: 3000, 
        stock: 8, 
        attachments: ["fej", "shoulders"]
    }
];

let customer = "Ádám";

function main() {
    console.log("it works");
    let product = products[2];
    let answer = window.confirm("Do you want a " + product.name);
    if (answer === false) {
        let answer = window.confirm("but it has " + product.attachments.join(","));
        if (answer === true) {
            console.log(products);
        }
    }
}
function inventory() {
    let stock = products[2].stock;
    let price = products[2].price;
    let value = stock * price;
    let div = document.createElement("div");
    div.innerText = products[2].name +" : " + value;
    document.body.append(div);

    stock = products[0].stock;
    price = products[0].price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[0].name +" : " + value;
    document.body.append(div);

    stock = products[1].stock;
    price = products[1].price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[1].name +" : " + value;
    document.body.append(div);

    stock = products[0].stock;
    let available = stock >= 5;
    div = document.createElement("div");
    if (available) {
        div.innerText = products[0].name +" elérhető ";
    }
    else {
        div.innerText = products[0].name +" nem elérhető ";
    }
    document.body.append(div);

    let special = customer === "Ádám";
    if (!available &&  special){
        div.innerText = div.innerText + "(De neki mégis)";
    }
}

window.addEventListener("load", inventory);