#!/bin/sh -e

docker images | grep --quiet funtimecoding/java-script-utility && FOUND=true || FOUND=false

if [ "${FOUND}" = true ]; then
    docker rmi funtimecoding/java-script-utility
fi

docker build --tag funtimecoding/java-script-utility .
