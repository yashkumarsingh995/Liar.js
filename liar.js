"use strict"

class Liar
{
  //checks for minimum between two values
  
  min(a,b)
  {
    if(a<=b)
    {
      return a;
    }
    else
    {
      return b;
    }
  }
  
  //checks maximum between two values
  
  max(a,b)
  {
    if(a>=b)
    {
      return a;
    }
    else
    {
      return b;
    }
  }
  
  //takes two element from array and swaps them.
  //currently not capable for operating on array higher than two dimensions.
  
  swap(arr,a,b,i,j)
  { if(i===undefined || j===undefined)
    {
     let temp=arr[a];
     arr[a]=arr[b];
     arr[b]=temp;
     return arr;  
    }
    else
    {
      let temp=arr[i][a];
      arr[i][a]=arr[j][b];
      arr[j][b]=temp;
      return arr;
    }
  }
  
  // reverse the given array
  
  reverse(arr)
  { 
    let newArr=[];
    if(arr.length===0 || arr===undefined)
      {
        console.error("Array is empty or undefined")
        if(arr.length===0)
        {
          console.warn("Since input array length is zero ,so returning an empty array inturn");
          return newArr;
        }
        else if(arr===undefined)
        {
          console.error("array is undefined");
          return undefined;
        }
      }
    
    for(let j=0,i=arr.length-1;i>=0;i--,j++)
    {
      newArr[j]=arr[i];
    }
    return newArr;
  }
  
  
  // cloning an array upto a certain part to make a new subset of the original array.
  
  cloneArray(arr,startIndex,endIndex)
  {
    
    let newArr=[];
    if(startIndex===undefined)
    {
      startIndex=0;
    }
    if(endIndex===undefined)
    {
      endIndex=arr.length-1;
    }
    
    for(let j=0,i=startIndex;i<=endIndex;i++,j++)
    {
      newArr[j]=arr[i];
    }
    return newArr;
  }
  
  
  
  //delete operation:- an operation to perforn deletion at any position of an array .
  
  /**************************/
  //deletion via index value:- 
  //time complexity-O (n).
  
  //deletion via element :-
  //time complexity-O (nlogn).
  
  /*************************/
  
  deletion(arr,value,option)
  {
    
    if(arr===undefined)
    {
      console.error("undefined input array");
      return undefined;
    }
    
    if(option ===undefined)
    {
      console.warn("undefined options .It must be a valid input")
      return undefined;
    }
    
    //option = 0 =) deletion via index
    //option = 1 =) deletion via element
    
    
    if(option ===0)
    {
      let newArr=[];
      for(let i=0;i<value;i++)
      {
        newArr.push(arr[i]);
      }
      for(let i=value+1;i<arr.length;i++)
      {
        newArr.push(arr[i]);
      }
      return newArr;
    }
    
    else if(option ===1)
    {
      let val=this.searchBinary(arr,value)
      if(val.found===true)
      {
        let newArr=this.deletion(arr,val.index,0);
        return newArr;
      }
      else
      { 
        console.error("value not found!!please check your inputs");
        return undefined;
      }
      
    }
    
  }
  
  
  //sum function for summing all the values of array.
  
  getSum(arr,startIndex,endIndex)
  {
    
    if(startIndex===undefined)
    {
      startIndex=0;
    }
    if(endIndex===undefined)
    {
      endIndex=arr.length-1;
    }
    
    let result=0;
    for(let i=startIndex;i<=endIndex;i++)
    {
      result+=arr[i];
    }
    
    return result;
    
  }
  
  //function multiply:- to multply the specified elements of an array.
  
  getMultiplied(arr, startIndex, endIndex)
  {
  
    if (startIndex === undefined)
    {
      startIndex = 0;
    }
    if (endIndex === undefined)
    {
      endIndex = arr.length - 1;
    }
  
    let result = 0;
    for (let i = startIndex; i <= endIndex; i++)
    {
      result *= arr[i];
    }
  
    return result;
  
  }
  
  
  //map functions = applying any functions on a set of elements in an array.
  
  mapOnArray(arr,func,startIndex,endIndex)
  { 
    if (startIndex === undefined)
    {
      startIndex = 0;
    }
    if (endIndex === undefined)
    {
      endIndex = arr.length - 1;
    }

    for (let j = startIndex; j <=endIndex; j++)
    {
      arr[j]  = func(arr[j]);
    }
    
    return arr;
  }
  
