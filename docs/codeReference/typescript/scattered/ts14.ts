type Dimention = 'block'|'inline';
type Direction = 'left' | 'right' | 'top' | 'bottom';
type MarginProperty = `margin-${Dimention}-${Direction}`
//type MarginProperty = "margin-block" | "margin-inline"

type MarginUnit = 'px'|'vw'|'%' |'vh';
type MarginValue = `${number}${MarginUnit}`
type MarginPropertyDeclaration = [MarginProperty,MarginValue];

// const margin :MarginPropertyDeclaration = ['margin-block-left','12'];
//不能将类型“["margin-block", "12"]”分配给类型“MarginPropertyDeclaration”

const margin :MarginPropertyDeclaration = ['margin-block-left','12px'];
