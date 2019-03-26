nightwatch_config = {
    src_folders: [
        "tests"// Where you are storing your Nightwatch e2e tests
    ],
    page_objects_path: "page_objects",
    selenium : {
        "start_process" : false,
        "host" : "hub-cloud.browserstack.com",
        "port" : 80
    },

    common_capabilities: {
        'browserstack.user': 'ionionescu3',
        'browserstack.key': '5KMHs9sTZA9PsqiKry1i',
        'browserstack.video': 'true',
        globals: {
            'waitForConditionTimeout': 5000 // sometimes internet is slow so wait.
        },
    },

    test_settings: {
        default: {},
        chrome: {
            desiredCapabilities: {
                'os': 'Windows',
                'os_version': '10',
                'browser': 'Chrome',
                'browser_version': '73.0',
                'resolution': '1920x1080',
            }
        },
        firefox: {
            desiredCapabilities: {
                'os': 'Windows',
                'os_version': '10',
                'browser': 'Firefox',
                'browser_version': '66.0',
                'resolution': '1920x1080',
            }
        },
        edge: {
            desiredCapabilities: {
                'os': 'Windows',
                'os_version': '10',
                'browser': 'Edge',
                'browser_version': '17.0',
                'resolution': '1920x1080',
            }
        },
        ie: {
            desiredCapabilities: {
                'os': 'Windows',
                'os_version': '10',
                'browser': 'IE',
                'browser_version': '11.0',
                'resolution': '1920x1080',
            }
        },
        safari: {
            desiredCapabilities: {
                'os': 'OS X',
                'os_version': 'High Sierra',
                'browser': 'Safari',
                'browser_version': '12.0',
                'resolution': '1920x1080',
            }
        },
        s9Plus: {
            desiredCapabilities: {
                'device': 'Samsung Galaxy S9 Plus',
                'realMobile': 'true',
                'os_version': '8.0'
            }
        },
        galaxyTabS4: {
            desiredCapabilities: {
                'device': 'Samsung Galaxy Tab S4',
                'realMobile': 'true',
                'os_version': '8.1'
            }
        },
        iPhoneXSMax: {
            desiredCapabilities: {
                'device': 'iPhone XS Max',
                'realMobile': 'true',
                'os_version': '12.0'
            }
        },
        iPadPro12_9_2018: {
            desiredCapabilities: {
                'device': 'iPad Pro 12.9 2018',
                'realMobile': 'true',
                'os_version': '12.3'
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
