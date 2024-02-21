import chalk from 'chalk';
import dayjs from 'dayjs';

export const DayFormat = 'YYYY-MM-DD HH:mm:ss';

export class Logger {
  public static log(message: string) {
    console.log(chalk.green(chalk.green.bold(`[NORM][${dayjs().format(DayFormat)}] `) + message))
  }

  public static info(message: string) {
    console.log(chalk.blue(chalk.blue.bold(`[INFO][${dayjs().format(DayFormat)}] `) + message));
  }

  public static warn(message: string) {
    console.log(chalk.yellow(chalk.yellow.bold(`[WARN][${dayjs().format(DayFormat)}] `) + message));
  }

  public static error(message: string) {
    console.log(chalk.red(chalk.red.bold(`[EROR][${dayjs().format(DayFormat)}] `) + message));
  }

  public static debug(message: string) {
    console.log(chalk.cyan(chalk.cyan.bold(`[DBUG][${dayjs().format(DayFormat)}] `) + message));
  }
}
