// Обьекты.
// Внизу описаны значения или свойства машины.

/*
	model,
	country,
	year,
	color,

/*/

// Порядок написания - название обьекта, оператор присваивания = и {пара: ключ-значение нашей сущности}.
// Обьект в JavaScript это набор свойств.
var carToyota = {
	model : "toyota",
	country : "japan",
	year : 2005,
	color : "red"
};
console.log(carToyota);
// Как узнать значение одного из свойств ? (допустим узнать: модель или год).
// Пишем имя нашего обьекта, через точку и указываем свойство которое находится внутри этого обьекта.
// carToyota через точку . это называется точечная запись.
var model = carToyota.model;
var country = carToyota.country;
var year = carToyota.year;
var color = carToyota.color;
console.log(model,country,year,color);

// Как изменить значение свойства нашего обьекта ?
carToyota.year = 2016;
var year = carToyota.year;
console.log(year);

// Как добавить новое свойство ?
var carLada = {
	model : "lada",
	country : "russian",
	year : 2010,
	color : "white"
};
carLada.passengers = 4;
carLada.autoTransmission = true; 
console.log(carLada); //{model: 'lada', country: 'russian', year: 2010,
// color: 'white', passengers: 4, autoTransmission: true}.

// Условия и проверка значений.
var user1 = {
	firstName : "Vasja",
	lastName : "Ivanov",
	age : 14,
	smoking : "smoker"
};

if(user1.smoking ==="smoker") {
	console.log("dont smoke please");
} else {
	console.log("dont start smoking")
};

if(user1.age === 18) {
	console.log("you are not a young boy");
} else {
	console.log("you are boy")
};

// Как удалить значение.
// При удалении удаляется пара: ключ-значение нашей сущности}.
// Если вызывать удаленное свойство то получим undefined, что означает такого не существует.
delete user1.status;
console.log(user1.status);

// Как обьект хранится в переменной ?
// В переменных не хранятся сами обьекты, в них хранятся ссылки на эти обьекты.
// Внизу user1 является ссылкой к области памяти где хранится сам обьект.
// Почему так ? потому что обьекты зачастую это огромный пакет, в переменной не хранят.
 var user1 = {
 	firstName : "Vasja",
 	lastName : "Ivanov",
 	age : 14,
 	smoking : "smoker"
}

// Точечная запись - user1.age.
// User1 является конкретно ссылка, после . обращаемся к определенному участку памяти.
// Использовать ссылку перед точкой для получения обьекта содержашего свойство после точки.
// Человек приходит в магазин за винном и если он больше 18+ то продадим.
let user2 = {
	firstName: "Andrey",
	email: "Andruha123@gmail.com",
	password: "qwerty123",
	age: 35
};

let user3 = {
	firstName: "Oksana",
	email: "Oksana123@gmail.com",
	password: "Oks123",
	age: 15
};

let user4 = {
	firstName: "Marina",
	email: "Marinka123@gmail.com",
	password: "Mari123",
	age: 23
};

// Когда передаем параметр, то должны передать и аргумент.
// И в этот параметр user будет попадать ссылки из user2, user3, user4.  
function checkAge(user){
if(user.age > 18) {
		return true;
	} else {
		return false;
	};
};

// Функции checkAge сейчас не известен в параметре user, откуда он и какой userAge.
// Функции станет известно когда мы вызовем эту функцию checkAge(user2).

// Так как сейчас из функции что то возвращаем, то надо результат закинуть в переменную,
// в которую мы присвоим результат этой функции.
// Когда передаем параметр, то должны передать и аргумент.
let totalResult = checkAge(user3);
if(totalResult) {
	console.log(" я могу продать вам вино ! " + user3.firstName);
	}else {
		console.log(" я не могу продать вам вино, вам нет 18 ! " + user3.firstName)
};

// В качестве значения у свойства - может быть все что угодно.
// Даже функция может хранится в обьекте.
// В обьекте есть свойства и методы.

