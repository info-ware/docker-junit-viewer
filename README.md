docker pull info-ware/docker-junit-viewer

docker run -p 8082:8080 -v /ftp_upload_root_path:/all_tests info-ware/docker-junit-viewer