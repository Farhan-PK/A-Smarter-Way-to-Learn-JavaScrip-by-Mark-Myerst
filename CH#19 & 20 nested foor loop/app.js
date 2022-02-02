var cities=["multan","lahore","karachi","pindi"];
var matchFound=false;
for(var i=0;i<cities.length;i++)
{
    if(cities[i]==="karachi")
    {
        matchFound=true;
        alert(cities[i]+" is best city");
        break;
    }
}
if(matchFound==false)
{
    alert("city is not found");
}

// Nested loop

var fName=["Abid","Ali","Shano"];
var lName=["Abid1","Ali1","Shano1"];
for(var i=0;i<fName.length;i++)
{
    for(var j=0;j<lName.length;j++)
    {
        console.log(fName[i]+" "+lName[j]);
    }
}
