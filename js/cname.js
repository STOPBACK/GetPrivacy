var txtFile = new XMLHttpRequest();
txtFile.open("GET", "https://raw.githubusercontent.com/STOPBACK/GetPrivacy/main/CNAME", true);
txtFile.onreadystatechange = function()
{
   if (txtFile.readyState === 4)
   {
      if (txtFile.status === 200)
      {
         document.write(txtFile.responseText);
      }
   }
}
txtFile.send(null)
