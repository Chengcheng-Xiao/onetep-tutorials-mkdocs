Clazz.declarePackage ("JS");
Clazz.load (["JS.AbstractButton"], "JS.JButton", ["JU.SB"], function () {
var c$ = Clazz.declareType (JS, "JButton", JS.AbstractButton);
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, JS.JButton, ["btnJB"]);
});
Clazz.overrideMethod (c$, "toHTML", 
function () {
var sb =  new JU.SB ();
sb.append ("<input type=button id='" + this.id + "' class='JButton' style='" + this.getCSSstyle (80, 0) + "' onclick='SwingController.click(this)' value='" + this.text + "'/>");
return sb.toString ();
});
});
;//5.0.1-v2 Sat Nov 25 17:51:22 CST 2023
