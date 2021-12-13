add_library(webview INTERFACE)
target_sources(webview INTERFACE webview.h)
target_include_directories(webview INTERFACE ${CMAKE_CURRENT_SOURCE_DIR})