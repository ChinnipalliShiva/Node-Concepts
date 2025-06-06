count=0
limit=10

while [ $count -lt $limit ];
do
echo "count is $count"
let count++
done

#while  increment use let before the variable

# Break – to stop loop
# Continue – to stop current iteration and start next iteration
