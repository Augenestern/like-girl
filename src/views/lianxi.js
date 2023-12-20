// const { log } = require("console");

console.log('----------------------------');

function shulian(n, C) {
    // n.sort((a, b) => a - b);
    n = quickSort(n)

    let left = 0;
    let right = n.length - 1;
    let count = 0;
    while (left <= right) {
        if (n[left] + n[right] <= C) {
            left++;
            right--;
        } else {
            right--;
        }
        count++
    }
    return count
}

//快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex]
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == pivotIndex) {
            continue
        }

        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// const people = [60, 10, 50, 80, 75, 40];
// const C = 100;
// console.log(shulian(people, C));


function erXiang(m, n) {
    let x = 1;
    let t = m - n
    while (m > 0) {
        x = x * m;
        m--;
    }
    let y = 1;
    while (n > 0) {
        y = y * n;
        n--;
    }
    let z = 1;
    while (t > 0) {
        z = z * t;
        t--;
    }
    return x / (z * y)
}

// console.log(erXiang(5,2));

var minWindow = function (s, t) {
    let left = 0;
    let right = 0;
    let str = ""
    let map = new Map();
    for (let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let count = map.size;
    while (right < s.length) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1)
            if (map.get(s[right]) === 0) {
                count--;
            }
        }
        while (count === 0) {
            if (map.has(s[left])) {
                let lsStr = s.substring(left, right + 1);
                if (!str || lsStr.length < str.length) { str = lsStr }
                map.set(s[left], map.get(s[left]) + 1)
                if (map.get(s[left]) > 0) {
                    count++;
                }
            }
            left++
        }
        right++;
    }
    return str
};

// let s = "adaryrta"
// let t = "aa"
// console.log(minWindow(s, t));


function combine(n, k) {
    let resArr = [];

    function backTracking(n, k, startIndex, tempArr) {
        console.log('back');
        if (tempArr.length === k) {  //终止条件
            console.log('终止');
            resArr.push(tempArr.slice());
            return;
        }
        for (let i = startIndex; i <= n; i++) {
            console.log(i);
            tempArr.push(i);
            backTracking(n, k, i + 1, tempArr);
            tempArr.pop();  //剔除父级
        }
    }
    backTracking(n, k, 1, []);
    return resArr;
};
// console.log(combine(4,2));


var productExceptSelf = function (nums) {
    let left = nums.reduce((left, item, index) => {
        left[index] = (left[index - 1] ?? 1) * (nums[index - 1] ?? 1)
        return left
    }, new Array(nums.length))
    let right = nums.reduceRight((right, item, index) => {
        right[index] = (right[index + 1] ?? 1) * (nums[index + 1] ?? 1)
        return right
    }, new Array(nums.length))
    return left.map((item, index) => item * right[index])
}
// console.log(productExceptSelf([1,2,3,4]));

var firstMissingPositive = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1)
    }
    for (let i = 1; i <= nums.length + 1; i++) {
        if (!map.has(i)) {
            return i
        }
    }
};
// console.log(firstMissingPositive([3,4,-1,1]));
var setZeroes = function (matrix) {
    let zeroArr = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroArr.push([i, j])
            }
        }
    }
    for (let i = 0; i < zeroArr.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            matrix[zeroArr[i][0]][k] = 0
        }
        for (let k = 0; k < matrix.length; k++) {
            matrix[k][zeroArr[i][1]] = 0
        }
    }
    return matrix
};
// console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));


function findMaxMin(arr) {
    let min, max
    if (arr.length === 1) {
        min = arr[0]
        max = arr[0]
    } else if (arr.length === 2) {
        min = Math.min(arr[0], arr[1])
        max = Math.max(arr[0], arr[1])
    } else {
        let mid = Math.floor(arr.length / 2)
        let left = findMaxMin(arr.slice(0, mid))
        let right = findMaxMin(arr.slice(mid, arr.length))
        min = Math.min(left.min, right.min)
        max = Math.max(left.max, right.max)
    }
    return { min, max }
}
// console.log(findMaxMin([3,5,1,6,7,34,23,6,8,0]));


const memoize = (func, content) => {
    //在当前函数作用域定义一个空对象，用于缓存函数的运行结果
    let cache = Object.create(null);
    content = content || null;
    //运用柯里化返回一个函数
    return (...args) => {
        console.log('concent', content);
        console.log("cache", cache);
        if (!cache[args]) {
            console.log('调用了:', args);
            //call()和apply()：这两个方法允许你在指定的上下文中调用函数，并传递参数。
            //它们的区别在于传递参数的方式不同。call()方法使用逗号分隔的参数列表，而apply()方法使用一个数组作为参数。
            cache[args] = func.call(content, ...args);
            // cache[args] = func.apply(content, args);
        }
        return cache[args];
    }
}
const add = (a, b) => a + b
// const add = function () { [...arguments].reduce((a, b) => a + b) }
const memoizeAdd = memoize(add);
// console.log(memoizeAdd(1, 3));
// console.log(memoizeAdd(1, 3));
// console.log(memoizeAdd(3, 3));
// console.log(memoizeAdd(1, 3));

function add1() {
    let args = [...arguments];
    let inner = function () {
        args = [...args, ...arguments];
        return inner;
    }
    inner.toString = function () {
        return args.reduce((a, b) => a + b);
    }
    return inner;
}
console.log(parseInt(add1(1,10)(3)(4)(5)));

function currying(fn) {
    let length = fn.length;
    console.log(length, 'length');
    let args = [].slice.call(arguments, 1);
    return function () {
        let _args = args.concat([...arguments]);  // 合并参数
        if (_args.length < length) {  // 未接收完参数
            return currying.call(this, fn, ..._args);
        } else {  // 接受完所有参数，直接执行
            return fn.apply(this, _args);
        }
    }
}
// const sum = currying(add,1);
// console.log(sum(2,3));
// console.log(sum(2)(3));















