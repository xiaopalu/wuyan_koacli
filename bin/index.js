#!/usr/bin/env node
const { program } = require('commander');

// 定义当前版本
// 定义使用方法
// 定义指令
program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new project from a template')
  
// 解析命令行参数
program.parse(process.argv)
