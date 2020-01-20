// Function Constructor

/*
var john = {
    name: "john",
    yearOfBirth: 1990,
    job : 'teacher'
};

var Person = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith";

var john = new Person('john',1990,'teacher');
var jane = new Person('jane',1984,'designer');
var mark = new Person('mark',1960,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/

//Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

// 65.Passing functions as arguments

/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for(var i = 0 ; i < arr.length ; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <=81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// 66 . Functions Returning Functions

/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what is UX');
        }
    } else if ( job === 'teacher' ) {
        return function(name) {
            console.log('what subject do you teach, ' +name);
        }
    } else {
        return function(name) {
            console.log(name + ' What do you do');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var others = interviewQuestion('others');

teacherQuestion('john');
designerQuestion('john');
others('jane');

// OR

interviewQuestion('designer')('KD');

*/

//Closures

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age =2016 - yearOfBirth;
        console.log((retirementAge-age) + a);
    }
}

var retirementUS = retirement(66);

retirementUS(1990);  /* OR */ 
retirement(66)(1990);


function interviewQuestion(job) {
    var a = ', can you please explain what is UX';
    var b = 'what subject do you teach,' ;
    var c = ' What do you do' ; 
    return function(name) {
        if(job === 'designer') {
            console.log(name + a);
        } else if ( job === 'teacher' ) {
            console.log(b +name);
        } else {
            console.log(name + c);
        }
    }
}

interviewQuestion('teacher')('john');
interviewQuestion('designer')('mark');
interviewQuestion('others')('jane');





































































