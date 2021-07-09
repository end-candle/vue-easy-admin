const chalk = require('chalk');
const msgPath = process.env.GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE =
    /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
    console.log();
    console.error(
        `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`无效的消息提交格式.`)}\n\n` +
            chalk.red(`  自动生成变更日志需要正确的提交消息格式。例子:\n\n`) +
            `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
            `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
            chalk.red(`  在COMMIT_CONVENTION.md文件中查看更多.\n`) +
            chalk.red(`  你也可以使用 ${chalk.cyan(`npm run commit`)} 交互式地生成提交消息。\n`)
    );
    process.exit(1);
}
