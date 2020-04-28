chrome.webNavigation.onCommitted.addListener(function(details) {

});


var requestFilter = {
        urls: ["<all_urls>"]
    },

    extraInfoSpec = ['requestHeaders', 'blocking'],
    // HTTP request
    handler = function(details) {

        var headers = details.requestHeaders,
            blockingResponse = {};

        var random =
            Math.floor(Math.random() * (+agents['agents'].length - 1 - +0)) + +0;


        for (var i = 0, l = headers.length; i < l; ++i) {
            if (headers[i].name == 'User-Agent') {
                headers[i].value = agents['agents'][random];
                break;
            }
        }

        blockingResponse.requestHeaders = headers;
        return blockingResponse;
    };

chrome.webRequest.onBeforeSendHeaders.addListener(handler, requestFilter, extraInfoSpec);