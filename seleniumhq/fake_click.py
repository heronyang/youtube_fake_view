#!/usr/bin/env python
import time
import argparse
from selenium import webdriver
from random import randint

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
parser.add_argument('-f', '--file',
        help='user agent list',
        nargs='?',
        default="")
args = vars(parser.parse_args())

print 'Arguments:'
print args

filename = args['file']

# batch case
if filename != '':
    useragent_list = open(filename).read().splitlines()

    for ua in useragent_list:

        print '>> start user agent:' + ua

        profile = webdriver.FirefoxProfile()
        profile.set_preference("general.useragent.override", ua)

        driver = webdriver.Firefox(profile)
        driver.set_window_size(1440, 900)
        driver.maximize_window()
        driver.get(args['target'])

        # sleep
        time.sleep(50 + randint(0,10))

        # finish
        driver.get_screenshot_as_file('screenshot.png')
        driver.quit()

        print '>> done user agent:' + ua


else:
# visible
    profile = webdriver.FirefoxProfile()
    profile.set_preference("general.useragent.override", args['user_agent'])

    driver = webdriver.Firefox(profile)
    driver.set_window_size(1440, 900)
    driver.get(args['target'])

# sleep
    time.sleep(30)

# finish
    driver.get_screenshot_as_file('screenshot.png')

    driver.quit()
    print 'done.'
