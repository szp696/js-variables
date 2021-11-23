let products = [
    "Sampon", 
    "Tusfürdő", 
    {
        category: "konyhai", 
        name: "turmix 2000", 
        prise: 5000, 
        inStock: true, 
        attachments: ["fej", "motor"]
    }
];

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
window.addEventListener("load", main);