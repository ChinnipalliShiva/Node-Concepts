if [ -f ./dummyDataSh.txt ]; then
    data=./dummyDataSh.txt
    for i in $(cat "$data"); do
        echo "File: $i"
    done
else
    echo "dummyDataSh.txt is not a file"
fi
