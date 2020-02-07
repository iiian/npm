const AggregateError = require('aggregate-error');
const tempy = require('tempy');
const setLegacyToken = require('./lib/set-legacy-token');
const prepareNpm = require('./lib/prepare');

const npmrc = tempy.file({name: '.npmrc'});

async function prepare(_pluginConfig, context) {
  setLegacyToken(context);

  await prepareNpm(npmrc, context);
}

module.exports = { prepare };
