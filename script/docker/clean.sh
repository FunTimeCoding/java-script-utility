#!/bin/sh -e

script/docker/remove.sh

# Remove image.
docker rmi funtimecoding/java-script-utility

# Remove dangling image identifiers, and more.
docker system prune
