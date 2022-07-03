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
      - [Metrics.](#metrics)
        - [CPU](#cpu)
        - [GPU](#gpu)
        - [Memory](#memory)
        - [Network](#network)
        - [Filesystem](#filesystem)
      - [Information.](#information)
        - [OS](#os)
        - [CPU](#cpu)
        - [GPU](#gpu)
        - [USB](#usb)
        - [User](#user)
        - [WiFi](#wifi)
        - [Audio](#audio)
        - [Uptime](#uptime)
        - [System](#system)
        - [Printer](#printer)
        - [Battery](#battery)
        - [Execute](#execute)
        - [Bluetooth](#bluetooth)
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
- [x] Extense computer metrics.
- [x] Foreing program execution.
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

Both of them run on separated ports inside your PC, this allows the user to have direct contact if they don't want to use [steroid-wallpaper]() to handle all the information.

> It is actually recommended to use [steroid-wallpaper]() if you are planning to include online features to your wallpaper in the future.

#### How to talk with Steroid

In the case that you are not going to use [steroid-wallpaper](), Steroid runs on two different ports for each web API:
- **Metrics API** `(Port 7666)`
- **Native support and information API** `(Port 7665)`

In both of them, you will have to connect over HTTP REST to `localhost:7666` and `localhost:7665` respectively. Both of them will return a list of commands that you can use when you connect.

Here is an example using JavaScript:

```javascript
const getCpuMetrics = async () => {
    let response = await fetch(`http://localhost:7666/cpu`, {
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

- CPU metrics: `localhost:7666/cpu`.
- USB drives connected: `localhost:7665/usb`.
- etc.

> You can check the reference down below if you want to. But keep in mind that in some cases you will have to do a custom request, so please read the references carefuly.

In the case that you don't know how to do this, in this respository there is a folder called [examples]() that contains a list of examples that you can copy and use for your own custom middleware. You will also find the [test]() folder, inside you will find a testing panel to play with and also review it's code.

#### Why is Steroid not using websockets?

Steroid could totally use websockets, and I have been thinking about it for a very long time! The issue is that for some odd reason, on Python it is more task expensive than REST APIs with Flask, and that's why we are here using such an interesting method.

> You can take a closer look to it here at [steroid-service]().

<br>

## Reference

Steroid has many features you can use. All of them are here on the table down below, and if you are interested in one of them, you can click on it to read it's independent documentation and procedures.

|Port|Endpoint|Type|
|-|-|-|
|7665| [/os](#os) | `GET` |
| | [/cpu](#cpu) | `GET` |
| | [/gpu](#gpu) | `GET` |
| | [/usb](#usb) | `GET` |
| | [/user](#wifi) | `GET` |
| | [/wifi](#wifi) | `GET` |
| | [/audio](#audio) | `GET` |
| | [/uptime](#uptime) | `GET` |
| | [/system](#system) | `GET` |
| | [/printer](#printer) | `GET` |
| | [/battery](#battery) | `GET` |
| | [/execute](#execute) | `GET` |
| | [/bluetooth](#bluetooth) | `GET` |
| | [/motherboard](#motherboard) | `GET` |
| ------ | ------------------ | ------- |
|7666| [/cpu](#cpu) | `GET` |
| | [/gpu](#gpu) | `GET` |
| | [/memory](#memory) | `GET` |
| | [/network](#network) | `GET` |
| | [/filesystem](#filesystem) | `GET` |

<br>

### CPU:

There are two ways to request CPU details. One is hooked to the [Metrics API](#main-areas) and the other one is hooked to the [Native support and information API](#main-areas). Both work in completely different ways and are designed to be complementary to each other.

- #### Endpoints:
  - **Metrics** `http://localhost:7666/cpu`
  Real time CPU usage (Individual threads and total), power consumption (Individual and total), voltages and temperature.
    ```javascript
    {
      name: "Ryzen 5 2600",
      usage: {
        total: 5.671316
        threads: [{ // Amount of threads depends on your CPU
          name: "CPU Core #1",
          usage: 14.23864
        }, ..., {
          name: "CPU Core #12",
          usage: 2.996027
        }],
      },
      package: 15.592143, // CPU power consumption in Watts
      cores: [{
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
  - **Information** `http://localhost:7665/cpu`
    CPU details such as architecture, features, cache size, etc.
    ```javascript
    {
      manufacturer: "AMD",
      brand: "Ryzen 5 2600 Six-Core Processor",
      vendor: "AuthenticAMD",
      family: "23",
      model: "8",
      stepping: "2",
      revision: "2050",
      voltage: 1.2,
      speed: 3.4, // Stock frequency in GHz
      speedMin: 3.4, // Stock minimum frequency in GHz
      speedMax: 3.4, // Stock maximum frequency in GHz
      governor: "", // Depends on your type of CPU
      cores: 12, // Threads
      physicalCores: 6,
      processors: 1, // Amount of processors installed
      socket: "AM4",
      flags: "de pse tsc msr sep mtrr mca cmov psn clfsh ds mmx fxsr sse sse2 ss htt tm ia64 pbe",
      virtualization: false, // If you are running on a virtual machine
      cache: {
          "l1d": 288,
          "l1i": 288,
          "l2": 3145728,
          "l3": 16777216
      }
    }
    ```

### GPU:

Just as the CPU, GPU details have two method of request. One is hooked to the [Metrics API](#main-areas) and the other one is hooked to the [Native support and information API](#main-areas). Both work in completely different ways and are designed to be complementary to each other.

- #### Support:
  - AMD Integrated Graphics.
  - Intel Integrated Graphics.
  - AMD. ***(Still under adjustments)***
  - Nvidia.

- #### Endpoints:
  - **Metrics** `http://localhost:7666/gpu`
  Real time GPU usage, voltages for cores, chip and memory, power consumption of every core component, clock speeds of the core and memory, temperatures across the card, load and type, memory usage and transfer bandwidth.
    ```javascript
    {
      name: "NVIDIA GeForce RTX 3060",
      voltage: { // Volts
        core: 0, 
        soc: 0,
        memory: 0
      },
      power: { // Watts
        core: 0,  
        ppt: 0,
        soc: 0,
        package: 34.232
      },
      clock: { // MHz
        core: 367, 
        soc: 0,
        memory: 810
      },
      temperature: { // °C
        core: 50,
        memory: 0,
        vddc: 0,
        mvdd: 0,
        soc: 0,
        liquid: 0,
        plx: 0,
        hotspot: 61.375
      },
      load: { // %
        core: 2,
        memory: 4,
        videoengine: 0,
        videoencode: 0,
        videodecode: 0,
        d3d: 3.200708,
        decode: 0,
        encode: 0
      },
      memory: { // MB
        free: 70.85547,
        used: 12288,
        total: 1604.941
      },
      transfer: { // Kbps
        rx: 0,
        tx: 0
      }
    }
    ```
  - **Information** `http://localhost:7665/gpu`
  Returns information about your GPU vendor, model, how it's connected, VRAM, deviceID, driver version, used memory, free memory, temperature, power limit, clocks and more.
  Althought, it is not recommended to use this API endpoint to request real time information since it's more task demanding that it's counterpart explained previously.
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

#

## Credits
Steroid is heavily inspired on **[Rainmeter](https://www.rainmeter.net/)**, as an effort to provide a native-like service and experience for **[Wallpaper Engine](https://www.wallpaperengine.io)** users who would like to stay on the JavaScript side of the moon.

## License
[CC BY NC SA 4.0](LICENSE)