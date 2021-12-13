#clean
sh clean.sh
cd ..
mkdir build
cd build
cmake .. -G Ninja
ninja
