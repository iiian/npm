const path = require('path');
const execa = require('execa');

module.exports = async (npmrc, {cwd, env, stdout, stderr, nextRelease: {version}, logger}) => {
  const basePath = cwd;

  logger.log('Write version %s to package.json in %s', version, basePath);

  const versionResult = execa(
    'npm',
    ['version', version, '--userconfig', npmrc, '--no-git-tag-version', '--allow-same-version'],
    {
      cwd: basePath,
      env,
    }
  );
  versionResult.stdout.pipe(stdout, {end: false});
  versionResult.stderr.pipe(stderr, {end: false});

  await versionResult;
};
