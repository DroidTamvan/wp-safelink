if(window._wp_safelink_location){
  console.log('Powered by WP Safelink 3. Protect your links and get banefits!');
  if(window._wp_safelink_except){
    window._wp_safelink_except.push(window._wp_safelink_location);
    window._wp_safelink_except.push(location.host);
  }else{
    window._wp_safelink_except = [window._wp_safelink_location, location.host];
  }
  window.parseUrl = function(string){
    return /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(string);
  }
  window._wp_safelink = function(){
    var anchors = document.querySelectorAll('a[href]');
    anchors.forEach(function(anchor){
      var url = window._wp_safelink_location + '/safelink/api/?data=';
      var parse = window.parseUrl(anchor.href);
      var origin = parse[3];
      var check = false;
      if(origin && window._wp_safelink_except.indexOf(origin) === -1){
        anchor.href = url + btoa(encodeURIComponent(anchor.href)) + ".ref";
      }
    });
  }
  window._wp_safelink();
}else{
  console.log('window._wp_safelink_location harus ada!');
}
