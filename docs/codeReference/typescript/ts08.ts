const ORIGIN ={
    x:1,
    y:1
} as const;
ORIGIN.x =10;//无法分配到"x"，因为它是只读属性
