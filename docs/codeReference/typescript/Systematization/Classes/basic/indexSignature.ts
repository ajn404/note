class IndexSigMyClass {
    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}

let s = new IndexSigMyClass()
console.log(s.check('abc'));
//undefined
//. Generally it’s better to store indexed data in another place instead of on the class instance itself.


const salary1 = {
    baseSalary: 100_000,
    yearlyBonus: 20_000
};

const salary2 = {
    contractSalary: 110_000
};

function totalSalary(salaryObject: { [key: string]: number }) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}

totalSalary(salary1); // => 120_000
totalSalary(salary2); // => 110_000

//{ [key: string]: number } is the index signature, which tells TypeScript that salaryObject has to be an object with string type as key and number type as value.

const salary3 = {
    baseSalary: '100 thousands'
};

totalSalary(salary3);

/** 
 * 类型“{ baseSalary: string; }”的参数不能赋给类型“{ [key: string]: number; }”的参数。
 * 属性“baseSalary”与索引签名不兼容。不能将类型“string”分配给类型“number”。
 * 
*/


//The key of the index signature can only be a string, number, or symbol. Other types are not allowed:

interface OopsDictionary {
    [key: boolean]: string;
}

/**
 * 索引签名参数类型必须是 “string”、“number”、“symbol”或模板文本类型。
 */

//Index signature vs Record<Keys, Type>

const object1: Record<string, string> = { prop: 'Value' };
//you can use a union of string literals to describe the keys in a Record<Keys, Type>: 
//but index signature can not 

type SpecificSalary = Record<'yearlySalary' | 'yearlyBonus', number>

const recordSalary1: SpecificSalary = {
    'yearlySalary': 120_000,
    'yearlyBonus': 10_000
}; // OK