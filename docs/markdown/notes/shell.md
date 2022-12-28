---
title : 命令行注释（macos）
---
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

### [ncv](https://github.com/raineorshine/npm-check-updates): npm-check-updates upgrades your package.json dependencies
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


### asciinema: Record and share your terminal sessions, the simple way.

录制 asciinema rec<br/>
播放 asciinema play<br/>
生成的cast文件示例


### curl: Client URL 工具

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


### whois: 查询域名ip及所有者信息

:::details shell

```shell
whois github.com
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.verisign-grs.com

domain:       COM

organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston Virginia 20190
address:      United States

contact:      administrative
name:         Registry Customer Service
organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston Virginia 20190
address:      United States
phone:        +1 703 925-6999
fax-no:       +1 703 948 3978
e-mail:       info@verisign-grs.com

contact:      technical
name:         Registry Customer Service
organisation: VeriSign Global Registry Services
address:      12061 Bluemont Way
address:      Reston Virginia 20190
address:      United States
phone:        +1 703 925-6999
fax-no:       +1 703 948 3978
e-mail:       info@verisign-grs.com

nserver:      A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30
nserver:      B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30
nserver:      C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30
nserver:      D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30
nserver:      E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30
nserver:      F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30
nserver:      G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30
nserver:      H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30
nserver:      I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30
nserver:      J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30
nserver:      K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30
nserver:      L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30
nserver:      M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30
ds-rdata:     30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CFC41A5766

whois:        whois.verisign-grs.com

status:       ACTIVE
remarks:      Registration information: http://www.verisigninc.com

created:      1985-01-01
changed:      2017-10-05
source:       IANA

# whois.verisign-grs.com

   Domain Name: GITHUB.COM
   Registry Domain ID: 1264983250_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.markmonitor.com
   Registrar URL: http://www.markmonitor.com
   Updated Date: 2022-09-07T09:10:44Z
   Creation Date: 2007-10-09T18:20:50Z
   Registry Expiry Date: 2024-10-09T18:20:50Z
   Registrar: MarkMonitor Inc.
   Registrar IANA ID: 292
   Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
   Registrar Abuse Contact Phone: +1.2086851750
   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
   Name Server: DNS1.P08.NSONE.NET
   Name Server: DNS2.P08.NSONE.NET
   Name Server: DNS3.P08.NSONE.NET
   Name Server: DNS4.P08.NSONE.NET
   Name Server: NS-1283.AWSDNS-32.ORG
   Name Server: NS-1707.AWSDNS-21.CO.UK
   Name Server: NS-421.AWSDNS-52.COM
   Name Server: NS-520.AWSDNS-01.NET
   DNSSEC: unsigned
   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of whois database: 2022-12-08T03:47:21Z <<<

# whois.markmonitor.com

Domain Name: github.com
Registry Domain ID: 1264983250_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.markmonitor.com
Registrar URL: http://www.markmonitor.com
Updated Date: 2022-09-07T09:10:44+0000
Creation Date: 2007-10-09T18:20:50+0000
Registrar Registration Expiration Date: 2024-10-09T00:00:00+0000
Registrar: MarkMonitor, Inc.
Registrar IANA ID: 292
Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
Registrar Abuse Contact Phone: +1.2083895770
Domain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)
Domain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)
Domain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)
Registrant Organization: GitHub, Inc.
Registrant State/Province: CA
Registrant Country: US
Registrant Email: Select Request Email Form at https://domains.markmonitor.com/whois/github.com
Admin Organization: GitHub, Inc.
Admin State/Province: CA
Admin Country: US
Admin Email: Select Request Email Form at https://domains.markmonitor.com/whois/github.com
Tech Organization: GitHub, Inc.
Tech State/Province: CA
Tech Country: US
Tech Email: Select Request Email Form at https://domains.markmonitor.com/whois/github.com
Name Server: ns-520.awsdns-01.net
Name Server: dns1.p08.nsone.net
Name Server: dns4.p08.nsone.net
Name Server: ns-1707.awsdns-21.co.uk
Name Server: dns2.p08.nsone.net
Name Server: ns-421.awsdns-52.com
Name Server: ns-1283.awsdns-32.org
Name Server: dns3.p08.nsone.net
DNSSEC: unsigned
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
>>> Last update of WHOIS database: 2022-12-08T03:46:35+0000 <<<
```
:::

:::details 实时运行
<ClientOnly>
<asciinemaPlayerBox file='whois'></asciinemaPlayerBox>
</ClientOnly>
:::


<ClientOnly>
<shoot></shoot>
</ClientOnly>
