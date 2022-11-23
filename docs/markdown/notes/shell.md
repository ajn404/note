---
title : 命令行注释（macos）
---
[[toc]]

### cal
```shell 日历
cal
      八月 2022         
日 一 二 三 四 五 六  
    1  2  3  4  5  6  
 7  8  9 10 11 12 13  
14 15 16 17 18 19 20  
21 22 23 24 25 26 27  
28 29 30 31     
```

:::details 实时运行
<ClientOnly>
<asciinemaPlayerBox file='cal'></asciinemaPlayerBox>
</ClientOnly>
:::



### ping 
```shell 
ping 112.80.248.75

PING 112.80.248.75 (112.80.248.75): 56 data bytes
64 bytes from 112.80.248.75: icmp_seq=0 ttl=54 time=16.360 ms
64 bytes from 112.80.248.75: icmp_seq=1 ttl=54 time=15.340 ms
64 bytes from 112.80.248.75: icmp_seq=2 ttl=54 time=22.679 ms
64 bytes from 112.80.248.75: icmp_seq=3 ttl=54 time=12.669 ms
64 bytes from 112.80.248.75: icmp_seq=4 ttl=54 time=12.539 ms
64 bytes from 112.80.248.75: icmp_seq=5 ttl=54 time=19.038 ms
64 bytes from 112.80.248.75: icmp_seq=6 ttl=54 time=15.320 ms
64 bytes from 112.80.248.75: icmp_seq=7 ttl=54 time=19.247 ms
64 bytes from 112.80.248.75: icmp_seq=8 ttl=54 time=20.838 ms
^C
--- 112.80.248.75 ping statistics ---
9 packets transmitted, 9 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 12.539/17.114/22.679/3.345 ms
```
如果主机正在运行并连在网上，它就对回送信号进行响应。每个回传请求都包含一个因特网协议 (IP) 和 ICMP 头，后跟 timeval 结构以及足够用于填充包的字节。缺省情况是连续发送回送信号请求直到接收到中断信号 (Ctrl-C)。

```shell
ping 112.80.248.75 --apple-time

PING 112.80.248.75 (112.80.248.75): 56 data bytes
16:22:34.425612 64 bytes from 112.80.248.75: icmp_seq=0 ttl=54 time=22.271 ms
16:22:35.429450 64 bytes from 112.80.248.75: icmp_seq=1 ttl=54 time=21.034 ms
Request timeout for icmp_seq 2
16:22:37.424474 64 bytes from 112.80.248.75: icmp_seq=3 ttl=54 time=12.005 ms
16:22:38.434796 64 bytes from 112.80.248.75: icmp_seq=4 ttl=54 time=17.195 ms
16:22:39.442434 64 bytes from 112.80.248.75: icmp_seq=5 ttl=54 time=19.668 ms
16:22:40.448814 64 bytes from 112.80.248.75: icmp_seq=6 ttl=54 time=20.844 ms
16:22:41.448862 64 bytes from 112.80.248.75: icmp_seq=7 ttl=54 time=15.566 ms
16:22:42.456996 64 bytes from 112.80.248.75: icmp_seq=8 ttl=54 time=18.491 ms
16:22:43.466351 64 bytes from 112.80.248.75: icmp_seq=9 ttl=54 time=22.927 ms
16:22:44.466986 64 bytes from 112.80.248.75: icmp_seq=10 ttl=54 time=21.621 ms
16:22:45.477471 64 bytes from 112.80.248.75: icmp_seq=11 ttl=54 time=26.769 ms
^C
--- 112.80.248.75 ping statistics ---
12 packets transmitted, 11 packets received, 8.3% packet loss
round-trip min/avg/max/stddev = 12.005/19.854/26.769/3.785 ms
```

### [ncv](https://github.com/raineorshine/npm-check-updates)
:::tip
npm install -g npm-check-updates
ncu
ncu -u
:::
```shell
npm install -g npm-check-updates
added 273 packages in 11s

[ajn404@ajn404deMacBook-Air note % ncu
Using yarn
Checking /Users/ajn404/Documents/blog/note/package.json
[====================] 10/10 100%

 @codemirror/lang-javascript    ^6.0.2  →    ^6.1.0
 three                        ^0.142.0  →  ^0.144.0
 unplugin-vue-components       ^0.22.0  →   ^0.22.7

Run ncu -u to upgrade package.json

[ajn404@ajn404deMacBook-Air note % ncu -u
Using yarn
Upgrading /Users/ajn404/Documents/blog/note/package.json
[====================] 10/10 100%

 @codemirror/lang-javascript    ^6.0.2  →    ^6.1.0
 three                        ^0.142.0  →  ^0.144.0
 unplugin-vue-components       ^0.22.0  →   ^0.22.7

Run yarn install to install new versions.
```
:::details 实时运行
<ClientOnly>
<asciinemaPlayerBox file='ncu'></asciinemaPlayerBox>
</ClientOnly>
:::


### asciinema 

录制 asciinema rec<br/>
播放 asciinema play<br/>
生成的cast文件示例


### curl

:::tip
curl parrot.live
:::

:::details 实时运行
<ClientOnly>
<asciinemaPlayerBox file='curlLive'></asciinemaPlayerBox>
</ClientOnly>
:::


#### 新写一个asciinema player的vue3 npm组件库 
[git仓库](https://github.com/ajn404/vue3-asciinema-player) <br/>
[npm仓库](https://www.npmjs.com/package/vue3-asciinema-player)