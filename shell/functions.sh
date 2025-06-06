add2() {
    echo "start adding"
    let result=$1+$2
    let type2=$(($1 + $2))
    echo "result is $result or $type2"

    #to print no of arguments
    echo "No of arguments passed: $#"
    echo "All arguments passed: $*"
    echo "All arguments passed: $@"
    echo "First argument passed: $1"
    echo "Second argument passed: $2"
}

add2 10 2
