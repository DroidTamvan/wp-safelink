if(window._wp_safelink_location){
	console.log('Powered by WP Safelink 3. Protect your links and get banefits!');
	if(window._wp_safelink_except){
		window._wp_safelink_except.push(window._wp_safelink_location);
		window._wp_safelink_except.push(location.host);
	}else{
		window._wp_safelink_except = [window._wp_safelink_location, location.host];
	}
	window._wp_for_each = function(data, callback){
		for(var i in data){
			callback(i, data[i]);
		}
	};
	window._wp_safelink = function(){
		var anchors = document.querySelectorAll('a[href]');
		window._wp_for_each(anchors, function(index, anchor){
			var href = anchor.href;
			var url = 'http://' + window._wp_safelink_location + '/safelink/api/?data=';
			var check = window._wp_safelink_except.indexOf(anchor.host) === -1;
			if(check){
				anchor.href = url + btoa(encodeURIComponent(href)) + '.ref';
			}
		});
	};
	window._wp_safelink();
}else{
	console.log('window._wp_safelink_location harus ada!');
}
