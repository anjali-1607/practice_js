var a = "I am anjali rajpoot";
console.log(a.length);

var b = "I am 'Anjali Rajpoot' ";
console.log(b);

var c = " I am anjali rajpoot";
console.log(c.indexOf("a"));
console.log(c.indexOf("a", 8));

var d = "I am anjali rajpoot";
console.log(d.search("anjali"));

var e = "Anjali Rajpoot Indore";
console.log(e.slice(0, 15));

var f = "Anjali Rajpoot Indore";
console.log(f.substring(7, -2));

var g = "Anjali Rajpoot Indore";
console.log(g.substr(0, 15));

var h = "Anjali Rajpoot Indore";
console.log(e.replace("Anjali", "anjallii"));

var i = "Anjali Rajpoot Indore";
console.log(i.charAt(7));

var j = "Anjali Rajpoot Indore";
console.log(j.charCodeAt(7));

var k = "Anjali Rajpoot";
console.log(k.toUpperCase());
console.log(k.toLowerCase());

var l = "                Anjali            Rajpoot            ";
console.log(l.trim());

var m = "Anjali";
var n = "Rajpoot";
console.log(m.concat(n));

var o = "a,b,c/d,e";
console.log(o.split(""));
console.log(o.split(","));
console.log(o.split("/"));
