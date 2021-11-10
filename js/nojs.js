url = window.location.href;
url = url.split('?ref=/')[1];
hostname = "https://" + window.location.hostname + "/";
if (url == "undefined") {
  window.location.replace(hostname);
} else {
  url = hostname + url;
  if (url == hostname + "/undefined") {
    url = hostname;
  }
  window.location.replace(url);
}