  // countBinary is a function which will work for a binary array and will count the number of occurrences of 0 and 1 respectively.
  
  countBinary(arr)
  {
    let numberOf0=0;
    let numberOf1=0;
    
    if (startIndex === undefined)
    {
      startIndex = 0;
    }
    if (endIndex === undefined)
    {
      endIndex = arr.length - 1;
    }
    
    for(let i=startIndex;i<=endIndex;i++)
    {
      if(arr[i]===0)
      {
        numberOf0++;
      }
      else
      {
        numberOf1++;
      }
    }
    return {count0:numberOf0,count1:numberOf1};
  }
  
  
  //makes a table of number of occourences of elements in an array.
  //time complexity-O(nlog(k) + nlog(n)).
  
  countElement(arr)
  {
    let countArr=[];
    let frequency=[];
    arr = this.sortMerge(arr);
    
    for(let i=0;i<arr.length;i++)
    {
      let val = this.searchBinary(countArr,arr[i]);
      if(val.found===true)
      { 
        frequency[val.index]++;
      }
      else
      {
        countArr.push(arr[i]);
        frequency.push(1);
      }
    }
    return {frequency:frequency,number:countArr};
  }
  
  
  // Removing duplicate elements from an array.
  
  removeDuplicate(arr)
  {
    let duplicateArr=this.countElement(arr);
    return duplicateArr.number;
  }
  
  
  
  // ******SEARCHING OPERATIONS USING DIFFERENT    ALGORITHMS******
  
  // (1):-linear search
  // time complexity:-O(n) {in worsr case}.
  
  
  searchLinear(arr,element,startIndex,endIndex)
  { 
    
    //checks if the start amd the end indexes are specified or not.
    
    if(startIndex===undefined)
    {
      startIndex=0;
    }
    if(endIndex===undefined)
    {
      endIndex=arr.length;
    }
    
    //linear search starts here.
    
    for(let i=startIndex;i<endIndex;i++)
    {
      if(arr[i]===element)
      {
        return {found:true,index:i};
      }
    }
    return {found:false,index:undefined};
  }
  
  
  //(2):- Binary search
  //time complexity:-O(log(n)).
  
  searchBinary(arr,element,startIndex,endIndex)
  { 
    if(startIndex===undefined)
    {
     startIndex=0;
    }
    if(endIndex===undefined)
    {
     endIndex=arr.length-1;
    }

    while(startIndex<=endIndex)
    { 
      let mid=Math.floor((startIndex+endIndex)/2);
      
      if(arr[mid]===element)
      {
        return {found:true,index:mid};
      }
      else if(arr[mid]>element)
      {
        endIndex=mid-1;
      }
      else
      {
        startIndex=mid+1;
      }
    }
    return {found:false,index:undefined};
  }
  
  //(3):- Jump search
  //time complexity:-O(log(n));
  
  
  searchJump(arr,element,startIndex,endIndex,jumpValue)
  {
    if (startIndex === undefined)
    {
      startIndex = 0;
    }
    if (endIndex === undefined)
    {
      endIndex = arr.length;
    }
    //check if the jumpValue is defined or not.
    
    if(jumpValue===undefined)
    {
      jumpValue=Math.floor(Math.sqrt(endIndex));
    }
    //main code goes here
    for(let i=startIndex;i<endIndex;i+=jumpValue)
    {
      if(arr[i]===element)
      {
        return {found:true,index:i};
      }
      if(arr[i]>=element)
      { 
        let value=this.searchLinear(arr,i,i + jumpValue);
        return value;
      }
    }
    return {found:false,index:undefined};
    
  }
  
  
  
  // (4):- interpolation search
  // improvement over binary search.
  // time complexity:-O(log n).
  
