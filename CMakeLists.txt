cmake_minimum_required(VERSION 3.14)

project(
  GithubChat
  VERSION 0.0.1
  DESCRIPTION "Github project PR and issues viewer - chat"
  LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)
#apple 
set(CMAKE_CXX_FLAGS "-Wall -framework WebKit")

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

add_subdirectory(lib)
add_subdirectory(src)

