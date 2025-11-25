#!/bin/sh

# NOTE: This script is optional. The site is automatically deployed via GitHub Actions
# (see .github/workflows/hugo.yml) when changes are pushed to the mainline branch.
# This script can be used for manual local deployments or as a backup method.

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
		msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin mainline
