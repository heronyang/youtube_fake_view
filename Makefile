install:
	sudo apt-get install python-pip
	pip install -U selenium
	npm -g install phantomjs # IMPORTANT: please find version >= 2.0.0

run:
	cd phantomjs && ./run.sh
