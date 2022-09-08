#!/bin/bash

kbdshrt='xfce4-keyboard-shortcuts'

# xfconf-query -c xfce4-keyboard-shortcuts -p "/xfwm4/custom/<Super>Tab" -r
# xfconf-query -c xfce4-keyboard-shortcuts -p "/xfwm4/custom/<Alt>F4" -s fullscreen_key


xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>KP_Next" -r
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>KP_Down" -r
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>KP_Right" -r
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>KP_Left" -r

xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>Tab" -n -t string -s next_workspace_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>l" -n -t string -s tile_right_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>j" -n -t string -s tile_left_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>k" -n -t string -s tile_down_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>i" -n -t string -s tile_up_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>u" -n -t string -s tile_up_left_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>o" -n -t string -s tile_up_right_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>n" -n -t string -s tile_down_left_key
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>m" -n -t string -s tile_down_right_key

xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Super>f" -n -t string -s fullscreen_key

xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Alt>Tab" -r
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Alt>Tab" -n -t string -s cycle_windows_key

xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Alt>F4" -r
xfconf-query -c $kbdshrt -p "/xfwm4/custom/<Alt>q" -n -t string -s close_window_key


xfconf-query -c xfce4-panel -p "/panels/panel-1/background-style" -s 0
xfconf-query -c xfce4-panel -p "/panels/dark-mode" -s false
xfconf-query -c xsettings -p "/Net/ThemeName" -s Adwaita

