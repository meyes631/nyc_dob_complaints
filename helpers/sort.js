//=============================================
// Sorting
//
// You can use these functions to sort
// your data from Hight to Low or Low to Hight.
//
// It takes an object like this:
// {"keyA":"50","keyB":"70","keyC":"1"}
// And sorts it by value into an array like this:
// [["keyC","1"],["keyA","50"],["keyB","70"]]
//============================================

function sortHighLow(obj)
{
  // convert object into array
    var sortable=[];
    for(var key in obj)
        if(obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort(function(a, b)
    {
      return b[1]-a[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}

function sortLowHigh(obj)
{
  // convert object into array
    var sortable=[];
    for(var key in obj)
        if(obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort(function(a, b)
    {
      return a[1]-b[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}