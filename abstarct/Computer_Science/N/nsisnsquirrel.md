# NSIS and Squirrel

- both tools/ frameworks used in the context of Windows application installation and updates, but they are different purposes and approaches

### NSIS(Nullsoft Scriptable Install System)

- Installer Framework: NSIS is a script-driven installer framework that allows you to create custom installation pacakges for Windows applications. not specifically focused on updates. focus on initial install
- Scripting language: written in a custom scripting language.
- Customization: provides a high level of customization, allowing developers to create installers with a specific look and feel.
- Manual Updates: For updates, NSIS would typically require additional custom scripting to implement a mechanism for checking and updating the installed software


### Squirrel

- Updater Framework: designed as an updater framework for Electron applications on Windows.
- Integration with Electron: commonly used with Electron applications and integrates seamlessly with the Electron build process
- Ease to use: for automatic updates without requiring extensive manual configuration, use this.