// Question : 24
// Create a function that will merge two array and return
let arr1 = [1, 5, 8, 7, 4, 9, 6];
let arr2 = [45, 15, 87, 4, 5];
let func24 = function (arr1, arr2) {
    let merge_arr = [];
    let ind = 0;
    for (let i = 0; i < arr1.length + arr2.length; i++) {
        if (i < arr1.length) {
            merge_arr[i] = arr1[i];
        } else {
            merge_arr[i] = arr2[ind];
            ind++;
        }
    }
    console.log(merge_arr);
};
func24(arr1, arr2);
// altermate question
let arr1 = [1, 5, 8, 7, 4, 9, 6];
let arr2 = [45, 15, 87, 4, 5];
let func24 = function (arr1, arr2) {
    let merge_arr = [];
    let ind = 0;
    let isDuplicate = true;
    for (let i = 0; i < arr1.length + arr2.length; i++) {
        if (i < arr1.length) {
            for(let j = 0; j< i; j++){
                if(merge_arr[j] == arr1[ind]){
                    ind++;
                    isDuplicate = false;
                    break;
                }
            }
        }
        if(isDuplicate){
            merge_arr[i] = arr1[ind];
        } 
        else {
            merge_arr[i] = arr2[ind];
            ind++;
        }
    }
    console.log(merge_arr);
};
func24(arr1, arr2);