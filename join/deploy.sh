npm run build

# ----------------------------------------------------
# AWS S3
aws s3 sync ./build/ s3://sparta.ignifer-labs.com/join --exclude ".*" --exclude "deploy.sh"
# ----------------------------------------------------
