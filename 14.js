var a=2,b=1;
document.write("a is "+a)
document.write("<br>b is "+b)

var c=--a
document.write("<br><br><i>--a:</i> "+c)
var d=c - --b
document.write("<br><i>--a - --b:</i> "+d)
var e=d + ++b
document.write("<br><i>--a - --b + ++b:</i> "+e)
var result=e + b--
document.write("<br><i>--a - --b + ++b + b--:</i> "+result)

document.write("<br>Result is "+result)