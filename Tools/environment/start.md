# chocolatey download

Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# git, nodejs download

choco install git nodejs-lts -y

# vscode download

choco install vscode -y

# obsidian download

choco install obsidian -y

## install git contents to the obsidian vault
git config --global user.email aisiwonhae29@gmail.com
git config --global user.name KimSiWon
cd "C:\Users\$env:USERNAME\Documents\Obsidian Vault"
git clone https://github.com/aisiwonhae29/local_obsidian.git
