#!/usr/bin/env node

const yaml = require('js-yaml');
const fs = require('fs');

let doc;
try {
  doc = yaml.safeLoad(fs.readFileSync(process.argv[2], 'utf8'));
} catch (e) {}
console.log(JSON.stringify(doc, null, 4));
