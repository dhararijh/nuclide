'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDevicePanelProviders = registerDevicePanelProviders;

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('nuclide-commons/UniversalDisposable'));
}

var _DevicePoller;

function _load_DevicePoller() {
  return _DevicePoller = require('../../nuclide-adb-sdb-base/lib/DevicePoller');
}

var _AndroidDeviceInfoProvider;

function _load_AndroidDeviceInfoProvider() {
  return _AndroidDeviceInfoProvider = require('./providers/AndroidDeviceInfoProvider');
}

var _AndroidDeviceProcessesProvider;

function _load_AndroidDeviceProcessesProvider() {
  return _AndroidDeviceProcessesProvider = require('./providers/AndroidDeviceProcessesProvider');
}

var _AndroidDeviceStopProcessProvider;

function _load_AndroidDeviceStopProcessProvider() {
  return _AndroidDeviceStopProcessProvider = require('./providers/AndroidDeviceStopProcessProvider');
}

var _AvdComponentProvider;

function _load_AvdComponentProvider() {
  return _AvdComponentProvider = require('./providers/AvdComponentProvider');
}

var _AdbTunnelingProvider;

function _load_AdbTunnelingProvider() {
  return _AdbTunnelingProvider = require('./providers/AdbTunnelingProvider');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

function registerDevicePanelProviders(api) {
  return new (_UniversalDisposable || _load_UniversalDisposable()).default(api.registerListProvider({
    getType: () => 'Android',
    observe: host => (0, (_DevicePoller || _load_DevicePoller()).observeAndroidDevicesX)(host)
  }), api.registerInfoProvider(new (_AndroidDeviceInfoProvider || _load_AndroidDeviceInfoProvider()).AndroidDeviceInfoProvider()), api.registerProcessesProvider(new (_AndroidDeviceProcessesProvider || _load_AndroidDeviceProcessesProvider()).AndroidDeviceProcessesProvider()), api.registerProcessTaskProvider(new (_AndroidDeviceStopProcessProvider || _load_AndroidDeviceStopProcessProvider()).AndroidDeviceStopProcessProvider()), api.registerDeviceTypeComponentProvider(new (_AvdComponentProvider || _load_AvdComponentProvider()).AvdComponentProvider()), api.registerDeviceTypeComponentProvider(new (_AdbTunnelingProvider || _load_AdbTunnelingProvider()).AdbTunnelingProvider()));
}