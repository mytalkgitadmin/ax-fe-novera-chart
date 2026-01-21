#!/usr/bin/env node

// cz-customizable을 CommonJS 환경에서 실행하기 위한 wrapper
// type: module 환경에서는 직접 실행 불가능하므로 별도 스크립트로 실행

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.join(__dirname, '../node_modules/commitizen'),
  config: {
    path: 'cz-customizable',
  },
});
