

var age = prompt("enter your age please");
var hight = prompt("enter your hight please");
var weight = prompt("enter your weight");

if( (age> 12) && (hight>150) &&  (50<=weight<150) )   
{
alert("go ahead , enjoy your time");
}

else ((age<12) && (hight<150) && (50>weight>150))
{
    alert("sorry you can't play ");
    console.log("your age is too small", + age );
}
