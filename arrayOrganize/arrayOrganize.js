var arrays =[]
var arraysize = 1

newnum =1

function newsize(){
   arraysize = document.getElementById("arraysize").value *1
   console.log('arraysize ', arraysize)
}
function bubbleSort(arr) {
            for (var i = 0, endI = arr.length - 1; i < endI; i++) {
                var wasSwap = false;
                for (var j = 0, endJ = endI - i; j <
                    endJ; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                        wasSwap = true;
                    }
                }
                if (!wasSwap) break;
            }
            return arr;
        }

function makeArray(){
    const createArray = arraysize => {
            let temp = [];
            for (let i = 0; i < arraysize; i++) {
                num = Math.floor(Math.random() * 100 + 1)
                temp.push(num)
            }     
            
            return temp
        }

arrays[newnum] = createArray(arraysize)
console.log('Array '+ newnum +': ', arrays[newnum])

document.getElementById("message").innerHTML +=arrays[newnum] + "<br>"
newnum ++
}

function sortArray(){
    document.getElementById("color1").className ="colorbox red"
    document.getElementById("color1").innerText = "קטנים"
    document.getElementById("color2").className ="colorbox green"
    document.getElementById("color2").innerText = "בינונים"
    document.getElementById("color3").className ="colorbox blue"
    document.getElementById("color3").innerText = "גדולים"

    document.getElementById("message").innerHTML =""
    for(let i=1; i<newnum; i++){
        arrays[i] = bubbleSort(arrays[i])
        for (let j=0; j<arrays[i].length; j++)    {
            if(arrays[i][j]<31) {
arrays[i][j]="<span class='red1'>"+arrays[i][j]+"</span>"
            }
            if(arrays[i][j]<61 && arrays[i][j]>30) {
arrays[i][j]="<span class='green1'>"+arrays[i][j]+"</span>"
            }
            if(arrays[i][j]>60) {
arrays[i][j]="<span class='blue1'>"+arrays[i][j]+"</span>"
            }
        }
        document.getElementById("message").innerHTML +=arrays[i] + "<br>"
    } 

}
