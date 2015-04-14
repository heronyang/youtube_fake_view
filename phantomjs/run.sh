#!/usr/bin/env bash

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
exec > >(tee log)
exec 2>&1

# Run
time phantomjs --ignore-ssl-errors=yes fake_click.js
