/**
 * Created by Xuchen on 8/15/15.
 * element properties/attributes
 */

var image = document.getElementById("myImage");
var imgurl = image.src;
image.id === "myImage";

var f = document.forms[0];
f.action = "http://www.image.bing.com/submit.php";
f.method = "POST";

//node attributes
document.body.attributes[0];    //first attr of <body>
document.body.attributes.bgcolor;       //attr: bgcolor of <body>




//element content
//innerHTML()
var para = document.getElementsByTagName("p")[0];
var text = para.textContent;    //get text
para.textContent = "text changed show in this";     //change text


//create node
var s = document.createElement("script");   //create a <script> element
var newnode = document.createTextNode("text node content");
newnode.cloneNode(true);    //every node has a clone func, get a copy, para "true" means copy child node as well

//insert node
function insertAt(parent, child, n){
    if(n==parent.childNodes.length)
        parent.appendChild(child);  //added as the last child
    else
        parent.insertBefore(child, parent.childNodes[n]);   //insert before No.n node
}

//delete(replace) node
n.parentNode.removeChild(n);
n.parentNode.replaceChild(document.createTextNode("[ REDACTED ]"),n);

























