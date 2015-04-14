var sys = require("system"),
    page = require("webpage").create(),
    logResources = false,
    url = "https://www.youtube.com/watch?v=6_XjCeT6V1k";

////////////////////////////////////////////////////////////////////////////////

page.onInitialized = function() {
    console.log("page.onInitialized");
};
page.onLoadStarted = function() {
    console.log("page.onLoadStarted");
};
page.onLoadFinished = function() {
    console.log("page.onLoadFinished");
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
page.onConsoleMessage = function() {
    console.log("page.onConsoleMessage");
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

////////////////////////////////////////////////////////////////////////////////

console.log("");
console.log("### Load '" + window.url + "'");

setTimeout(function(){
    page.open(window.url);
}, 0);


setTimeout(function(){
    page.close();
}, 500);

setTimeout(function(){
    phantom.exit();
}, 1000);

