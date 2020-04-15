<!--
function checkExpand()
{
 if(!event.srcElement.id)
  {
   var ch=event.srcElement.id+"Child";
   var el=document.all[ch];
   if(null!=el)
   {
    el.style.display="none"==el.style.display?"":"none";
    if(el.style.display!="none")
     event.returnValue=false;
   }
  }
}

function makemenu(page, letters)
{
 var allletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
 var z = "";
 var fond = "../images/fond.gif"
 for(i=0;i<=25;i++)
 {
  if (i%2==0) 
   document.write("<tr>");
  z=(letters.indexOf(allletters[i],0)!=-1)?("<a class=menu href='"+page+"#"+allletters[i]+"'>"+allletters[i]+"</a>"):"&nbsp;&nbsp;&nbsp;";
  document.write("<td background='"+fond+"' align=center>"+z+"</td>");
  if(i%2==1) 
   document.write("</tr>");
 }
}

function makeindexmenu(letters)
{
 var allletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
 var z = "";
 for(i=0;i<=25;i++)
 {
  if (i%2==0) 
   document.write("<tr>");
  z=(letters.indexOf(allletters[i],0)!=-1)?("<a class=menuindex href='annexe2.htm#"+allletters[i]+"'><b>"+allletters[i]+"</a>"):("<font color=#808080><b>"+allletters[i]);
  document.write("<td align=center>"+z+"</td>");
  if(i%2==1) 
   document.write("</tr>");
 }
}

-->