  searchInterpolation(arr,element,startIndex,endIndex)
  {
    if (startIndex === undefined)
    {
      startIndex = 0;
    }
    if (endIndex === undefined)
    {
      endIndex = arr.length - 1;
    }
    
    while (startIndex <= endIndex)
    {
      let mid = startIndex +  (element-arr[startIndex])*Math.floor((endIndex-startIndex) / (arr[endIndex]-arr[startIndex])) ;
      
      
      if (arr[mid] === element)
      {
        return { found: true, index: mid };
      }
      else if (arr[mid] > element)
      {
        endIndex = mid - 1;
      }
      else
      {
        startIndex = mid + 1;
      }
    }
    return { found: false, index: undefined };
  }
  
  
  // (5):- exponential search
  
  
  searchExponential(arr,element,startIndex,endIndex)
  {
    if (startIndex === undefined)
    {
      startIndex = 0;
    }
    if (endIndex === undefined)
    {
      endIndex = arr.length;
    }
   
    if(arr[startIndex]===element)
    {
      return {found:true,index:startIndex};
    }
    startIndex+=1;
    let i=startIndex;
    while(i<endIndex && arr[i]<=element)
    {
      i*=2;
    }
    return this.searchBinary(arr,element,Math.floor(i/2),i);
  }
  
  
  //*********************************//
  
  
  
  // ******SORTING METHODS USING DIFFERENT SORTING ALGORITHMS*******
 
 
 //(1):- Selection sort algorithm
 
 sortSelection(arr)
 { 
   for(let i=0;i<arr.length-1;i++)
   {
     let minIndex=i;
   
     for(let j=i+1;j<arr.length;j++)
     {
       if(arr[j]<=arr[minIndex])
       {
         minIndex=j;
       }
     }
    arr=this.swap(arr,minIndex,i);
   }
   return arr;
 }
 
 
  
 //(2):- Bubble Sort algorithm
 
 sortBubble(arr)
 {
   for (let i = 0; i < arr.length - 1; i++)
   {
     for (let j = 0; j < arr.length-i-1; j++)
     {
       if (arr[j] > arr[j+1])
       {
         arr = this.swap(arr,j,j+1);
       }
     }
   }
   return arr;
 }
 
 
 //(3):- insertion sort
 
 sortInsertion(arr)
 {
   for(let i=0;i<arr.length;i++)
   {
     let key=arr[i];
     let j=i-1;
     while(j>=0 && arr[j]>key)
     {
       arr=this.swap(arr,j+1,j);
       j--;
     }
   }
   return arr;
 }


//(4):- merge sort


//(4.1):- merging function
//it takes two  sorted arrays as inputs and returns the combined sorted array 

merge(arr1,arr2,value)
{ 
  let ptrL=arr1.length-1;
  let ptrR=arr2.length-1;
  let finalArray=[];
  
  while(ptrL>=0 && ptrR >=0)
  {
    if(arr1[ptrL]>=arr2[ptrR])
    {
      finalArray.push(arr1[ptrL]);
      count++;
      ptrL--;
    }
    else
    {
      finalArray.push(arr2[ptrR]);
      ptrR--;
    }
  }
  
  
  if(ptrL >= 0)
  {
    while(ptrL>=0)
    { 
      finalArray.push(arr1[ptrL]);
      ptrL--;
    }
  }
  
  if (ptrR >= 0)
  { 
    while (ptrR >= 0)
    { 
      finalArray.push(arr2[ptrR]);
      ptrR--;
    }
  }
  if(value===1 || value===undefined)
  {
    return finalArray;
  }
  else
  {
   return this.reverse(finalArray);
  }
 
}

 
 
 //(4.2):- mergeSort algorithm driver code.
 

 
 sortMerge(arr)
 { 
   if(arr.length==1)
   { 
     count+=0.5;
     return arr;
   }
   
   let startIndex=0;
   let endIndex=arr.length-1;
   let midIndex=Math.floor((startIndex+endIndex)/2);
   
   let arrLeft=this.cloneArray(arr,startIndex,midIndex);
   
   let arrRight=this.cloneArray(arr,midIndex+1,endIndex);
  
   
   let sortLeft=this.sortMerge(arrLeft);
   let sortRight=this.sortMerge(arrRight);
   
   let result=this.merge(sortLeft,sortRight,0);
   return result;
   
 }
 
 
 
 //(5):- heap sort algorithm
 
 
 // (5.1):- building heap using max heapify method.
 //time complexity:-O(n).
 
 maxHeapify(arr,arrSize,index)
 {
   let largest=index;
   let leftPtr=2*index+1;
   let rightPtr=2*index+2;
   
   if (leftPtr < arrSize && arr[leftPtr] > arr[largest])
   {
     largest = leftPtr;
   }
   
   
   if (rightPtr < arrSize && arr[rightPtr] > arr[largest])
   {
     largest = rightPtr;
   }
   
   
   if(largest!=index)
   {
     arr=this.swap(arr,largest,index);
     arr=this.maxHeapify(arr,arrSize,largest);
   }
   return arr;
 }
 
