// implements
// A implements B，A 上要有 B 对应的属性和方法,不能用于两个 interface 之间

interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}


/**
 * 类“Ball”错误实现接口“Pingable”。
 * 类型 "Ball" 中缺少属性 "ping"，但类型 "Pingable" 中需要该属性。
 */
class Ball implements Pingable {
    pong() {
        console.log("pong!");
    }
}