build: update-bootstrap update-jquery.snapscroll
	@echo "Building the Bit Blueprint Frontpage"
	recess --compile ./less/main.less > ./css/main.css
	recess --compress ./less/main.less > ./css/main.min.css
	@echo "All done ... "

update-bootstrap: bootstrap-git-update overwrite-variables
	cd bootstrap && make clean; make bootstrap
	cp -f bootstrap/bootstrap/css/*.css ./css
	cp -f bootstrap/bootstrap/js/*.js ./js
	cp -f bootstrap/bootstrap/img/* ./img

update-jquery.snapscroll: jquery.snapscroll-git-update
	cp -f jquery.snapscroll/core/jquery.snapscroll.min.js ./js
	cp -f jquery.snapscroll/core/dependencies/jquery.scroll_to.js ./js

overwrite-variables:
	cp -f less/variables.less bootstrap/less/

bootstrap-git-update:
	git submodule update --init bootstrap

jquery.snapscroll-git-update:
	git submodule update --init jquery.snapscroll

watch:
	echo "Watching less files..."; \
	watchr -e "watch('less/.*\.less') { system 'make' }"

pull-and-upload:
	../pull-and-upload.sh
