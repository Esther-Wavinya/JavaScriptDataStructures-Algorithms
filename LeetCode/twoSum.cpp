// 1. Brute Force Method

// In this approach I will iterate the array using two loops to find if the sum is equal to the target.


for(int i=0;i<nums.size()-1;i++)
{
    for(int j = i+1;j<nums.size();j++)
        {
          if(nums[i]+nums[j]==target)
          ...
        }
}

// Time Complexity - O(n*n)
// Space Complexity - O(1) 



// 2. Using Hashmap

// // In this approach I will use hashmap and a vector to return the index of the elements if the target is found by addition of two elements.Time Complexity - O(n) because I will tarverse the array only once and Hasmap has a time compelexity of O(1) for insertion. 
// Space Complexity - O(1) Code is as follows :


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int>ans;                  
        unordered_map<int,int>m;
        
        for(int i=0;i<nums.size();i++)    
        {
            int val = target-nums[i];
            if(m.find(val)!=m.end()) // in case the second element is found 
            {
                ans.push_back(m.find(val)->second);
                ans.push_back(i);
                break;
            }
            m.insert(pair<int,int>(nums[i],i)); // in case the above criteria is not satisfied I will keep inserting the element in the hashmap 
        }
        return ans;
    }
};