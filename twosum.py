def twoSum(nums, target): 
    prevMap = {}

    for i, n in enumerate(nums):
        diff = target - n

        if diff in prevMap:
            return [prevMap[diff], i]

        prevMap[n] = i

sum = twoSum([2, 7, 11, 15], 9)
print(sum)