 //(5.2):- min heapify operation in a array.
 // time complexity-O(n).
 
 minHeapify(arr, arrSize, index)
 {
   let largest = index;
   let leftPtr = 2 * index + 1;
   let rightPtr = 2 * index + 2;
 
   if (leftPtr < arrSize && arr[leftPtr] < arr[largest])
   {
     largest = leftPtr;
   }
 
 
   if (rightPtr < arrSize && arr[rightPtr] < arr[largest])
   {
     largest = rightPtr;
   }
 
 
   if (largest != index)
   {
     arr = this.swap(arr, largest, index);
     arr = this.maxHeapify(arr, arrSize, largest);
   }
   return arr;
 }
 
 
 
 
 
 //(5.3):-heapsort algorithm
 //time complexity:- O(nlog(n)).
 
 
 sortHeap(arr,value)
 { 
   if(value===undefined)
   {
     value=0;
   }
   
   let newArr=[];
   
   
   if(value===0)
   {
     
   for(let i=Math.floor(arr.length/2)-1;i>=0;i--)
   {
    arr=this.minHeapify(arr,arr.length,i);
   }
   
   for(let i=arr.length-1;i>=0;i--)
   { 
     arr=this.swap(arr,0,i);
     newArr.push(arr[arr.length-1]);
     arr.pop(arr[arr.length-1]);
     arr=this.minHeapify(arr,arr.length,0);
   }
   
   }
   
   else if(value===1)
   {
     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
     {
       arr = this.maxHeapify(arr, arr.length, i);
     }
     
     for (let i = arr.length - 1; i >= 0; i--)
     {
       arr = this.swap(arr, 0, i);
       newArr.push(arr[arr.length - 1]);
       arr.pop(arr[arr.length - 1]);
       arr = this.maxHeapify(arr, arr.length, 0);
     }
   }
   
   else
   {
     console.error("invalid option!!! give either 1 or 0 or do not give any value for default procedure");
     return undefined;
   }
   
   return newArr;
 }
 
 
 // quick sort algorithm
 //time complexity-O (nlogn)
 
   
  sortQuick(arr,start,end)
{
  if(start>=end)
  {
    return ;
  }
  let index = this.partition(arr,start,end);
  
  this.sortQuick(arr,start,index-1);
  
  this.sortQuick(arr,index+1,end);
  
}

//partition function for quick sort algorithm
//it can be also used for partitioning the array in two halves where one side contains elements less than the partitioning element and vice versa in the greater side.
  
  partition(arr,start,end)
{ 
  let pivotValue=arr[end];
  let pivotIndex=start;
  
  for(let i=start;i<end;i++)
  {
    if(arr[i]<pivotValue)
    { 
      arr=this.swap(arr,pivotIndex,i);
      pivotIndex++
    }
    
  }
  arr=this.swap(arr,pivotIndex,end);
  
  return pivotIndex;
}


/***********************************/
 //PATTERN SEARCHING ALGORITHM
 
 
 //(1):- navie searching method
 //time complexity-O (n x m).
 
 navieSearch(txt,pattern)
 { 
   let newArr=[];
   let count=0;
   for(let i=0;i<txt.length-pattern.length;i++)
   {
     let j;
     for(j=0;j<pattern.length;j++)
     {
       if(pattern[j]!==txt[i+j])
       {
         break;
       }
     }
     if(j===pattern.length)
     {
       newArr.push({count:count,index:i});
     }
   }
   return newArr;
 }
 
 //(2):-KMP string searching algorithm
 //time complexity-O (n+m)
 
 
 //(2.1):- creating pi or LPS table
 //time complexity-O (m)
 
 createLPSTable(arr)
 {
  
   let newArr=new Array(arr.length);
   
   let j=0;
   newArr[j]=0;
   for(let i=1;i<arr.length;i++)
   {
     if(arr[i]===arr[j])
     {
       console.log(arr[i],arr[j])
       newArr[i]=j+1;
       j++;
     }
     else
     { 
       newArr[i]=0;
       j=0;
     }
   }
   
   return newArr;
 }
 
 
 //(2.2):- kmp pattern searching algorithm
 //time complexity-O (n)
 
 
 KMPSearch(txt,pattern)
 { let resultArr=[];
   let lpsTable=this.createLPSTable(pattern);
   let j=-1;
   for(let i=0;i<txt.length;i++)
   {
     if(txt[i]===pat[j+1])
     {
       j++;
       if(j===pattern.length-1)
       {
        // console.log("pattern found " + i);
         resultArr.push(i-1);
         j=0;
       }
     }
     else
     {
       j=lpsTable[j];
     }
   }
   return resultArr;
 }
 
 
 //(3):- Rabin-Karp algorithm for pattern searching.
 //time complexity-O (n-m+1).
 
 
 //(3.1):- function for creating hashCode by a hashfunction and an array.
 
