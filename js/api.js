if(window._wp_safelink_location){
	console.log('Powered by WP Safelink 3. Protect your links and get banefits!');
	if(window._wp_safelink_except){
		window._wp_safelink_except.push(window._wp_safelink_location);
		window._wp_safelink_except.push(location.host);
	}else{
		window._wp_safelink_except = [window._wp_safelink_location, location.host];
	}
	window._wp_safelink = function(){
		var anchors = document.querySelectorAll('a[href]');
		anchors.forEach(function(anchor){
			var url = 'http://' + window._wp_safelink_location + '/safelink/api/?data=';
			var check = false;
			window._wp_safelink_except.forEach(function(except){
				check = anchor.href.search(except) > -1;
			});
			if(origin && !check){
				anchor.href = url + btoa(encodeURIComponent(anchor.href)) + ".ref";
			}
		});
	}
	window._wp_safelink();
}else{
	console.log('window._wp_safelink_location harus ada!');
}
