chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	let incomingURL    = details.url.split('/');
        let incomingParams = details.url.split('?');
    	if ( incomingURL[incomingURL.length -2] !== 'browse' || incomingParams.includes('oldIssueView=true') ) {
    		return {redirectUrl: details.url}; //Don't add parameters
    	} 
    	let newUrl = details.url + '?oldIssueView=true';
    	return {redirectUrl: newUrl};
    },
    {urls: ["*://starlingsolutions.atlassian.net/*"]},
    ["blocking"]);