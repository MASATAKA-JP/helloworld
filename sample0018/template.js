window.onload = function () {
  var $count = getCookie('sampleNumberOfVisits');
  if(!$count){
    setCookie('sampleNumberOfVisits', 1, 1);
  }else{
    setCookie('sampleNumberOfVisits', ++$count, 1);
  }
  displayCookie('sampleNumberOfVisits');
}
function setCookie($cookieName, $cookieValue, $days){
  var $dateObject = new Date();
  $dateObject.setTime($dateObject.getTime() + ($days*24*60*1000));
  var $expires = "expires=" + $dateObject.toGMTString();
  document.cookie = $cookieName + "=" + $cookieValue + "; " + $expires;
}
function getCookie($cookieName){
  var $cookies = document.cookie.split(';');
  for(var $i=0; $i<$cookies.length; $i++){
    var $cookie = $cookies[$i].trim().split('=');
    if($cookie[0] == $cookieName){
      return $cookie[1];
    }
  }
  return "";
}
function deleteCookie($cookieName){
  document.cookie = cookieName + "=; expiers=Thu, 01 Jan 1970 00:00:00 GMT";
  displayCookie($cookieName);
}
function displayCookie($cookieName){
  var $cookieValue = getCookie($cookieName);
  document.getElementById('sampleOutput').innerHTML = $cookieValue;
}
