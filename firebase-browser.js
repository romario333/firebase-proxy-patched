/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

require('./auth');

require('./database');

require('./storage');

require('./messaging');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export the single instance of firebase
exports.default = _app2.default; /**
                                 * Copyright 2017 Google Inc.
                                 *
                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                 * you may not use this file except in compliance with the License.
                                 * You may obtain a copy of the License at
                                 *
                                 *   http://www.apache.org/licenses/LICENSE-2.0
                                 *
                                 * Unless required by applicable law or agreed to in writing, software
                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                 * See the License for the specific language governing permissions and
                                 * limitations under the License.
                                 */

module.exports = exports['default'];
//# sourceMappingURL=firebase-browser.js.map
