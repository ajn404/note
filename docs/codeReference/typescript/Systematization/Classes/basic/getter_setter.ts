class GetterSetterC {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}


/*
TypeScript has some special inference rules for accessors:

If get exists but no set, the property is automatically readonly
If the type of the setter parameter is not specified, it is inferred from the return type of the getter
Getters and setters must have the same Member Visibility
*/

class GetterSetterThing {
    _size = 0;
    get size(): number {
        return this._size
    }

    set size(value: string | number | boolean) {
        let num = Number(value);
        if (!Number.isFinite(num)) {
            this._size = 0;
            return
        }
        this._size = num;
    }
}