
 



def get_element(arr):
    largest = 0
    for x in range(0, len(arr)):
        if(arr[x] > largest):
            largest = arr[x]
    return largest
get_element([ 43, 56, 23, 89, 88, 90, 99, 652])