//“相对复杂“

// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };


type PropGetters <TObj extends Record<string,any>> = {
    [Tkey in string & keyof TObj as `get${Capitalize<Tkey>}`]:()=>TObj[Tkey];
}