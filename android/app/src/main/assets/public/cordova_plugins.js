
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
      },
      {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
          "window.Keyboard"
        ]
      },
      {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
          "window.plugins.socialsharing"
        ]
      },
      {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin"
      }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-ionic-keyboard": "2.0.5",
      "cordova-plugin-whitelist": "1.3.3",
      "cordova-plugin-x-socialsharing": "5.4.0",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    