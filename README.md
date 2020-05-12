
# vue-cli-plugin-build-info

A plugin that allows you to see information about the current build.

![Demo](docs/demo.png)

## Install
``` bash
vue add build-info
```
## Usage
The plugin automatically injects a method into your entry file that allows you to see basic information about the latest build in **console**
``` bash
...
import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'
...
consoleBuildInfo()
...
```
You can also manually import an object **BUILD_INFO** that contains **VERSION, TIMESTAMP, COMMIT** in itself to independently use it for your own purposes.
``` bash
...
import {BUILD_INFO} from 'vue-cli-plugin-build-info/plugin'
...
console.log('Version of proejct: ', BUILD_INFO.VERSION)
...
```
## Licence
MIT
