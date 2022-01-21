function getUrl(){
    let url;
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        url = tabs[0].url;
        console.log(url);
        let url_ex = url.split("/");
        console.log(url_ex[2]);
    });
}



(function() {
    'use strict'
    getUrl();
})();