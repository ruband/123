/**
 * Created by user on 10.03.2017.
 */

var firstName = prompt('Введите Ваше имя'),
    middleName = prompt('Введите Ваше отчество'),
    lastName = prompt('Введите Вашу фамилию'),
    age = prompt('Ваш возраст:'),
    ageinDay = parseInt(age) * 365,
    ageFutureInt = 5 + parseInt(age),
    pensionAgeWomen = 55,
    pensionAgeMale = 60;


var gender = confirm('Ваш пол мужской?') ? 'мужской' : 'женский';
var naPensii = ((gender==='мужской' && age>=pensionAgeMale) || (gender==='женский'&&age>=pensionAgeWomen))? 'да' : 'нет';

alert('ваше ФИО: ' + lastName + ' ' + firstName + ' ' + middleName + '\nваш возраст в годах: ' + age +
    '\nваш возраст в днях: ' + ageinDay + '\nчерез 5 лет вам будет: ' + ageFutureInt + '\nваш пол: ' + gender + '\nвы на пенсии: ' + naPensii);



