// Цикл FOFR IN.
// Цикл FOFR IN чтобы узнать все свойства обьекта.
var iphone = {
    brand : "iphone",
    model: "iphone11",
    camera: "12mpx",
    nfc: true,
    faceId: true,
    price: 1000
};
/* Синтаксис.
 (1 - название переменной key - ключ, мы пробегаемся по всем ключам в обьекте).
 (2 - ключевое слово IN).
 (3 - название обьекта по которому проходимся).
 пример - for(key in iphone).
*/ 
for(key in iphone) {
    console.log(key + ":" +iphone[key]); //Выводит ключ пару. camera: "12mpx".
    console.log(key); //все названия свойств.
    console.log(iphone[key]); // выводит все значения свойств (свойство - значение).
    // 2 способа вызвать какое то свойство и значение.
    console.log(iphone.brand); // brand: "iphone".
    let price = iphone["price"];
    console.log(price); // 1000. 
};

// Так же есть способ присваивания и тем самым можно изменять значение.
iphone["brand"] = "samsung";
console.log(iphone["brand"]);
 
// Алтернативный способ обращения к свойствам.
// Способ как добавить новое свойство.
let teach = {
    subject: "mathematics",
    age: 44,
};

teach["main hobby"] = "music";
console.log(teach);