  generateHashCode(arr,baseValue,startIndex,endIndex,hashFunction)
  {
    
    if(startIndex===undefined)
    {
      startIndex=0;
    }
    if(endIndex===undefined)
    {
      endIndex=arr.length-1;
    }
    if(hashFunction===undefined)
    {
      hashFunction=(arr,baseValue,i,endIndex)=>{
        let result=Math.pow(baseValue,(endIndex-i))*arr[i];
        return result;
      }
    }
    
    let value=0;
    
    for(let i=startIndex;i<=endIndex;i++)
    {
      value+=hashFunction(arr,baseValue,i,endIndex);
    }
    return value;
  }
 
 //(3.2):- hash rolling function.

 
 rollupHash(index,pattern,text,hashValue,baseValue,length)
 {
   if(length===undefined)
   {
     length=pattern.length-1;
   }
   
   hashValue=(hashValue-(text[index]*Math.pow(baseValue,length)))*baseValue;
   hashValue+=text[index+length+1];
   
   return hashValue;
 }
 
 
 
 //(3.3):- rabin karp algorithm for pattern searching.
 
 Rabin_Karp(txt,pattern,baseValue)
 {
   let result=[];
   let hashCodeInPattern=this.generateHashCode(pattern,baseValue);
   
   
   let hashCodeInaText=this.generateHashCode(txt,baseValue,0,2);
   
   for(let i=0;i<txt.length-pattern.length+1;i++)
   { 
     
     if(hashCodeInaText===hashCodeInPattern)
     { 
       
       result.push(i)
      // console.log("pattern found!!!")
       hashCodeInaText= this.rollupHash(i,pattern,txt,hashCodeInaText,baseValue);
     }
     else
     { 
       hashCodeInaText=this.rollupHash(i,pattern,txt,hashCodeInaText,baseValue);
     }
   }
   
   return result;
   
   
 }
 
 
 /***********************/
 
 //OTHER ARRAY FUNCTIONS 
 
 
 //find k'th minimum element in an given array.
 //time complexity-O (nlogn).
 
 kthMinimum(arr,position)
 {
   let reducedArr=this.countElement(arr);
   
   if(position-1<reducedArr.number.length && position-1 >=0)
   { 
   return reducedArr.number[position-1];
   }
   else
  {
   console.error("invalid position !!! give a valid position");
   return undefined;
  }
  
 }
 
 //finding the K'th maximum.
 //time complexity-O (nlogn) 
 
 kthMaximum(arr,position)
 {
   let reducedArr=this.countElement(arr);
   
   if(position-1<reducedArr.number.length && position-1 >=0)
   { 
   return reducedArr.number[reducedArr.number.length-position];
   }
   else
  {
   console.error("invalid position !!! give a valid position");
   return undefined;
  }
  
 }
 
 
 
 
 /*******************************/
 
 
 //median of two arrays of same size.
 
 getMaedianOfTwoArrays(arr1,arr2)
 {
   let mergedSortedArray=this.merge(arr1,arr2,1);
   let minLeft=Math.floor(mergedSortedArray/2);
   let minRight=Math.ceil(mergedSortedArray/2);
   let result=(minLeft+minRight)/2;
   
   return result;
 }



// count inversion problem


// a merge function with a little tweek.

countInversion(arr)
{
  var c=this.sortMerge(arr)
  console.log(count)
}
 
 /*******************************/
 //STACK AND QUEUE OPERATIONS
 
 
 //stack operations in an array
 
 //A stack object is created and it will contain different operations performed on an array/stack.
 
 Stack=
 {
   doSomeOperationsWhileStackIsNotEmpty(stack,functionName)
   { 
     while(stack.length>0)
     { 
      return { output:functionName(stack[stack.length-1]),stack:stack.pop()};
     }
   }
 }

 
}

