#!/usr/bin/env python
import time
from selenium import webdriver

# visible
driver = webdriver.Firefox()
driver.get("https://www.youtube.com/watch?v=rag24732Q5E")

time.sleep(30)

driver.get_screenshot_as_file('screenshot.png')

driver.quit()
print 'done.'
