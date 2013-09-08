build: update-bootstrap
	@echo "Building the Bit Blueprint Frontpage"
	recess --compile ./less/main.less > ./css/main.css
	recess --compress ./less/main.less > ./css/main.min.css
	@echo "All done ... "

update-bootstrap: bootstrap-git-update overwrite-variables
	cd bootstrap && make clean; make bootstrap
	cp -f bootstrap/bootstrap/css/*.css ./css
	cp -f bootstrap/bootstrap/js/*.js ./js
	cp -f bootstrap/bootstrap/img/* ./img

overwrite-variables:
	cp -f less/variables.less bootstrap/less/

bootstrap-git-update:
	git submodule update --init bootstrap

watch:
	echo "Watching less files..."; \
	watchr -e "watch('less/.*\.less') { system 'make' }"
