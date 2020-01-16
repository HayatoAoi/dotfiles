##
## file:   ~/.bashrc
## brief:  bash config file
## author: HayatoAoi

## If not running interactively, don't do anything
[[ $- != *i* ]] && return

## alias
alias ls='ls --color=auto'
alias tm='xfce4-terminal'

## prompt
PS1='\[\e[1;32m\]\u@\h \$\[\e[m\] '
# PS1='[\u@\h \W]\$ '  # default

export PATH=$PATH:/opt/cuda/bin
# export PATH=$PATH:~/Dropbox/mybin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib:/opt/cuda/include
# export CPLUS_INCLUDE_PATH=$CPLUS_INCLUDE_PATH:
export PRINTER=LBP7200
