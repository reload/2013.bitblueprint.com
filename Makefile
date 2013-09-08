build: update-bootstrap
	@echo "Building the Bit Blueprint Frontpage"
	recess --compile ./less/main.less > ./css/main.css
	recess --compress ./less/main.less > ./css/main.min.css
	@echo "All done ... "

update-bootstrap: bootstrap-git-update overwrite-variables
	cd bootstrap && grunt dist
	cp -f bootstrap/dist/css/*.css ./css
	cp -f bootstrap/dist/js/*.js ./js
	cp -f bootstrap/dist/fonts/* ./fonts

overwrite-variables:
	cp -f less/variables.less bootstrap/less/

bootstrap-git-update:
	git submodule update --init bootstrap

watch:
	echo "Watching less files..."; \
	watchr -e "watch('less/.*\.less') { system 'make' }"
