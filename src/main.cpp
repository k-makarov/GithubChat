#include "webview.h"

///Get all the JS code of the embedded app
#define STRINGIFY(f) #f
const char* script_js =
#include "app/dist/app.js"
;

int main() {
    ///Setting the webview wrapper window
    webview::webview wrapper(true, nullptr);
    wrapper.set_title("");
    wrapper.set_size(1440, 950, WEBVIEW_HINT_NONE); ///< TODO config file...
    wrapper.navigate("data:text/html,<html><head></head><body></body></html>");
    wrapper.init(script_js);
    wrapper.run();
    return 0;
}
