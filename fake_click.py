#!/usr/bin/python
from selenium import webdriver

# visible
driver = webdriver.Firefox()
driver.get("https://www.youtube.com/watch?v=6_XjCeT6V1k")

# hidden
driver_hidden = webdriver.PhantomJS()
driver_hidden.get("https://www.youtube.com/watch?v=6_XjCeT6V1k")

# el=driver.find_elements_by_id("movie_player")
# action = webdriver.common.action_chains.ActionChains(driver)
# action.move_to_element_with_offset(el, 5, 5)
# action.click()
# action.perform()
