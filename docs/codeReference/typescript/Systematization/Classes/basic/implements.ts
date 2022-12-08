/**
 * 
 * It’s important to understand that an implements clause is only a check that the class can be treated as the
 * interface type.
 */

interface Checkable {
    check(name: string): boolean;
}

class NameChecker implements Checkable {
    check(s) {
        // Notice no error here
        return s.toLowercse() === "ok";
    }
}

//implementing an interface with an optional property doesn’t create that property:
interface A {
    x: number;
    y?: number;
  }
  class C implements A {
    x = 0;
  }
  const c = new C();
  //类型“C”上不存在属性“y”
  c.y = 10;