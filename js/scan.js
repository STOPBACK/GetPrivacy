popup = 0;
total = 3;
test1 = 0;
test2 = 0;
test3 = 0;
function popup1(){
test1 = 1 + test1;
if ( test1 == "1" ){
newWina = window.open("https://getprivacy.cf");
newWin1 = window.open("https://getprivacy.cf");
if(!newWin1 || newWin1.closed || typeof newWin1.closed=='undefined')
{
popup = popup + 1;
document.getElementById("result").innerHTML = popup;
document.getElementById("percent").innerHTML = popup * 100 / total;
}
newWina.close();
}
}
  function popup2(){
test2 = 1 + test2;
if ( test2 == "1" ){
newWinb = window.open("https://getprivacy.cf");
newWin2 = window.open("https://getprivacy.cf");
if(!newWin2 || newWin2.closed || typeof newWin2.closed=='undefined')
{
popup = popup + 1;
document.getElementById("result").innerHTML = popup;
document.getElementById("percent").innerHTML = popup * 100 / total;
}
newWinb.close();
}
}
function popup3(){
test3 = 1 + test3;
if ( test3 == "1" ){
newWin3 = window.open("https://getprivacy.cf");
if(!newWin3 || newWin3.closed || typeof newWin3.closed=='undefined')
{} else {
popup = popup + 1;
document.getElementById("result").innerHTML = popup;
document.getElementById("percent").innerHTML = popup * 100 / total;
}
newWin3.close();
}
}
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
document.getElementById("OSName").innerHTML = OSName;
    let dntActive = () => {
let dnt_active = parseInt(
  navigator.msDoNotTrack ||
  window.doNotTrack ||
  navigator.doNotTrack,
  10
);
return (dnt_active === 1);
}
if (dntActive()) {
 document.getElementById("dnt").innerHTML = "Enabled";
} else {
 document.getElementById("dnt").innerHTML = "Disabled";
}
document.getElementById("user-agent").innerHTML = navigator.userAgent;;

  if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 ){
     arctec = "x64";
     document.getElementById("arctec").innerHTML = "x64";
  } else {
     arctec = "x86";
     document.getElementById("arctec").innerHTML = "x86";
  }

      $.getJSON("https://api.ipify.org?format=json",
                                        function(data) {
          $("#ip").html(data.ip);
      })

      window.onload = function() {
        setTimeout(function() {
          if ( typeof(window.google_jobrunner) === "undefined" ) {
            document.getElementById("adblocker").innerHTML = "Yes";
          } else {
            document.getElementById("adblocker").innerHTML = "No";
          }
        }, 1000);
      };


      document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector(
              "body").style.visibility = "hidden";
            document.querySelector(
              "#loader").style.visibility = "visible";
        } else {
            document.querySelector(
              "#loader").style.display = "none";
            document.querySelector(
              "body").style.visibility = "visible";
        }
    };

    // Download Report
  function reportdownload(){
    function download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

let report = 'Operating System: ' + OSName + "\n" + 'Architecture: ' + arctec + "\n";

      download("report.log",report);
  }
