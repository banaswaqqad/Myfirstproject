var age = prompt("enter your age please");
var hight = prompt("enter your hight please");
var weight = prompt("enter your weight");

if((age> 12 && hight>150 &&   50<=weight<150) || (age<12&& hight>150 &&   50<=weight<150   ) )   ;
{
alert("go ahead , enjoy your time");
}

elseif ((age <12 && age >65 && hight<150 && weight<50  )||(age>12 && hight<150 && weight<50) ||(age>12 && hight>150 && weight>150) )
{
    alert("sorry you can't play ");
}

var element1 = age;
var element2=hight;
var element3=weight;
var element4 = document.getElementById('result');
element4.innerText='this is your info '+ ' age = '+  element1 + 'hight =' + element2 + 'weight =' + element3


