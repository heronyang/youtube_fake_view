#!/usr/bin/env python
from selenium import webdriver
import time
profile = webdriver.FirefoxProfile()

profile.set_preference("network.proxy.type", 1)
profile.set_preference("network.proxy.http", "218.97.194.222")
profile.set_preference("network.proxy.http_port", 80)

profile.update_preferences()

driver = webdriver.Firefox(firefox_profile=profile)
driver.get("https://www.whatismyip.com/")

# driver.get_screenshot_as_file(save_to_name)
# driver.quit()
