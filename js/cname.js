var txtFile=new XMLHttpRequest;txtFile.open("GET","/Cname",!0),txtFile.onreadystatechange=function(){if(4===txtFile.readyState&&200===txtFile.status)txtFile.responseText},txtFile.send(null);
