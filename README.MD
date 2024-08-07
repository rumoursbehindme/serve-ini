# serve-ini 🚀

`serve-ini` is a Node.js module designed to effortlessly read and process configuration files from a directory. 📂 It supports reading INI files 📄 and organizing configurations into a nested structure based on directory and file names. 🏗️

## Features ✨

- Recursively reads configuration files from a directory. 🔍
- Supports ini file format.  INI 🤘
- Organizes configurations in a nested structure based on directory structure. 📦

## Installation ⬇️
``` yarn add serve-ini```
#### OR
```npm install serve-ini```

## Usage

### Importing module
```javascript
import SIC from 'serve-ini';
```
### Loading configuration

```javascript
const configFolderPath = 'YOUR_CONFIG_FOLDER_PATH';
const configurations = SIC(configFolderPath);
console.log(configurations);
```
## API📚

### `serveINIConfigurations(configFolderPath: string): object`

**Parameters:**

- `configFolderPath` (string): Path to the directory containing configuration files.📁

**Returns:**

- An object containing the configurations organized in a nested structure.🌳