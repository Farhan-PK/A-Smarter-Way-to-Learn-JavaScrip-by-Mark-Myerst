var yourPercentage= +prompt("Enter Your Percentage: ","Here!");
if(yourPercentage>=95 && yourPercentage<=100)
{
    alert("A++")
}
else if(yourPercentage>=90 && yourPercentage<95)
{
    alert("A+")
}
else if(yourPercentage>=80 && yourPercentage<90)
{
    alert("B+")
}
else if(yourPercentage>=70 && yourPercentage<80)
{
    alert("B")
}
else if(yourPercentage>=60 && yourPercentage<70)
{
    alert("C")
}
else if(yourPercentage>=50 && yourPercentage<60)
{
    alert("D")
}
else if(yourPercentage<50)
{
    if(yourPercentage<0){
        alert("Input Right yourPercentage");
    }
    else
    {
    alert("Fail")
    }
}
else
{
    if(yourPercentage<0&&yourPercentage>100){
        alert("Input Right yourPercentage");
    }
}