// Свойства это то что описывает нашу сущность (отвечает на вопрос: что это? кто это?) => 
// : настроение, год, сколько лет и тд.

// Методы это то что делает наша сущность (отвечает на вопрос: что делает? что умеет?) =>
// пишется так же как свойства.

// Метод это та же функция, только она находится внутри обьекта.
let leopold = {
	animal: "cat",
	age: 4,
	country: "russia",
	hungry: true,
	mood: "sad",
	eat: function(){
		hungry = false;
		mood : "cheerful";
		console.log("Спасибо хозяин");
		console.log(hungry);
	}
};

leopold.eat();

let mood = leopold.mood;
let eat = leopold.eat(); // чтобы метод заработал внутри обьекта надо ставить ().
console.log(eat);
	console.log("method works");
		hungry = false;
		mood = "cheerful";
console.log(mood); //sad

// Math.Round() - это тоже самое что что и обьект Leopold и метод eat:function().
// Math - обьект. Round - свойство.

// Ключевое слово This.
// This - это текущий обьект с которым мы работаем.
// This можно представить в виде переменной, значение которой присваивается текущий обьект.
// 	this.hungry = false;
// 	this.mood = "cheerful";
// 	console.log("Спасибо хозяин");
// leopold.eat();
// console.log(leopold.hungry); false
// console.log(leopold.mood); cheerful

let User1 = {
	firstNamer : "Vova",
	secondNamer : "Popov",
	age : 13,
	sayHello : function(){
		console.log("Vsem privet ot " + this.firstNamer);
	}
}

let User2 = {
	firstNamer : "Vlad",
	secondNamer : "Malofeev",
	age : 27,
	sayHello : function(){
		console.log("Vsem privet ot " + this.firstNamer);
	}
}


let User3 = {
	firstNamer : "Olga",
	secondNamer : "Dobrotnaja",
	age : 38,
	sayHello : function(){
		console.log("Vsem privet ot " + this.firstNamer);
	}
}

// Функция внутри обьекта с ключевым слово this и ее вызов,
// все равно что написать user1.firstNamer. 
User1.sayHello();
User2.sayHello();
User3.sayHello();

// Оператор In.
// Проверяет, есть ли это свойство в обьекте или нет,
// и возвращает true или false.
let objectUser = {
	name: "Nikolay",
	age: 18,
};
// Проверка существует ли свойство в обьекте.
console.log(objectUser.status === undefined); // Существует ли свойство ? выводит - true.
console.log("status" in objectUser); //false.

// Упорядочены ли свойства в обьекте.
/*Свойства сортируются таким образом что если в качестве ключей будут идти целочисленные значения,
то они будут сортироваться по возрастанию.
Остальные же ключи будут располагаться в порядке их записи внутр объекта.
*/
let team1 = {
	2: "Artem Nikolajev",
	44: "Silvestr Mahmudanov",
	58: "Roberto Ignatjev",
	7: "Pikaldinjo",
	10: "Artem Nebesov",
	37: "Mammedov"
};
for(player in team1){
	console.log(player + " : " + team1[player]);
	/*
	2 : Artem Nikolajev
	7 : Pikaldinjo
	10 : Artem Nebesov
	37 : Mammedov
	44 : Silvestr Mahmudanov
	58 : Roberto Ignatjev
	*/
};

// Сравнение обьектов.
// Прировнял переменную a и b.
var a = "word";
var b = a;
console.log(b);
console.log(a == b); //word & true.

// Сравнение обьектов теперь.
// В ссылке q хранятся значения, затем приравниваем ссылку b и она хранит те же значения.
// При копировании переменной дублируется ключ но не сам ящик. 
var q = {
	firstKey: "word1",
	secondKey: "word2",
	thirdKey: "word3",
};

var w = {
	firstKey: "word1",
	secondKey: "word2",
	thirdKey: "word3",
};

// var b = q;
// console.log(b); //true.
console.log(q == w); //false - (но тут две разные области памяти).