val = '0'
chrome.storage.sync.get('status', function(sell){
	if(sell.status){
		val = '0'
	} else{
		val = '1'
	} 

})

chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
		details.requestHeaders.push({name: 'Sec-GPC', value: val});
		return {requestHeaders: details.requestHeaders};
	},
	{urls: ['<all_urls>']},
	['blocking', 'requestHeaders', 'extraHeaders']
);