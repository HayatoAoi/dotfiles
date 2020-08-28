# -*- mode: python, coding: utf-8 -*-

import re
from xkeysnail.transform import *

# [Global modemap] Change modifier keys as in xmodmap
# define_modmap({
#     Key.CAPSLOCK: Key.LEFT_CTRL
# })

define_keymap(lambda wm_class: wm_class in ("firefox"), {
    K("C-p"): K("up"),
    K("C-n"): K("down"),
    K("C-m"): K("enter"),
    K("C-h"): with_mark(K("backspace")),
    K("C-M-h"): with_mark(K("C-backspace")),
    # K("C-s"): K("C-f"),
}, "firefox")

## Links:
## https://qiita.com/samurai20000@github/items/2e1d779e806a7e8543d6
## https://qiita.com/miy4/items/dd0e2aec388138f803c5#%E8%87%AA%E5%8B%95%E8%B5%B7%E5%8B%95
