#!/usr/bin/env python
import time
import argparse
from selenium import webdriver

# using Blackberry user agent as default for fun, check more:
# http://www.useragentstring.com/pages/BlackBerry/

parser = argparse.ArgumentParser('Visit one website using Selenium')
parser.add_argument('-u', '--user-agent',
        help='specify a user agent for HTTP header',
        nargs='?',
        default="Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+")
parser.add_argument('-t', '--target',
        help='target URL',
        nargs='?',
        default="localhost:50007")
args = vars(parser.parse_args())

print 'Arguments:'
print args

# visible
profile = webdriver.FirefoxProfile()
profile.set_preference("general.useragent.override", args['user_agent'])

driver = webdriver.Firefox(profile)
driver.get(args['target'])

# sleep
time.sleep(30)

# finish
driver.get_screenshot_as_file('screenshot.png')

driver.quit()
print 'done.'
