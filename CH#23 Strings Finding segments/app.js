var sentence="It is a long established  be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ";
var sindex=sentence.indexOf("long");
console.log(sindex);
var _sindex=sentence.indexOf("lorem ipsum");
console.log(_sindex);
if(sindex!==-1)
{
    sentence=sentence.slice(0,sindex)+" FARHAN "+sentence.slice(sindex+6);
    sentence=sentence.slice(0,_sindex)+" FARHAN Bashir "+sentence.slice(_sindex+13);
}
console.log(sentence);