// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array); // false
console.log(b instanceof Array); // true


// 编写程序，将下面数组中的每一项都乘以2。
var aa = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

var ba = aa.map(item => {
    return item * 2
});
console.log(ba); // [2,4,6,8,10]



// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

// case 1
console.log(colors.join(' '));
// case 2
console.log(colors.join('+'));
// case 3
console.log(colors.join(','));



// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var aaa = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(aaa.sort((a1, b1) => {
    return b1 - a1;
})); // [10,8,5,4,1]



// 编程程序，找出下列数组中出现频率最高的元素。
var aaaa = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let aMap = new Map();
aaaa.forEach(item => {
    let b = aaaa.filter(filterItem => {
        return filterItem === item;
    });
    aMap.set(item, b.length);
});
let maxCount = 0;
let maxItem;
aMap.forEach((value, key) => {
    if (value > maxCount) {
        maxCount = value;
        maxItem = key;
    }
});
console.log('频率最高的元素 =>', maxItem); // 'a'

