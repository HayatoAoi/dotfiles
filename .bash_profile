## file:  ~/.bash_profile
## brief: config of bash (only applied at login)
## author: HayatoAoi

[[ -f ~/.bashrc ]] && . ~/.bashrc

## uim configure
export GTK_IM_MODULE=uim
export XMODIFIERS=@im=uim
export QT_IM_MODULE=uim
uim-xim &

## xmodmap
xmodmap .Xmodmap
#setxkbmap -layout jp

complete -cf sudo

test -r ~/.bashrc && . ~/.bashrc
