#!/usr/bin/env bash

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
exec > >(tee log)
exec 2>&1

max=1440
for i in `seq 1 $max`
do
    echo "no.$i"
    python fake_click.py
    sleep 20
done
