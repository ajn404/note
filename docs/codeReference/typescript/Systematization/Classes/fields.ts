class FieldsPoint {
    x: number;
    y: number;
}

const pt = new FieldsPoint();
pt.x = 0;
pt.y = 0;


//--strictPropertyInitialization


//use the definite assignment assertion operator
class OKGreeter {
    // Not initialized, but no error
    name!: string;
}
