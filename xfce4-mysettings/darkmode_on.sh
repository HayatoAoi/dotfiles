#!/bin/bash

xfconf-query -c xfce4-panel -p "/panels/panel-1/background-style" -s 0
xfconf-query -c xfce4-panel -p "/panels/dark-mode" -s true
xfconf-query -c xsettings -p "/Net/ThemeName" -s Adwaita-dark

