if [ -d src ]; then
echo "src is a directory"
fi

if [ ! -d src ]; then
echo "src is not a directory"
fi


if [ -f basic.sh ]; then
echo "basic.sh is a file"
fi

if [ ! -f upgrade.sh ]; then
echo "upgrade.sh is not a file"
fi

: <<'eof'
space between brackets is necessary
; after bracket is necessary
# -d directory
# -f file
# -e file or directory
# -s file
# -r file
# -w file
# -x file
# -z string
# -n string
# -eq / ==
# -gt
# -lt
# -ge
# -le
# -ne / !=
# -o or
# -a and
# ! not
# -v variable
# -a file
# -o file
