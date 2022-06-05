(function(){
	var age = 0;
	chrome.storage.sync.set({'status': false});
	('#save').click(function(){
		age = parseInt($('#age').val());
		if(age<16){
			chrome.storage.sync.set({'status': false});
		}
	})

	('#in').click(function(){
		chrome.storage.sync.set({'status': true});
		if(age<16){
			chrome.storage.sync.set({'status': false});
		}
	})

	('#out').click(function(){
		chrome.storage.sync.set({'status': false}), function(){
			close();
		};
	})


});