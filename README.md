<h1 align="center">Steroid ⚡</h1>
<h3 align="center">Web wallpapers extension.</h3>

<h4 align="center">Steroid is a simple web app, that packs all the necessary features to create your own awesome wallpapers and share them with the world, adding new functionalities to wallpaper engines like Rainmeter, Lively Wallpaper and Wallpaper Engine; creating a hybrid between native and web support through the power of JavaScript applications.</h4>

<br>
<br>

## What is it made of?

- [Node.js](https://github.com/nodejs/node) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Python](https://www.python.org/) - Programming language that lets you work quickly
and integrate systems more effectively.
- [Electron](https://github.com/electron/electron) - Framework to create cross-platform desktop applications using Javascript, CSS and HTML
- [Electron Packager](https://github.com/electron/electron-packager) - Electron app packager
- [Adm-zip](https://github.com/cthackers/adm-zip) - A Javascript implementation of zip for Node.JS.
- [Axios](https://github.com/axios/axios) - Fast Node.js network app framework
- [Express](https://github.com/expressjs/express) - Promise based HTTP client for the browser and Node.JS
- [System Information](https://systeminformation.io/) - System and OS information library for Node.JS
- [Powershell](https://github.com/powershell/powershell) - Command line shell

<br>

## Table of Contents

  - [Features](#features)
  - [To-do](#to-do)
  - [Download](#download)
  - [Installation](#installation)
  - [What is Steroid?](#what-is-steroid-exactly)
    - [Introduction](#introduction)
    - [Functions](#functions)
    - [Main Areas](#main-areas)
   - [How can I talk to Steroid?](#how-can-i-talk-to-steroid)
  - [Reference](#reference)
      - [OS](#os)
      - [CPU](#cpu)
      - [GPU](#gpu)
      - [USB](#usb)
      - [Wi-Fi](#wifi)
      - [Audio](#audio)
      - [Memory](#memory)
      - [System](#system)
      - [Network](#network)
      - [Printer](#printer)
      - [Battery](#battery)
      - [Bluetooth](#bluetooth)
      - [Filesystem](#filesystem)
      - [Motherboard](#motherboard)
      - [Program execution](#program-execution)
      - [Widgets]() **(Not implemented yet)**
      - [Notes and schedule]() **(Not implemented yet)**
  - [Configuration](#Configuration)
      - [How can I send my metrics to another PC?]()
      - [How can I disable Steroid on bootup?]()
  - [Credits](#credits)
  - [License](#license)

<br>

## Features

- [ ] Native widgets.
- [ ] Notes and schedule.
- [X] Extense computer metrics.
- [X] Foreing program execution.
- [X] Real time computer information.

<br>

## To-do:

- [ ] Native widgets.
- [ ] Notes and schedules.

<br>

## Download

[0.7.0-alpha](https://github.com/ivanbogaeb/steroid-app/releases)
> Steroid is currently on Alpha stage, which means that ONLY the features showcased on this documentation are available.


<br>

## Installation

> This is an alpha stage installation.
- Download and extract, move to any folder you desire.
- Execute **`"steroid.exe"`** as `Administrator`.
- Done, Steroid will be installed on your PC.

> Steroid is going to start on tray and remain waiting in the background, where you can close it or disable it on startup if you want to.

<br>

## What is Steroid exactly?

### Introduction

Steroid is based on the K.I.S.S. principle *(Keep it simple, stupid)* and allows you to bring native features and information to your wallpapers, without the need to create complex and weird solutions that might bug your head or keep you awake until 4 AM. This app has been made so you can simply request information and communicate with your PC using it as middleware!

> Keep in mind that some features are disabled due to unfinished or unstable features.

### Functions

Steroid App functions are:
- Computer metrics.
- Programs execution.
- File handling. **(Still on development)**
- Native widgets. **(Still on development)**
- Notes and schedules. **(Still on development)**

### Main areas

Steroid is separated in two main web APIs:
- **Metrics API**: This API returns all the important metrics of your PC in real time, handled by a program that steroid invokes called `steroid-service.exe`.
- **Native support and information API**: This is where the magic happens. In this API you will be able to request specific and detailed information about your PC, together with the native control that Steroid gives you.

Both of them run on separated ports inside your PC, this allows the user to have direct contact if they don't want to use [steroid-wallpaper](https://github.com/ivanbogaeb/steroid-wallpaper) to handle all the information.

> It is actually recommended to use [steroid-wallpaper](https://github.com/ivanbogaeb/steroid-wallpaper) if you are planning to include online features to your wallpaper in the future.

<br>

## How can I talk to Steroid?

**It is highly recommended to use [steroid-wallpaper](https://github.com/ivanbogaeb/steroid-wallpaper), since it's a browser friendly wrapper to communicate with Steroid, including features such as Weather, Spotify and localStorage memory handling.**

Steroid runs on two different ports for each web API:
- **Metrics API** `(Port 7666)`
- **Native support and information API** `(Port 7665)`

By default, the only port that will be available will be `7665`, and will handle all your wallpaper requests, connecting over HTTP REST to `localhost:7665` and calling the endpoint you want to use.

Here is an example using JavaScript:

```javascript
const getCpuMetrics = async () => {
    let response = await fetch(`http://localhost:7665/cpu?function=usage`, {
        method: 'GET'
    }).then(res => {
        if (res.status === 200){
          res.json().then(res => cpuMetricsDisplay(res))
        } else {
          notification("Oh no we have an error!");
        }
    });
};

getCpuMetrics();
```

> You can check the reference down below if you want to. But keep in mind that in some cases you will have to do a custom request, so please read the references carefuly.

In the case that you don't know how to do this, you can read the [test]() folder, inside you will find a testing panel to play with and also review it's code.

#### Why Steroid is not using websockets?

Steroid could totally use websockets, and I have been thinking about it for a very long time! The issue is that for some odd reason, on Python it is more task expensive than REST APIs with Flask, and that's why we are here using such an interesting method.

> You can take a closer look to it here at [steroid-service](https://github.com/ivanbogaeb/steroid-service).

<br>

## Reference

Steroid has many features you can use. All of them are here on the table down below, and if you are interested in one of them, you can click on it to read it's independent documentation and procedures.

|Port|Endpoint|Type|
|-|-|-|
|7665| [/os](#os) | `GET` |
| | [/cpu](#cpu) | `GET` |
| | [/gpu](#gpu) | `GET` |
| | [/usb](#usb) | `GET` |
| | [/wifi](#wifi) | `GET` |
| | [/audio](#audio) | `GET` |
| | [/memory](#memory) | `GET` |
| | [/system](#system) | `GET` |
| | [/network](#network) | `GET` |
| | [/printer](#printer) | `GET` |
| | [/battery](#battery) | `GET` |
| | [/bluetooth](#bluetooth) | `GET` |
| | [/filesystem](#filesystem) | `GET` |
| | [/motherboard](#motherboard) | `GET` |
| ------ | ------------------ | ------- |
|7666| [/cpu](#cpu) | `GET` |
| | [/gpu](#gpu) | `GET` |
| | [/memory](#memory) | `GET` |
| | [/network](#network) | `GET` |
| | [/filesystem](#filesystem) | `GET` |

<br>
<br>

## OS:

Minimal Operative System information, for quick request and access.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/os| None |

### `http://localhost:7665/os`

```javascript
{
    "archquitecture": "x64",
    "platform": "win32",
    "release": "10.0.19044",
    "version": "Windows 10 Pro",
    "type": "Windows_NT"
}
```

<br>
<hr>
<br>

## CPU:

There are two ways to request CPU details. One is hooked to the [Metrics API](#main-areas) and the other one is hooked to the [Native support and information API](#main-areas). Both work in completely different ways and are designed to be complementary to each other.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/cpu| [?function=usage](#usage-httplocalhost7665cpufunctionusage) |
| | [?function=info](#information-httplocalhost7665cpufunctioninfo) |

<br>

### Usage: `http://localhost:7665/cpu?function=usage`

Real time CPU usage (Individual threads and total), power consumption (Individual and total), voltages and temperature.
```javascript
{
  "name": "Ryzen 5 2600",
  "usage": {
    "total": 5.671316
    "threads": [{ // Amount of threads depends on your CPU
      "name": "CPU Core #1",
      "usage": 14.23864
    }, ..., {
      "name": "CPU Core #12",
      "usage": 2.996027
    }],
  },
  "package": 15.592143, // CPU power consumption in Watts
  "cores": [{
    "name": "Core #1",
    "frequency": 3718.115, // Realtime CPU frequency in MHz
    "voltage": 1.19375, // Realtime voltage usage
    "power": 1.615892 // Individual power consumption in Watts
}, ..., {
    "name": "Core #6",
    "frequency": 3718.115, 
    "voltage": 1.19375, 
    "power": 1.950423 
}],
"temperature": 41.25001 // T-Junction temperature in °C
}
```

<br>

### Information `http://localhost:7665/cpu?function=info`

CPU details such as architecture, features, cache size, etc.

```javascript
{
  "manufacturer": "AMD",
  "brand": "Ryzen 5 2600 Six-Core Processor",
  "vendor": "AuthenticAMD",
  "family": "23",
  "model": "8",
  "stepping": "2",
  "revision": "2050",
  "voltage": 1.2,
  "speed": 3.4, // Stock frequency in GHz
  "speedMin": 3.4, // Stock minimum frequency in GHz
  "speedMax": 3.4, // Stock maximum frequency in GHz
  "governor": "", // Depends on your type of CPU
  "cores": 12, // Threads
  "physicalCores": 6,
  "processors": 1, // Amount of processors installed
  "socket": "AM4",
  "flags": "de pse tsc msr sep mtrr mca cmov psn clfsh ds mmx fxsr sse sse2 ss htt tm ia64 pbe",
  "virtualization": false, // If you are running on a virtual machine
  "cache": {
      "l1d": 288,
      "l1i": 288,
      "l2": 3145728,
      "l3": 16777216
  }
}
```

<br>
<hr>
<br>

## GPU:

Just as the CPU, GPU details have two method of request. One is hooked to the [Metrics API](#main-areas) and the other one is hooked to the [Native support and information API](#main-areas). Both work in completely different ways and are designed to be complementary to each other.

### Support:
  - AMD Integrated Graphics.
  - Intel Integrated Graphics.
  - AMD. ***(Being worked on)***
  - Nvidia.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/gpu| [?function=usage](#usage-httplocalhost7665gpufunctionusage) |
| | [?function=info](#information-httplocalhost7665gpufunctioninfo) |

<br>

### Usage: `http://localhost:7665/gpu?function=usage`

Real time GPU usage, voltages for cores, chip and memory, power consumption of every core component, clock speeds of the core and memory, temperatures across the card, load and type, memory usage and transfer bandwidth.
```javascript
{
  "clock": { // MHz
      "core": 210,
      "memory": 405,
      "soc": 0
  },
  "load": { // %
      "core": 16,
      "d3d": 3.433186,
      "decode": 0,
      "encode": 0,
      "memory": 12,
      "videodecode": 0,
      "videoencode": 0,
      "videoengine": 0
  },
  "memory": { // MB
      "free": 75.5625,
      "total": 1158.168,
      "used": 12288
  },
  "name": "NVIDIA GeForce RTX 3060",
  "power": { // Watts
      "core": 0,
      "package": 18.535,
      "ppt": 0,
      "soc": 0
  },
  "temperature": { // °C
      "core": 49,
      "hotspot": 59.8125,
      "liquid": 0,
      "memory": 0,
      "mvdd": 0,
      "plx": 0,
      "soc": 0,
      "vddc": 0
  },
  "transfer": { // Kbps
      "rx": 39936000,
      "tx": 1024000
  },
  "voltage": { // Volts
      "core": 0,
      "memory": 0,
      "soc": 0
  }
}
```

<br>

### Information: `http://localhost:7665/gpu?function=info`

Returns information about your GPU vendor, model, how it's connected, VRAM, deviceID, driver version, used memory, free memory, temperature, power limit, clocks and more.
> Althought, it is not recommended to use this API endpoint to request real time information, since it slower and task demanding.

```javascript
[
  {
    "vendor": "NVIDIA",
    "model": "NVIDIA GeForce RTX 3060",
    "bus": "PCI",
    "vram": 12288,
    "vramDynamic": false,
    "subDeviceId": "0x263019DA",
    "driverVersion": "497.09",
    "name": "NVIDIA GeForce RTX 3060",
    "pciBus": "00000000:07:00.0",
    "memoryTotal": 12288,
    "memoryUsed": 1579,
    "memoryFree": 10709,
    "utilizationGpu": 6,
    "utilizationMemory": 9,
    "temperatureGpu": 47,
    "powerDraw": 18.53,
    "powerLimit": 170,
    "clockCore": 209,
    "clockMemory": 403
  }
]
```

<br>
<hr>
<br>

## USB:

Information about all available USB ports and connections.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/usb| None |

<br>

### `http://localhost:7665/usb`

```javascript
{
  [
    ...,
    {
      "bus": null,
      "deviceId": "USB\\VID_04D9&PID_A1DF&MI_00\\7&1941D03D&0&0000",
      "id": 1,
      "name": "Mejorado (101 ó 102 teclas)",
      "type": "Keyboard",
      "removable": null,
      "vendor": null,
      "manufacturer": "",
      "maxPower": null,
      "serialNumber": null
    },
    {
      "bus": null,
      "deviceId": "USB\\VID_09DA&PID_9090&MI_01\\7&22AD6BA4&0&0001",
      "id": 6,
      "name": "Dispositivo de entrada USB",
      "type": "Mouse",
      "removable": null,
      "vendor": null,
      "manufacturer": "(Dispositivos de sistema estándar)",
      "maxPower": null,
      "serialNumber": null
    },
    ...
  ]
}
```

<br>
<hr>
<br>

## WiFi:

Available WiFi networks, interfaces and connections.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/wifi| [?function=networks](#networks-httplocalhost7665wififunctionnetworks) |
| | [?function=interfaces](#interfaces-httplocalhost7665wififunctioninterfaces) |
| | [?function=connections](#connections-httplocalhost7665wififunctionconnections) |

<br>

### Networks `http://localhost:7665/wifi?function=networks`

All available WiFi networks around you.

```javascript
[
  ...,
  {
    "ssid": "TP-Link_Extender",
    "bssid": "3c:84:6a:ce:89:45",
    "mode": "",
    "channel": 2,
    "frequency": 2417,
    "signalLevel": -70.5,
    "quality": 59,
    "security": [
        "Open"
    ],
    "wpaFlags": [
        "None"
    ],
    "rsnFlags": []
  },
  {
    "ssid": "Nombre de red",
    "bssid": "ac:3b:77:88:0b:72",
    "mode": "",
    "channel": 11,
    "frequency": 2462,
    "signalLevel": -70.5,
    "quality": 59,
    "security": [
        "WPA2"
    ],
    "wpaFlags": [
        "CCMP"
    ],
    "rsnFlags": []
  },
  ...,
]
```

<br>

### Interfaces `http://localhost:7665/wifi?function=interfaces`

Device that you use to connect to internet.

```javascript
[
  {
    "id": "0a5fda45-6269-443c-9983-2639cc833bed",
    "iface": "Wi-Fi",
    "model": "TP-LINK Wireless USB Adapter",
    "vendor": "TP-Link",
    "mac": "d4:6e:0e:0e:33:8d"
  }
]
```

<br>

### Connections `http://localhost:7665/wifi?function=connections`

Networks you are connected to.

```javascript
[
    {
      "id": "0a5fda45-6269-443c-9983-2639cc833bed",
      "iface": "Wi-Fi",
      "model": "TP-LINK Wireless USB Adapter",
      "ssid": "Speedy-Fibra-B5BB75",
      "bssid": "08:6a:0a:b5:bb:76",
      "channel": 11,
      "frequency": 2462,
      "type": null,
      "security": null,
      "signalLevel": "",
      "txRate": null
    }
]
```

<br>
<hr>
<br>

## Audio:

All available audio input and outputs.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/audio| None |

```javascript
[
  {
    "id": "HDAUDIO\\FUNC_01&VEN_10DE&DEV_009F&SUBSYS_19DA2630&REV_1001\\5&289B9316&0&0001",
    "name": "NVIDIA High Definition Audio",
    "manufacturer": "NVIDIA",
    "revision": null,
    "driver": null,
    "default": null,
    "channel": null,
    "type": "",
    "in": null,
    "out": null,
    "status": "3"
  },
  ...,
  {
    "id": "ROOT\\MEDIA\\0001",
    "name": "VB-Audio VoiceMeeter AUX VAIO",
    "manufacturer": "VB-Audio Software",
    "revision": null,
    "driver": null,
    "default": null,
    "channel": null,
    "type": "",
    "in": null,
    "out": null,
    "status": "3"
  }
]
```

<br>
<hr>
<br>

## Audio:

All available audio input and outputs.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/audio| None |

```javascript
[
  {
    "id": "HDAUDIO\\FUNC_01&VEN_10DE&DEV_009F&SUBSYS_19DA2630&REV_1001\\5&289B9316&0&0001",
    "name": "NVIDIA High Definition Audio",
    "manufacturer": "NVIDIA",
    "revision": null,
    "driver": null,
    "default": null,
    "channel": null,
    "type": "",
    "in": null,
    "out": null,
    "status": "3"
  },
  ...,
  {
    "id": "ROOT\\MEDIA\\0001",
    "name": "VB-Audio VoiceMeeter AUX VAIO",
    "manufacturer": "VB-Audio Software",
    "revision": null,
    "driver": null,
    "default": null,
    "channel": null,
    "type": "",
    "in": null,
    "out": null,
    "status": "3"
  }
]
```

<br>
<hr>
<br>

## Memory:

Usage and memory layout, including frequency, type, slot and latency.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/memory| [?function=usage](#usage-httplocalhost7665memoryfunctionusage) |
| | [?function=layout](#layout-httplocalhost7665memoryfunctionlayout) |

<br>

### Usage `http://localhost:7665/memory?function=usage`
```javascript
{
  "free": 8.966358,
  "name": "Generic Memory",
  "usage": 43.7829,
  "used": 6.983162
}
```

<br>

### Layout `http://localhost:7665/memory?function=layout`
```javascript
[
  {
    "size": 8589934592,
    "bank": "P0 CHANNEL A",
    "type": "DDR4",
    "ecc": false,
    "clockSpeed": 2133,
    "formFactor": "DIMM",
    "manufacturer": "Unknown",
    "partNum": "3200 C16 Series",
    "serialNum": "00000000",
    "voltageConfigured": 1.2,
    "voltageMin": 1.2,
    "voltageMax": 1.2
  },
  {
    "size": 8589934592,
    "bank": "P0 CHANNEL B",
    "type": "DDR4",
    "ecc": false,
    "clockSpeed": 2133,
    "formFactor": "DIMM",
    "manufacturer": "Unknown",
    "partNum": "3200 C16 Series",
    "serialNum": "00000000",
    "voltageConfigured": 1.2,
    "voltageMin": 1.2,
    "voltageMax": 1.2
  }
]
```

<br>
<hr>
<br>

## System:

Overall system information, since bootup date, os build, uuid, users registered and display sizes.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/system| [?function=uptime](#uptime-httplocalhost7665systemfunctionuptime) |
| | [?function=os](#os-httplocalhost7665systemfunctionos) |
| | [?function=uuid](#uuid-httplocalhost7665systemfunctionuuid) |
| | [?function=users](#users-httplocalhost7665systemfunctionusers) |
| | [?function=display](#display-httplocalhost7665systemfunctiondisplay) |


|To be added|
|-|
| [?function=processes](#processes-httplocalhost7665systemfunctionprocesses) |
| [?function=processload](#process-load-httplocalhost7665systemfunctionprocessload) |
| [?function=services](#services-httplocalhost7665systemfunctionservices) |

<br>

### Uptime `http://localhost:7665/system?function=uptime`

Time that it is now, uptime of your PC, timezone and timezone location.

```javascript
{
  "current": 1659052893441,
  "uptime": 266518,
  "timezone": "GMT-0300",
  "timezoneName": "America/Buenos_Aires"
}
```

<br>

### OS `http://localhost:7665/system?function=os`

Complete set of information about your operative system.

```javascript
{
  "platform": "Windows",
  "distro": "Microsoft Windows 10 Pro",
  "release": "10.0.19044",
  "codename": "",
  "kernel": "10.0.19044",
  "arch": "x64",
  "hostname": "N0XT-PC",
  "fqdn": "N0XT-PC",
  "codepage": " 850",
  "logofile": "windows",
  "serial": "XXXXX-XXXXX-XXXXX-XXXXX",
  "build": "19044",
  "servicepack": "0.0",
  "uefi": false,
  "hypervisor": false,
  "remoteSession": false
}
```

<br>

### UUID `http://localhost:7665/system?function=uuid`

User identifiers like your OS, hardware and MAC addresses.

> This information is very sensitive, please be careful when you use it. Users identifiers are no joke, and they have the same value as a fingerprint, but in this case, a virtual fingerprint of your computer.

```javascript
{
  "os": "XXXXXXXX-280d-XXXX-82ac-XXXXXXXXXXXX",
  "hardware": "XXXXXXXX-0499-XXXX-1106-XXXXXXXXXXXX",
  "macs": [
      "XX:XX:XX:XX:XX:XX",
      "XX:XX:XX:XX:XX:XX"
  ]
}
```

<br>

### Users `http://localhost:7665/system?function=users`

Registered users on your computer.

```javascript
[
  {
    "user": "N0XT",
    "tty": "console",
    "date": "2022-07-27",
    "time": "13:00",
    "ip": "",
    "command": ""
  },
  ...
]
```

<br>

### Display `http://localhost:7665/system?function=display`

Details about every screen connected to your PC, including resolution, name, sizes, position and pixel depth.

```javascript
[
  {
    "vendor": "(Tipo de monitor estándar)",
    "model": "Monitor PnP genérico",
    "deviceName": "\\\\.\\DISPLAY1",
    "main": true,
    "builtin": false,
    "connection": "HDMI",
    "resolutionX": 2560,
    "resolutionY": 1080,
    "sizeX": 67,
    "sizeY": 28,
    "pixelDepth": "32",
    "currentResX": 2560,
    "currentResY": 1080,
    "positionX": 0,
    "positionY": 0
  },{
    "vendor": "",
    "model": "",
    "deviceName": "\\\\.\\DISPLAY2",
    "main": false,
    "builtin": false,
    "connection": "DVI",
    "resolutionX": 1920,
    "resolutionY": 1080,
    "sizeX": 52,
    "sizeY": 29,
    "pixelDepth": "32",
    "currentResX": 1920,
    "currentResY": 1080,
    "positionX": 2560,
    "positionY": 467
  }
]
```

<br>
<hr>
<br>

### Network:

Usage, interfaces, gateway, statistics, connections and pings.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/network| [?function=defaultinterface](#default-interface-httplocalhost7665networkfunctiondefaultinterface) |
| | [?function=defaultgateway](#default-gateway-httplocalhost7665networkfunctiondefaultgateway) |
| | [?function=interfaces](#interfaces-httplocalhost7665networkfunctioninterfaces) |
| | [?function=usage](#usage-httplocalhost7665networkfunctionusage) |
| | [?function=connections](#connections-httplocalhost7665networkfunctionconnections) |
| | [?function=urlping](#url-ping-httplocalhost7665networkfunctionurlping) |
| | [?function=hostping](#host-ping-httplocalhost7665networkfunctionhostping) |

<br>

### Default Interface `http://localhost:7665/network?function=defaultinterface`

Default internet connection interface

```javascript
'Ethernet'
```

<br>

### Default Gateway `http://localhost:7665/network?function=defaultgateway`

Default internet connection gateway (Router + Main IP of your closest local network)

```javascript
'192.168.1.1'
```

<br>

### Interfaces `http://localhost:7665/network?function=interfaces`

Network interfaces, including virtual ones and VPN.

```javascript
{
  "interfaces": [
    {
        "iface": "Ethernet",
        "ifaceName": "Realtek Gaming GbE Family Controller",
        "default": true,
        "ip4": "192.168.1.49",
        "ip4subnet": "255.255.255.0",
        "ip6": "fe80::bc25:5c29:dfb9:7249",
        "ip6subnet": "ffff:ffff:ffff:ffff::",
        "mac": "XX:XX:99:e8:11:XX",
        "internal": false,
        "virtual": false,
        "operstate": "up",
        "type": "wired",
        "duplex": "",
        "mtu": "",
        "speed": 1000,
        "dhcp": true,
        "dnsSuffix": "",
        "ieee8021xAuth": "Unknown",
        "ieee8021xState": "Unknown",
        "carrierChanges": 0
    },
    {
        "iface": "Npcap Loopback Adapter",
        "ifaceName": "VirtualBox Host-Only Ethernet Adapter",
        "default": false,
        "ip4": "192.168.56.1",
        "ip4subnet": "255.255.255.0",
        "ip6": "fe80::684a:956a:4390:1fce",
        "ip6subnet": "ffff:ffff:ffff:ffff::",
        "mac": "0a:00:27:00:00:19",
        "internal": true,
        "virtual": false,
        "operstate": "up",
        "type": "wired",
        "duplex": "",
        "mtu": "",
        "speed": 1000,
        "dhcp": false,
        "dnsSuffix": "",
        "ieee8021xAuth": "Unknown",
        "ieee8021xState": "Unknown",
        "carrierChanges": 0
    },
    ...
  ]
}
```

<br>

### Usage `http://localhost:7665/network?function=usage`

Network usage statistics.

```javascript
[
  {
    "data": {
        "downloaded": 26.4314, // GB
        "uploaded": 7.006996 // GB
    },
    "name": "Ethernet",
    "speed": {
        "download": 4193.59, // KB/s
        "upload": 2778.327 // KB/s
    },
    "usage": 0.005577534 // %
  },
  ...
]
```

<br>

### Connections `http://localhost:7665/network?function=connections`

List of all connections open on your PC.

```javascript
[
  ...,
  {
    "protocol": "tcp",
    "localAddress": "127.0.0.1",
    "localPort": "22569",
    "peerAddress": "0.0.0.0",
    "peerPort": "0",
    "state": "LISTEN",
    "pid": 2308,
    "process": ""
  },
  {
    "protocol": "tcp",
    "localAddress": "127.0.0.1",
    "localPort": "27017",
    "peerAddress": "0.0.0.0",
    "peerPort": "0",
    "state": "LISTEN",
    "pid": 4640,
    "process": ""
  },
  ...
]
```

<br>

### URL Ping `http://localhost:7665/network?function=urlping`

Pings an specific URL.

**Usage**:

- Make sure to specify the URL you want to ping, including their protocol.
- `http://localhost:7665/network?function=urlping&url=https://google.com.ar`

```javascript
{
  "url": "https://google.com.ar",
  "ok": true,
  "status": 301,
  "ms": 88
}
```

<br>

### Host Ping `http://localhost:7665/network?function=hostping`

Pings an specific IP.

**Usage**:

- Make sure to specify the IP you want to ping.
- `http://localhost:7665/network?function=hostping&url=192.168.1.1`

```javascript
{
  "ms": 1
}
```

<br>
<hr>
<br>

## Printer:

Available printers/connected to your computer.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/printer| |


```javascript
[
    {
        "id": 1,
        "name": "OneNote for Windows 10",
        "model": "Microsoft Software Printer Driver",
        "uri": null,
        "uuid": null,
        "status": "Idle",
        "local": true,
        "default": false,
        "shared": false
    },
    ...,
    {
        "id": 6,
        "name": "Fax",
        "model": "Microsoft Shared Fax Driver",
        "uri": null,
        "uuid": null,
        "status": "Idle",
        "local": true,
        "default": false,
        "shared": false
    },
    ...
]
```

<br>
<hr>
<br>

## Battery:

Battery capacity remaining on your laptop, cycles, charging state, capacity, percentage, voltage, model, etc.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/battery| |


```javascript
{
  "hasBattery": false,
  "cycleCount": 0,
  "isCharging": false,
  "designedCapacity": 0,
  "maxCapacity": 0,
  "currentCapacity": 0,
  "voltage": 0,
  "capacityUnit": "",
  "percent": 0,
  "timeRemaining": null,
  "acConnected": true,
  "type": "",
  "model": "",
  "manufacturer": "",
  "serial": ""
}
```

<br>
<hr>
<br>

## Bluetooth:

Bluetooth devices connected to your PC, name, battery percentage, type, etc.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/bluetooth| |


```javascript
[
  {
    device: 'Magic Mouse 2',
    name: 'My Maus',
    manufacturer: 'Broadcom (0x5, 0x240C)',
    macDevice: '10-XX-XX-XX-XX-XX',
    macHost: '20-XX-XX-XX-XX-XX',
    batteryPercent: '74%',
    type: 'Mouse',
    connected: true
  },
  {
    device: 'Magic Keyboard with Numeric Keypad',
    name: 'My Keyboard',
    manufacturer: 'Broadcom (0x5, 0x240C)',
    macDevice: '10-XX-XX-XX-XX-XX',
    macHost: '20-XX-XX-XX-XX-XX',
    batteryPercent: '75%',
    type: 'Keyboard',
    connected: true
  },
]
```

<br>
<hr>
<br>

## Filesystem:

Complete map of drives installed in your computer, information about them, layout and block sizes.

> Recommended to use `usage` for drives usage, other functions exist merely to return static information.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/filesystem| [?function=usage](#filesystem-usage-httplocalhost7665filesystemfunctionusage) |
| | [?function=info](#filesystem-information-httplocalhost7665filesystemfunctioninfo) |
| | [?function=layout](#) |
| | [?function=block](#) |

<br>

### Filesystem Usage `http://localhost:7665/filesystem?function=usage`

Returns total activity of all drives installed, including their temperature and usage.

```javascript
[
  {
    activity: {
        total: 1.178733, // %
        write: 0.8715305 // %
    },
    name: "XPG SPECTRIX S40G",
    rates: {
        read: 168930.8, // KB/s
        write: 113660.1 // KB/s
    },
    temperature: 46,
    used: 79.74038 // %
  },
  ...
  {
    activity: {
        total: 0.00003696686,
        write: 0
    },
    name: "ST500LM012 HN-M500MBB",
    rates: {
        read: 0,
        write: 0
    },
    temperature: 30,
    used: 71.44792
  }
]
```

<br>

### Filesystem Information `http://localhost:7665/filesystem?function=info`

Returns total activity of all drives installed, including their temperature and usage.

```javascript
[
  {
    activity: {
        total: 1.178733, // %
        write: 0.8715305 // %
    },
    name: "XPG SPECTRIX S40G",
    rates: {
        read: 168930.8, // KB/s
        write: 113660.1 // KB/s
    },
    temperature: 46,
    used: 79.74038 // %
  },
  ...
  {
    activity: {
        total: 0.00003696686,
        write: 0
    },
    name: "ST500LM012 HN-M500MBB",
    rates: {
        read: 0,
        write: 0
    },
    temperature: 30,
    used: 71.44792
  }
]
```

<br>
<hr>
<br>

## Motherboard:

Motherboard manufacturer, model, maximum memory and memory slots.

### Endpoints:

|Main URL|Query Parameters|
|-|-|
|http://localhost:7665/motherboard|  |


```javascript
{
  manufacturer: "Gigabyte Technology Co., Ltd.",
  model: "B450M AORUS ELITE",
  version: "x.x",
  serial: "Default string",
  assetTag: "",
  memMax: 137438953472,
  memSlots: 4
}
```

<br>
<hr>
<br>

## Program Execution:

With this feature, you will be able to execute any program `(Except Windows internal components such as CMD, Powershell or any kind of service that could damage your PC)`.

### Endpoints:

|Main URL|Body Parameters|
|-|-|
|http://localhost:7665/execute| {"executable": "Your executable path", "parameters": "Your executable Parameters"} |

```javascript
await fetch(`http://localhost:7665/execute`, {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: {
    "executable": "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "parameters": "--new-window www.google.com"
  }
}).then(data => {
  let {executed, error} = data.json();
  if (executed){
    // Succesfully executed!
  } else {
    // There has been an issue with your execution!
    console.log(error);
  }
}).catch(error => console.error); // Some higher level of error handling!
```

<br>

## Configuration

Steroid configuration is rather simple, you can `Right Click` on the Steroid logo in your `Windows Tray` and a few options will show up under the `Settings` tab.

> In it's current state, Steroid doesn't support extensive configuration or modding.

### How can I send my metrics to another PC?
By clicking on `Allow external connections` under the `Settings` tab, you will be able to request information from another computer or mobile device connected to the same network your computer is.
You have to consider that you will be required to know your computer IP address in order to achieve this.

### How can I disable Steroid on bootup?
By clicking on `Run on startup` under the `Settings` tab, you will be able to toggle between launching Steroid at bootup, or not.

<br>

## Credits
Steroid is heavily inspired on **[Rainmeter](https://www.rainmeter.net/)**, as an effort to provide a native-like service and experience for  users who would like to stay on the JavaScript side of the moon.

<br>

## License
[CC BY NC SA 4.0](LICENSE)
