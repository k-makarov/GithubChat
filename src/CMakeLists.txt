add_executable(GithubChat MACOSX_BUNDLE main.cpp)
target_link_libraries(GithubChat webview)

set_target_properties(GithubChat PROPERTIES
        BUNDLE True
        MACOSX_BUNDLE_GUI_IDENTIFIER my.domain.style.identifier.GithubChat
        MACOSX_BUNDLE_BUNDLE_NAME GithubChat
        MACOSX_BUNDLE_BUNDLE_VERSION "0.0.1"
        MACOSX_BUNDLE_SHORT_VERSION_STRING "0.0.1"
        MACOSX_BUNDLE_INFO_PLIST ${CMAKE_SOURCE_DIR}/cmake/apple/GithubChat.plist.in
        )

