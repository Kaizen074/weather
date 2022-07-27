# <center>Steroid ⚡</center>
### <center>Web wallpapers extension.</center>
<center>Steroid is a simple web app, that packs all the necessary features to create your own awesome wallpapers and share them with the world, adding new functionalities to wallpaper engines like Rainmeter, Lively Wallpaper and Wallpaper Engine; creating a hybrid between native and web support throught the power of JavaScript applications.</center>

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

  - [Features.](#features)
  - [To-do.](#to-do)
  - [Download.](#download)
  - [Installation.](#installation)
  - [How to use Steroid.](#how-to-use-steroid)
    - [Introduction.](#how-to-use-steroid)
    - [Functions.](#functions)
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
      - [Program execution]()
      - [Widgets]()
      - [Notes and schedule]()
  - [Credits](#credits)
  - [License](#license)

<br>

## Features

- [ ] File handling.
- [ ] Native widgets.
- [ ] Notes and schedule.
- [X] Extense computer metrics.
- [X] Foreing program execution.
- [X] Real time computer information.

<br>

## To-do:

- [ ] File handling.
- [ ] Native widgets.
- [ ] Notes and schedules.

<br>

## Download

> **Steroid is on alpha stage, and it's not ready to be released to the public yet.
> If you want to be part of the alpha testing community, you can do so by sending an email at:**
>
> steroid@outlook.com.ar

<br>

## Installation

- > Download link will be added soon after alpha testing.
- Execute **`"Steroid-Setup-x64.exe"`**.
- Read our ToS.
- Done, Steroid will be installed on your PC.

> Steroid is going to start on tray and remain waiting in the background, where you can close it or disable it on startup if you want to.

<br>

## How to use Steroid

#### Introduction

Steroid is based on the K.I.S.S. principle *(Keep it simple, stupid)*.

There is no need to create complex and weird solutions for your wallpaper that might bug your head or keep you awake until 4 AM, we already did that for you! This app has been made so you can simply request information and communicate with your PC using it as middleware.

> Keep in mind that some features are disabled due to unfinished or unstable features.

#### Functions

Steroid App functions are:
- Computer metrics.
- Programs execution.
- File handling. **(Still on development)**
- Native widgets. **(Still on development)**
- Notes and schedules. **(Still on development)**

#### Main areas

Steroid is separated in two main web APIs:
- **Metrics API**: This API returns all the important metrics of your PC in real time, handled by a program that steroid invokes called `steroid-service.exe`.
- **Native support and information API**: This is where the magic happens. In this API you will be able to request specific and detailed information about your PC, together with the native control that Steroid gives you.

Both of them run on separated ports inside your PC, this allows the user to have direct contact if they don't want to use [steroid-wallpaper](https://github.com/ivanbogaeb/steroid-wallpaper) to handle all the information.

> It is actually recommended to use [steroid-wallpaper](https://github.com/ivanbogaeb/steroid-wallpaper) if you are planning to include online features to your wallpaper in the future.

#### How to talk with Steroid

**It is highly recommended to use [steroid-wallpaper](https://github.com/ivanbogaeb/steroid-wallpaper), since it's a browser friendly wrapper to communicate with Steroid.**


Steroid runs on two different ports for each web API:
- **Metrics API** `(Port 7666)`
- **Native support and information API** `(Port 7665)`

By hooking up to the **Metrics API** you will be only able to receive information on your `localhost` domain and nowhere else. But, if you connect straight to the **Native support and information API**, you will be able to send metrics over your network to different devices!

In any case, you will have to connect over HTTP REST to `localhost:7666` (Metrics) or `localhost:7665` (Native). Both of them will return a list of commands that you can use when you connect.

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

### OS:

Minimal Operative System information, for quick request and access.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/os| None |

#### `http://localhost:7665/os`

```javascript
{
    "archquitecture": "x64",
    "platform": "win32",
    "release": "10.0.19044",
    "version": "Windows 10 Pro",
    "type": "Windows_NT"
}
```

### CPU:

There are two ways to request CPU details. One is hooked to the [Metrics API](#main-areas) and the other one is hooked to the [Native support and information API](#main-areas). Both work in completely different ways and are designed to be complementary to each other.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/cpu| [?function=usage](#usage-httplocalhost7665cpufunctionusage) |
| | [?function=info](#information-httplocalhost7665cpufunctioninfo) |


#### Usage: `http://localhost:7665/cpu?function=usage`

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

#### Information `http://localhost:7665/cpu?function=info`

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

### GPU:

Just as the CPU, GPU details have two method of request. One is hooked to the [Metrics API](#main-areas) and the other one is hooked to the [Native support and information API](#main-areas). Both work in completely different ways and are designed to be complementary to each other.

#### Support:
  - AMD Integrated Graphics.
  - Intel Integrated Graphics.
  - AMD. ***(Being worked on)***
  - Nvidia.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/gpu| [?function=usage](#usage-httplocalhost7665gpufunctionusage) |
| | [?function=info](#information-httplocalhost7665gpufunctioninfo) |

#### Usage: `http://localhost:7665/gpu?function=usage`

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

#### Information: `http://localhost:7665/gpu?function=info`

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

### USB:

Information about all available USB ports and connections.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/usb| None |

#### `http://localhost:7665/usb`

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

### WiFi:

Available WiFi networks, interfaces and connections.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/wifi| [?function=networks](#networks-httplocalhost7665wififunctionnetworks) |
| | [?function=interfaces](#interfaces-httplocalhost7665wififunctioninterfaces) |
| | [?function=connections](#connections-httplocalhost7665wififunctionconnections) |

#### Networks `http://localhost:7665/wifi?function=networks`

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

#### Interfaces `http://localhost:7665/wifi?function=interfaces`

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

#### Connections `http://localhost:7665/wifi?function=connections`

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

### Audio:

All available audio input and outputs.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
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

### Audio:

All available audio input and outputs.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
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

### Memory:

Usage and memory layout, including frequency, type, slot and latency.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/memory| [?function=usage](#usage-httplocalhost7665memoryfunctionusage) |
| | [?function=layout](#layout-httplocalhost7665memoryfunctionlayout) |

#### Usage `http://localhost:7665/memory?function=usage`
```javascript
{
  "free": 8.966358,
  "name": "Generic Memory",
  "usage": 43.7829,
  "used": 6.983162
}
```

#### Layout `http://localhost:7665/memory?function=layout`
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

### System:

Usage and memory layout, including frequency, type, slot and latency.

#### Endpoints:

|Main URL|Query Parameters|
|-|-|-|
|http://localhost:7665/system| [?function=uptime]() |
| | [?function=os]() |
| | [?function=uuid]() |
| | [?function=users]() |
| | [?function=display]() |
| | [?function=processes]() |
| | [?function=processload]() |
| | [?function=services]() |


#### Usage `http://localhost:7665/memory?function=usage`
```javascript
{
  "free": 8.966358,
  "name": "Generic Memory",
  "usage": 43.7829,
  "used": 6.983162
}
```

| | [/system](#system) | `GET` |
| | [/network](#network) | `GET` |
| | [/printer](#printer) | `GET` |
| | [/battery](#battery) | `GET` |
| | [/bluetooth](#bluetooth) | `GET` |
| | [/filesystem](#filesystem) | `GET` |
| | [/motherboard](#motherboard) | `GET` |

#

## Credits
Steroid is heavily inspired on **[Rainmeter](https://www.rainmeter.net/)**, as an effort to provide a native-like service and experience for **[Wallpaper Engine](https://www.wallpaperengine.io)** users who would like to stay on the JavaScript side of the moon.

## License
[CC BY NC SA 4.0](LICENSE)