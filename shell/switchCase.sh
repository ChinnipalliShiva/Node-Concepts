echo "Select option:"

echo "1 = Print current date"
echo "2 list all files in current directory"

read choice

case $choice in

1) date ;;
2) ls ;;
*) echo "Invalid option" ;;

esac
