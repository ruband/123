/**
 * Created by user on 10.03.2017.
 */
var firstName = prompt('Введите Ваше имя'),
    middleName = prompt('Введите Ваше отчество'),
    lastName = prompt('Введите Вашу фамилию'),
    age = prompt('Ваш возраст:'),
    ageinDay = parseInt(age) * 365,
    ageFutureInt = 5 + parseInt(age),
    isMale = confirm('Ваш пол мужской?'),
    gender,
    pensionAge = 60,
    naPensii = 'нет';
if (isMale) {
    gender = 'мужской';
}
else
{
    gender = 'женский'
}
if (!isMale) {
    pensionAge = 55;
}
if (age >= pensionAge) {
    naPensii = 'да';
}
alert('ваше ФИО: ' + lastName + ' ' + firstName + ' ' + middleName + '\nваш возраст в годах: ' + age + '\nваш возраст в днях: ' + ageinDay +
    '\nчерез 5 лет вам будет: ' + ageFutureInt + '\nваш пол: ' + gender + '\nвы на пенсии: ' + naPensii);