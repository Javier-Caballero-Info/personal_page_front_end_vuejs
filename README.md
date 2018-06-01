# Personal Page Front End - VueJs

> VueJs application with API connection and authentication support
## Table of Contents

-   [Overview](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master/README.md#overview)
-   [Clone](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master/README.md#clone)
- [Requirements](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#requirements)
- [Installation](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#installation)
	- [Nodejs and Npm](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#nodejs-and-npm)
	- [Yarn](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#yarn)
	- [Dependencies](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#dependencies)
- [Add/Remove packages](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#addremove-packages)
- [Environment](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#environment)
- [Developing](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#developing)
- [Test](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#test)
- [Build](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#build)
- [Deploy](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#deploy)
- [Running with Docker](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#running-with-docker)
	- [Building the image](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#building-the-image)
	- [Starting up a container](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#starting-up-a-container)
- [Contributing](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#contributing)
- [Author](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#author)
- [License](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/tree/master#license)

## Overview

This is the front end of my own personal page admin system. 
All the modules are connected to the [Admin NodeJS Api](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs) using services.
For the authorization process, this app interact with [Auth Python Api](https://github.com/Javier-Caballero-Info/personal_page_authenticator_python)
to get the authentication token that is stored in the local storage in the browser.

## Clone

```bash
git clone https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs.git
git remote rm origin
git remote add origin <your-git-path>
```

## Requirements

* **NodeJs:** 9.11.1 or above
* **Npm:** 5.6.0 or above
* **Yarn:** 1.6.0  or above
## Installation

1. ### NodeJs and Npm
Latest LTS Version: **9.11.1** (includes npm 5.6.0)

- Debian / Ubuntu
```bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
```

```bash
sudo apt install -y nodejs
```

```bash
sudo apt install -y build-essential
```

- MacOS

	- Bash
	```bash
	curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
	```
	- Brew
	```bash
	brew install node
	```
	- MacPorts
	```bash
	port install nodejs9
	```

- Windows

	- Chocolatey
	```bash
	cinst nodejs.install
	```
	- Scoop
	```bash
	scoop install nodejs
	```
	- MSI installer
	Download [here](http://nodejs.org/#download) the installer.

For more details, please visit [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager/).


2. ### Yarn

- Debian / Ubuntu
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```bash
sudo apt update
```
```bash
sudo apt install --no-install-recommends yarn
```

- MacOS

	- Brew
	```bash
	brew install yarn --without-node
	```
	- MacPorts
	```bash
	sudo port install yarn
	```

- Windows

	- Chocolatey
	```bash
	choco install yarn
	```
	- Scoop
	```
	scoop install yarn
	```
	- MSI installer
	Download [here](https://yarnpkg.com/latest.msi) the installer.

For more details, please visit [https://yarnpkg.com/lang/en/docs/install](https://yarnpkg.com/lang/en/docs/install/).

	
3. ### Dependencies

This will install all dependencies from package.json

```bash
 yarn install
 ``` 
 
## Add/Remove packages

```bash
 yarn add <PACKAGE_NAME>
 yarn add --dev <PACKAGE_NAME>
 yarn remove <PACKAGE_NAME>
```

## Developing

The command includes live reload on every change.

```
npm start
```

## Test

```
npm test
```

## Build

```
npm run build
```

## Deploy

The deploy process is made with Firebase hosting service. For that process follow this steps:

> This is my choice, the recommendation is still using Docker as all the project

1. Build the app:

    ```Bash
    npm run build
    ```

2. Install Firebase CLI in your machine:

    ```Bash
    npm install -g firebase-tools
    ```
    
3. Login into firebase:

    ```Bash
    firebase login
    ```
    
4. Deploy the app:

The configuration should be read form firebase.json file.
    
    ```Bash
    firebase deploy
    ```

## Running with Docker

To run the server on a Docker container, please execute the following from the root directory, after build the project:

### Building the image
```bash
docker build -t personal_page_front_end_vuejs .
```
### Starting up a container
```bash
docker run -p 80:80 -d personal_page_front_end_vuejs
```
## Contributing

Contributions welcome! See the  [Contributing Guide](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/blob/master/CONTRIBUTING.md).

## Author

Created and maintained by [Javier Hernán Caballero García](https://javiercaballero.info)).

## License

GNU General Public License v3.0

See  [LICENSE](https://github.com/Javier-Caballero-Info/personal_page_front_end_vuejs/blob/master/LICENSE)
