##
## file:   ~/.bashrc
## brief:  bash config file
## author: HayatoAoi

## If not running interactively, don't do anything
[[ $- != *i* ]] && return

##
## alias
##
alias ls='ls --color=auto'
alias nwemacs='emacsclient -nw'
# alias nano='emacsclient -nw'
# alias tm='xfce4-terminal'

##
## prompt
## 0:normal, 1:bold, 2:dark, 3:italic, 4:underline, 5:, 6:, 7:backgroud, 8:nothing, 9:cancel,
## 29:white, 30:black, 31:red, 32:green, 33:yellow, 34:blue, 35:magenta, 36:cyan
## 
PS1='\[\e[1;32m\]\u\[\e[1;32m\]@\[\e[1;32m\]\h \W \n\[\e[1;32m\]\$\[\e[m\] '    # user
# PS1='\[\e[1;31m\]\u\[\e[1;32m\]@\[\e[1;32m\]\h \w \n\[\e[1;31m\]\$\[\e[m\] '  # root
# PS1='[\u@\h \W]\$ '  # default
# PS1='\[\e[1;32m\]\u@\h \W \$\[\e[m\] '   # simple

##
## PATH
##
# export PATH=$PATH:/opt/cuda/bin
# export PATH=$PATH:~/Dropbox/mybin
# export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib:/opt/cuda/include
# export CPLUS_INCLUDE_PATH=$CPLUS_INCLUDE_PATH:
# export PRINTER=LBP7200

##
## emacsclient
## https://qiita.com/sijiaoh/items/6bd9de68d596f6469129
##
function estart() {
  if ! emacsclient -e 0 > /dev/null 2>&1; then
    cd > /dev/null 2>&1
    emacs --daemon
    cd - > /dev/null 2>&1
  fi
}

alias e='emacsclient -nw'
alias ekill="emacsclient -e '(kill-emacs)'"
alias erestart="emacsclient -e '(kill-emacs)' && estart"
export EDITOR='emacsclient -nw'

estart
