//“相对复杂“

// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };


type PropGetters <TObj extends Record<string,any>> = {
    [Tkey in string & keyof TObj as `get${Capitalize<Tkey>}`]:()=>TObj[Tkey];
}

function createGetterObject <TObj extends Record<string,any>>(obj:TObj):PropGetters<TObj>{
    const newObj:any = {};
    for(const key of Object.keys(obj)){
        const capitalizedKey = key[0].toUpperCase()+key.substr(1);
        const getterKey = `get${capitalizedKey}`;
        newObj[getterKey] = ()=> obj[key];
    }
    return newObj
}

const user = createGetterObject({
    id:123,
    name:'王德发',
    phone:12510102031
})

console.log(user.getId);
