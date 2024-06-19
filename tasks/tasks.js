// TASK 1.
// Необходимо создать пустой объект.
// Пускай это будет объект вашего любимого актера. 
// Добавьте в объект свойства через точечную запись: 
// имя, возраст, пол, фильмы(массив), семейное положение(boolean).
// А потом извне удалите последнее свойство.
let films = ["pirates", "pirates on strange tides", "pirates3"];

let favoriteActor = {
};

favoriteActor.firstName = "Johnnny";
favoriteActor.lastName = "Depp";
favoriteActor.gender = "male";
favoriteActor.filmography = films,
favoriteActor.familyStatus = true;

delete favoriteActor.familyStatus;
console.log(favoriteActor);

// TASK 2.
// Необходимо написать функцию, которая проверяет является ли объект пустым или нет.
let objClear = {};
function checkObj(obj){
if(Object.keys(obj).length === 0) {
	console.log("obj is clear");
} else {
	console.log("obj is not clear")
};
};

checkObj(objClear);

// TASK 3.
// Дан объект. Напишите функцию, которая вернёт имя самого высокооплачиваемого работника.
let staff = {
	'Ivan' : 2000,
	'Andrey' : 1440,
	'Marina' : 5187,
	'Oleg' : 3309,
	'Anna' : 2304,
	
};

function returnHighestPaidStaff(){
	let hightPaid = Math.max(...Object.values(staff));
	for(let name in staff){
		if(staff[name] === hightPaid){
			console.log(name + " is the highest paid staff with salary : " + hightPaid);
		};
	};
};

returnHighestPaidStaff(staff);

// TASK 4.
// Необходимо написать МЕТОД , который будет находить женщин
// и в качестве премии прибавит им 10 процентов к зарплате.
// В итоге исходный объект и его свойства должны измениться с учетом премий.
 var staffWithGender = {
        'Ivan' : {salary: 2000, gender: 'male'},
        'Andrey' : {salary: 1440, gender: 'male'},
        'Marina' : {salary: 5187, gender: 'female'},
        'Oleg' : {salary: 3309, gender: 'male'},
        'Anna' : {salary: 2304, gender: 'female'},
		findWomen: function() {
			for(let women in staffWithGender){
				if(this[women].gender === 'female' && typeof this[women] === 'object'){
					let originalNumber = this[women].salary;
					let increasedNumber = Math.floor(originalNumber * 1.10);
					this[women].salary = increasedNumber;
				} else if (staffWithGender[women].length < 1) {
					console.log(staffWithGender);
				};
			};
		}
};

staffWithGender.findWomen();

// Старый код, закоментировал для себя.

// for(key in staffWithGender){
// 	if(staffWithGender[key].gender === 'female'){
// 		if(staffWithGender[key].gender && staffWithGender[key].salary){
// 			staffWithGender[key].salary += + 10;
// 			console.log(staffWithGender);
// 		}
// 	};
// };

// TASK 5.
// Создайте объект. Пускай это будет объект вашего любимого музыкального исполнителя.
// Внутри объекта опишите этого испольнителя
// (Имя, пол, возраст, рост,список самых популярных песен),
// и создайте внутри объекта метод. 
// Этот метод должен выводить в консоль всю информацию об этом артисте.
// Каждое свойство должно выводиться на отдельной строке.

let favMusician = {
	name: "Hans Zimmer",
	gender: "male",
	age: 43,
	height: 173,
	songList: "Time Inception, Dark Knight, Transformers",
	returnProperty: function(){
		for(let list in this){
			if(typeof this[list] !== 'function'){
				console.log(list  + " : " + this[list]);
			};
		};
	}
};

favMusician.returnProperty();

