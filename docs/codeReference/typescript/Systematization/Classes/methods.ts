let x: number = 0;
 
class MethodsC {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 1, not the class property
    //不能将类型“string”分配给类型“number”
    x = "world";
  }
}