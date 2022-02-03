var sentence="It is a long established  be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ";
var slength=sentence.length
console.log(slength);
for(var i=0;i<slength;i++)
{
    if(sentence.slice(i,i+4)==="long")
    {
        sentence=sentence.slice(0,i)+" Farhan " +sentence.slice(i+4);
    }
}
console.log(sentence);

//First Letter Capital Program
var $Name=prompt("Enter Your Name: ",);
var firstName=$Name.slice(0,1);
firstName=firstName.toUpperCase();
var secName=$Name.slice(1);
secName=secName.toLowerCase();
var $Name1=firstName+secName;
console.log($Name1);