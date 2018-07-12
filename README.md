# LinuxGSM-Web

Web interface for [LinuxGSM](https://github.com/GameServerManagers/LinuxGSM) written in node.js.

[![Build Status](https://travis-ci.org/clevelandcs/LinuxGSM-Web.svg?branch=master)](https://travis-ci.org/clevelandcs/LinuxGSM-Web)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/clevelandcs/LinuxGSM-Web.svg?columns=Inbox,Backlog)](https://waffle.io/clevelandcs/LinuxGSM-Web)  

## Getting Started

### Prerequisites

* Debian based Linux Distro
* Node.js 8.11.3 LTS

### Installing

* Create a new user to run the game server (Optional)
* Make a new directory in the desired folder
* Clone the repository
* Run or test with npm

```bash
cd ~/Documents
mkdir LinuxGSM-Web
cd LinuxGSM-Web
git clone https://github.com/clevelandcs/LinuxGSM-Web.git
npm start
```

## Testing

### Code Tests

Automated tests are written where possible using the Mocha framework and Chai assertion library.

```bash
npm test
mocha --reporter spec



  File IO
    Download a file
  ✓ can download a simple file (806ms)

  1 passing (812ms)
```

### Coding Style Tests

TODO:

## Deployment

TODO:

## Built With

* [Node](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Express](https://www.npmjs.com/package/express)
* [Socket.io](https://www.npmjs.com/package/socket.io)
* [Shell.js](https://www.npmjs.com/package/shelljs)

## Contributing

Please read Contributing.md for details on code of conduct and pull request process. Feel free to submit issues, requests, and suggestions through Github issues.

## Versioning

This repository uses [SemVer](https://semver.org/) for versioning. For the list of available and upcoming versions see the repository Releases tab.

## Authors

* Connor Cleveland - Initial Work

## License

This project is licensed under the MIT License - see the license.md for details

## Acknowledgments

* [Travis-CI](https://travis-ci.org/) for automated build and testing