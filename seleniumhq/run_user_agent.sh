#!/usr/bin/env bash

# Setup display
export DISPLAY=:10

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
exec > >(tee log)
exec 2>&1

date
python fake_click.py -f user_agents.txt -t "https://www.youtube.com/watch?v=K4r_J6JCDRc"
