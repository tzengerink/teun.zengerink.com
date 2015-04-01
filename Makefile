deploy:
	git checkout master
	aws s3 sync . s3://teun.zengerink.com --cache-control "public, max-age=604800" --exclude ".git/*" --exclude "Makefile"
