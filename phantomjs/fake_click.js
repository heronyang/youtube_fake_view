var page = require("webpage").create();
var url = "https://www.youtube.com/watch?v=niytksFqFWs";
// var url = "https://www.youtube.com/watch?v=rag24732Q5E";

////////////////////////////////////////////////////////////////////////////////

var logResources = false;

page.onInitialized = function() {
    console.log("page.onInitialized");
};

page.onLoadStarted = function() {
    console.log("page.onLoadStarted");

    window.setTimeout(function(){
        page.render('screenshots/screenshot_20sec_onLoadStarted.png');
    }, 20000);

};

page.onLoadFinished = function() {
    console.log("page.onLoadFinished");
    page.render('screenshots/screenshot_onLoadFinished.png');
};

page.onUrlChanged = function() {
    console.log("page.onUrlChanged");
};

page.onNavigationRequested = function() {
    console.log("page.onNavigationRequested");
};

page.onRepaintRequested = function() {
    console.log("page.onRepaintRequested");
};

if (logResources === true) {
    page.onResourceRequested = function() {
        console.log("page.onResourceRequested");
    };
    page.onResourceReceived = function() {
        console.log("page.onResourceReceived");
    };
}

page.onClosing = function() {
    console.log("page.onClosing");
};

// window.console.log(msg);
page.onConsoleMessage = function(msg) {
    console.log("page.onConsoleMessage: " + msg);
};

// window.alert(msg);
page.onAlert = function() {
    console.log("page.onAlert");
};
// var confirmed = window.confirm(msg);
page.onConfirm = function() {
    console.log("page.onConfirm");
};
// var user_value = window.prompt(msg, default_value);
page.onPrompt = function() {
    console.log("page.onPrompt");
};

page.onResourceError = function(resourceError) {
    page.reason = resourceError.errorString;
    page.reason_url = resourceError.url;
};

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};

////////////////////////////////////////////////////////////////////////////////

// setup
page.viewportSize = {
    width: 1440,
    height: 900
};

console.log("");
console.log("### Load '" + window.url + "'");

page.open(window.url, function(status) {

    // if failed
    if ( status !== 'success' ) {
        console.log(
            "Error opening url \"" + page.reason_url
            + "\": " + page.reason
        );
        phantom.exit(1);
    }

    var evaluatedHtml = page.evaluate(function() {
        console.log("page evaluated");
        return document.documentElement.outerHTML;
    });
    console.log("Get: " + evaluatedHtml);

    window.setTimeout(function(){
        console.log("closing page");
        page.render('screenshots/screenshot_beforeClose.png');
        page.close();
    }, 30000);

    window.setTimeout(function(){
        console.log("exiting phantom");
        phantom.exit();
    }, 35000);

});
