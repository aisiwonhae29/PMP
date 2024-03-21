# electron builder & packager

### builder

- generally recommended for more complex Electron projects with advanced requirements
- Suitable for projects that require auto-updates and have a need for features like code signing

### packager

- simpler and more lightweight approach to packaging Electron applications
- Focused on creating standalone executables for specific platforms and architectures
- does not directly support features like auto-updating

### Description

- make a configuration in package.json, and 

<details><summary>code</summary>

```
{
  "name": "electron-blog-example",
  ...
  "scripts": {
    "start": "electron .",
    "dist": "electron-builder"
  },
  "build": {
    "appId": "electron-blog-example",
    "dmg": {
      "title": "${productName} ${version}"
    },
    "linux": {
      "target": [
        "AppImage",
        "deb"
      ]
    },
    "win": {
      "target": "NSIS",
      "icon": "build/icon.ico"
    }
  },
  ...
  "devDependencies": {
    "electron": "^20.0.2",
    "electron-builder": "^23.3.3"
  }
}

```

- appId: app-specific configuration. In windows uses this ID to associate processes, files, and windows to this particular application.
- dmg, linux, win: representation about OS MacOS, linux, windows sequencially.
</details>

