envFile = require('../env')

window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.apiUrl = envFile.APP_ENV == 'development' ? 'http://localhost:9090' : envFile.MIXUP_API_URL