/**
 * Created by Xuchen on 8/10/15.
 */
//select by id
var section1 = document.getElementById("section1");

window.onload = getElements("233","2333");

function getElements(/*ids*/) {
    var elements = {};
    for(var i=0;i<arguments.length;i++){
        var id = arguments[i];
        var elt = document.getElementById(id);
        if(elt == null)
            throw new Error("no element with id: "+ id);
        elements[id] = elt;
    }
    console.log(elements);
    var para = document.getElementById("elt");
    para.innerHTML = elements.toString();
    return elements;
}



//select by name
var radiobutton = document.getElementsByName("favorite_color");



//select by TagName
var spans = document.getElementsByTagName("span");
    //get all <span> element

var firstpara = document.getElementsByTagName("p")[0];
var firstParaSpans = firstpara.getElementsByTagName("span");
    //get all <span>s in the first <p>



//select by className
var warnings = document.getElementsByClassName("warning");
var log = document.getElementById("log");
var fatal = log.getElementsByClassName("fatal error");


//document.all[]
//all element in document
document.all[0];    //first ele in doc
document.all["navbar"];     //navbar(s) in doc, equals to document.all.navbar
document.all.tags("div");   //all div tags in doc

