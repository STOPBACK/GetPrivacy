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
   // OS Detect
var useragent = navigator.userAgent;
var andos = useragent.split("(");
var andos = andos[1]
var andos = andos.split(")");
var andos = andos[0]
var andos = andos.split(";");
var andos = andos[1]
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
if (OSName == "Linux" && andos.indexOf("Android") !== "-1"){
  var OSName = andos;
}
document.getElementById("OSName").innerHTML = OSName;

   // OS Version Detector
function getOS() {
var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = 'Mac OS';
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = 'iOS';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = 'Windows';
} else if (/Android/.test(userAgent)) {
  os = 'Android';
} else if (!os && /Linux/.test(platform)) {
  os = 'Linux';
}

return os;
}
var OSVersion = getOS();
document.getElementById("OSVersion").innerHTML = OSVersion;

   // Architecture Detector
if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 ){
  var arctec = "x64";
} else {
  var arctec = "x86";
}
document.getElementById("arctec").innerHTML = arctec;

   // Processor Core Detection
let ProcessorCore = navigator.hardwareConcurrency;
document.getElementById("ProcessorCore").innerHTML = ProcessorCore + " Core(s)";

   // Detect Total Amount of RAM
let memory = navigator.deviceMemory;
var ram = memory + " GB";
if (ram.indexOf("undefined") != "-1") {
  var ram = "Failed to Detect";
}
document.getElementById("memory").innerHTML = ram;

   // User-Agent Detector
var useragent = navigator.userAgent;
document.getElementById("user-agent").innerHTML = useragent;

   // Do Not Track Detection
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
  var dnt = "Enable";
} else {
  var dnt = "Disable";
}
document.getElementById("dnt").innerHTML = dnt;

 // Detect Adblocker - Image Method
var adblocker1 = "Disable";
var myImg = document.querySelector("#ads");
var currWidth = myImg.clientWidth;
var currHeight = myImg.clientHeight;
var imgsize = "1";
if (currWidth < imgsize || currHeight < imgsize){
  var adblocker1 = "Enable";
}
document.getElementById("adblocker1").innerHTML = adblocker1;

  // Detect Adblocker - Google Script Method
if(ads){
  var adblocker2 = "Disable";
} else {
  var adblocker2 = "Enable";
}
document.getElementById("adblocker2").innerHTML = adblocker2;

     // IPv4 Address Detection
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }, noop); 

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

// Usage

getUserIP(function(ip){
	document.getElementById("ipv4").innerHTML = ip;
});

    // Download Report
  function reportdownload(){
    var ipv4 = document.getElementById("ipv4").innerHTML;
    function download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

let report = 'Operating System,' + OSName + "\n" +
             'Operating System Type,' + OSVersion + "\n" +
             'Architecture,' + arctec + "\n" +
             'Processor Core Count,' + ProcessorCore + "\n" +
             'RAM,' + ram + "\n" +
             'User-Agent,' + '"' + useragent + '"' + "\n" +
             'Do Not Track,' + dnt + "\n" +
             'Adblocker (Image Method),' + adblocker1 + "\n" +
             'Adblocker (Script Method),' + adblocker2 + "\n" +
             'IPv4 Address,' + ipv4;

      download("report.csv",report);
  }
