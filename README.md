# Cloud testing platforms trial

## Getting Started

The demo test can be found in the /tests path.

The page objects used by these tests can be found in the /page_objects path.

The configuration files can be found in the /conf path.

The command line scripts definitions can be found in the package.json file.

This framework contains configs to run tests on:

1. [BrowserStack](https://automate.browserstack.com)
2. [CosssBrowserTesting](https://app.crossbrowsertesting.com)
3. [SauceLabs](https://saucelabs.com) - Version of config will run in parallel with a full account

## If the demo accounts have expired just create your own ones and change the tokens in the config files in /conf path.




### Prerequisites

1. Have Java JDK installed: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

2. Add to your PATH system variable the java bin location
```
C:\Program Files\Java\jdk1.8.0_181\bin
```

restart and make sure that java is installed properly by running

```
> java -version

java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)
```
3. Have git installed: https://git-scm.com/downloads
4. Have NodeJS installed: https://nodejs.org/en/download/
5. Have Chrome installed on you system

### Installing

1. Clone this repo locally.

2. Inside the root folder of the repo cloned from git /CodeCampCloudTesting run
```
> npm install
```

## Running the tests

From inside the root folder of the repo cloned from git /CodeCampCloudTesting run any of the following commands:
```
> npm run local
```
```
> npm run browserstack
```
```
> npm run crossbrowsertesting_desktop
```
```
> npm run crossbrowsertesting_mobile
```
```
> npm run saucelabs
```

## Built With

* [NodeJS](https://nodejs.org/en/) - Javascript engine
* [npm](https://www.npmjs.com/) - Dependency Management
* [NightwatchJS](http://nightwatchjs.org/) - Selenium Framework

