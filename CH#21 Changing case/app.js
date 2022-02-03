var cityName=prompt("enter City Name: ",);
cityName=cityName.toLowerCase();
var city=["multan","lahore","quetta","islamabad","karachi","gilgit"];
var matchFound=false;
for(var i=0;i<city.length;i++)
{
    if(cityName==="quetta")
    {
        matchFound=true;
        alert(cityName+" is cleanest city");
        break;
    }
}
if(matchFound===false)
{
    alert("city not found");
}
// ToLowwerCase()

var _name=prompt("Enter Your Name",);
_name=_name.toLowerCase();
document.write(_name+"<br>");

// toUpperCase()
var _name1=prompt("Enter Your Name",);
_name1=_name1.toUpperCase();
document.write(_name1);