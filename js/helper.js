url = window.location.href;
url_find = url.includes("https")
url_find1 = url.includes("getprivacy.cf")
url_result = url_find + url_find1;
if (url_result == 2) {
  document.getElementById("secur").style.visibility = "hidden";
} else {
  document.getElementById("secur").style.visibility = "";
}