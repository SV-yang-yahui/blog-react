
let _ = require('lodash');
let opt = require('opt-lodash')
const names = ['小明', '小李', '小刚'];
const ages = [10, 12, 14]
/**
 * 输出示例
 * [{name:'小明'，age:10}
 * {name:'小李'，age:12}
 * {name:'小刚'，age:14}]
 */
let staff = [];
const num = names.length;
for (let i = 0; i < num; i++) {
    staff.push({ name: names[i], age: ages[i] })
}
const obj={
    a:{b:{c:9}}
}
console.log(_.get(obj,'a','b'))
console.log(opt(0))