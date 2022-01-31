//task 1
document.write('Kypshakova Aidana cs-2122' +'<br/>');

//task 2
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
const now = new Date();


document.write('Year:' + now.getFullYear() + '<br/>' +
'Today is:' + days[now.getDay()] + '<br/>' +
'Date:' + now.getDate() + '<br/>' +
'Month:' + months[(now.getMonth())] + '<br/>' +
'Current time is:' + now.toLocaleString('en-US' , { hour: 'numeric', hour12: true }) + ':' + now.getMinutes() + ':' + now.getSeconds());
//task3
document.write('<br/>')
var grad=new Date(2024, 7, 20);
var one_day=1000*60*60*24;
document.write(Math.ceil((grad.getTime()-now.getTime())/(one_day))+
" days left until the freedom!");

//task 4
let num1;
let num2;


let out = document.getElementById('out');




function multiplication() {
 num1 = document.getElementById('n1').value;
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)

 out.innerHTML = num1 * num2;
}


function division() {
 num1 = document.getElementById('n1').value;
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)

 out.innerHTML = num1 / num2;
}
