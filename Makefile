install:
	sudo apt-get install python-pip
	pip install -U selenium
	npm -g install phantomjs # IMPORTANT: please find version >= 2.0.0

run_phantomjs:
	cd phantomjs && ./run.sh

run_seleniumhq:
	cd seleniumhq && make run_headless_server
	cd seleniumhq && ./run.sh
