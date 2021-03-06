
# ----------------Leetcode #20 Valid Parentheses ---------------- #

def isValid(string):
    bracePairs = {
        "]": "[", 
        ")": "(",
        "}": "{",
    }
    stack = []

    for char in string:
        if char in bracePairs and stack:
            if bracePairs[char] != stack[-1]:
                return False
            else:
                stack.pop()
        else:
            stack.append(char)

    return True if not stack else False

# ----------------Leetcode #21 Merge Two Sorted Lists ---------------- #

# Create list node
class ListNode:
    def __init__(self, val=None):
        self.val = val
        self.next = None

def mergeTwoSortedLists(list1, list2):

    node = ListNode()
    head = node

    while list1 != None and list2 != None:
        if list1.val < list2.val:
            head.next = list1
            list1 = list1.next
        else:
            head.next = list2
            list2 = list2.next

        head = head.next
    

    if list1:
        head.next = list1
    elif list2:
        head.next = list2
        
    return node.next

# ----------------Leetcode # 121 Best Time to Buy and Sell Stock ----------------

prices = [7,1,5,3,6,4]

def maxProfit(prices):

    maxProfit = 0
 
    currMin = prices[0]


    for i in range(len(prices)):
        price = prices[i]
        currProfit = price - currMin
        
        if currProfit > maxProfit:
            maxProfit = currProfit
    
        elif price < currMin:
            currMin = price
    
    return maxProfit

# ----------------Leetcode # 217 Contains Duplicate ----------------

# TIME - O(N)
# SPACE - O(N)

def containsDuplicate(nums):

    hashtable = {}


    for idx in range(len(nums)):
        num = nums[idx]

        if num in hashtable:
            return True

        hashtable[num] = idx
    

    return False


# ----------------Leetcode # 242 Valid Anagram ----------------

# TIME - O(N)
# SPACE - O(N)

def isAnagram(word1, word2):

    if len(word1) != len(word2):
        return False

    hashtable = {}

    for char in word1:
        if char not in hashtable:
            hashtable[char] = 1
        else:
            hashtable[char]+=1
    
    for char in word2:
        if char not in hashtable or hashtable[char] == 0:
            return False
        else:
            hashtable[char]-=1

    return True
    
# ----------------Leetcode # 125 Valid Palindrome ----------------
    
def isAlpha(char):
        return( 48 <= ord(char) <=57 or
                65 <= ord(char) <= 90 or
                97 <= ord(char) <= 122)
    
def isPalindrome(word: str) -> bool:
    l = 0
    r = len(word) - 1
        
    while l <= r:
        leftChar = word[l].lower()
        rightChar = word[r].lower()
        if isAlpha(leftChar) and isAlpha(rightChar):
            if leftChar == rightChar:
                l+=1
                r-=1
            else:
                return False
        elif not(isAlpha(leftChar)):
            l+=1
        elif not(isAlpha(rightChar)):
            r-=1
        
    return True


# ----------------Leetcode # 155 MinStack ----------------

# TIME - 0(1)
#SPACE - O(N)

class MinStack:

    def __init__(self):

        self.stack = []
        self.minValsStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.minValsStack:
            val = min(val, self.minValsStack[-1])
            self.minValsStack.append(val)
        else:
            self.minValsStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minValsStack.pop()
    
    def top(self) -> int:
        return self.stack[-1]
    
    def getMin(self) -> int:
        return self.minValsStack[-1]
    


# ----------------Leetcode #704 Binary Search Binary Search ----------------
# import the math module
import math
from xml.dom import minidom

def binarySearch(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = math.floor((right + left) / 2)
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        elif nums[mid] > target:
            right = mid - 1
    
    return -1

# ----------------Leetcode #278 First Bad Version ----------------

# TIME - O(LOGN)
# SPACE - O(1)

# PLACE HOLDER API
def isBadVersion(version): 
    return True

def firstBadVersion(n):
    l = 1
    r = n

    while l <= r:
        currentVersion = math.floor((r + l) / 2)

        if isBadVersion(currentVersion):
            r = currentVersion - 1
        else:
            l = currentVersion + 1
    return l

# ----------------Leetcode #35 Search Insert Position ----------------


# TIME - O(LOGN)
#SPACE - O(1)

def searchInsert(nums, target):

    leftPointer = 0
    rightPointer = len(nums) - 1

    while leftPointer <= rightPointer:
        mid = math.floor((rightPointer + leftPointer) / 2)

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            leftPointer = mid + 1
        elif nums[mid] > target:
            rightPointer = mid - 1
    
    return leftPointer

# ----------------Leetcode #3 Longest Substring Without Repeating Characters ----------------

def lengthOfLongestSubstring(s):
    string = ""
    j = 0

    for i in range(len(s)):
        while j < len(s):
            if s[j] in string:
                break
            else:
                string+=s[j]
                j+=1
    
    print(string)


