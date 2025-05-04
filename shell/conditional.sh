age=21

if [ $age -ge 10 ]; then
    echo "You are 10 years old"
elif [ $age -eq 20 ]; then
    echo "You are 20 years old"
elif [ $age -gt 20 ]; then
    echo "You are older than 20 years old"
elif [ $age -eq 30 ]; then
    echo "You are 30 years old"
else
    echo "You are not 20 or 30 years old"
fi

#multiline comment
: <<'eof'
# This is a multiline comment
eof
# This is a multiline comment
: <<'s'
-eq / ==
-gt
-lt
-ge
-le
-ne / !=
s
