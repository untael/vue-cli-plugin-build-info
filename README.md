
# vue-cli-plugin-build-info

Vue-cli plugin that shows build information in console.

It may be useful if you have established CI out of your control and want to make sure the version everyone sees on staging corresponds to last commit.

![Demo](docs/demo.png)

## Install
:warning: Make sure you have [vue-cli](https://cli.vuejs.org/)

```
vue --version
```

If you don't have a project created with [vue-cli](https://cli.vuejs.org/) yet:

```
vue create my-app
```

Navigate to the newly created project folder and add the cli plugin. Before installing it, make sure to commit your current changes should you wish to revert them later.

``` js
vue add build-info
```
## Usage
The plugin automatically injects a method into your entry file that allows you to see basic information about the latest build in **console**
``` js
import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'
consoleBuildInfo()
```
You can also import a method **getBuildInfo** that return an object **BUILD_INFO** that contains **VERSION, TIMESTAMP, COMMIT** to use it for your own purposes.
``` js
import {getBuildInfo} from 'vue-cli-plugin-build-info/plugin'
console.log(getBuildInfo().VERSION)
```
## Licence
MIT
