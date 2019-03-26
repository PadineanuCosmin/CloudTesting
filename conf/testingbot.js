nightwatch_config = {
  src_folders : [ "tests/" ],

  selenium : {
    "start_process" : false,
    "host" : "hub.testingbot.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-testingbot',
    'client_key': process.env.TB_KEY || 'd9f7e4a8c20f35cda2d902afc1af7ab3',
    'client_secret': process.env.TB_SECRET || '11b7f53d8d2c57ead3b8190f112655ba'
  },

  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        browser: "chrome",
        version: "73",
        platform:"WIN10"
      }
    },
    firefox: {
      desiredCapabilities: {
        browser: "firefox",
        version: "66",
        platform:"WIN10"
      }
    },
    safari: {
      desiredCapabilities: {
        browser: "safari",
        version: "11",
        platform:"HIGH-SIERRA"
      }
    },
    ie: {
      desiredCapabilities: {
        browser: "internet explorer",
        version: "11",
        platform:"WIN10"
      }
    },
    edge: {
      desiredCapabilities: {
        browser: "microsoftedge",
        version: "18",
        platform:"WIN10"
      }
    },
    GalaxyS9: {
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'Galaxy S9',
        browserName: "Chrome",
        platform:"Android",
        version: "9.0"
      }
    },
    Nexus7: {
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'Nexus 7',
        browserName: "Chrome",
        platform:"Android",
        version: "7.1"
      }
    },
    iphoneX: {
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'iPhone X',
        browserName: "safari",
        platform:"iOS",
        version: "12.1"
      }
    },
    iPad6thGen: {
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'iPad (6th generation)',
        browserName: "safari",
        platform:"iOS",
        version: "12.1"
      }
    }
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
var config = nightwatch_config.test_settings[i];
config['selenium_host'] = nightwatch_config.selenium.host;
config['selenium_port'] = nightwatch_config.selenium.port;
config['desiredCapabilities'] = config['desiredCapabilities'] || {};
for(var j in nightwatch_config.common_capabilities){
config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
}
}

module.exports = nightwatch_config;