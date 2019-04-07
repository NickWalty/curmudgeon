chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	let incomingURL = details.url.split('?');
    	if ( !incomingURL.length  || incomingURL.includes("oldIssueView=true", 0) ) {
    		return {redirectUrl: details.url}; //Don't add parameters
    	} 
    	let newUrl = details.url + '?oldIssueView=true';
    	return {redirectUrl: newUrl};
    },
    {urls: ["*://starlingsolutions.atlassian.net/*"]},
    ["blocking"]);