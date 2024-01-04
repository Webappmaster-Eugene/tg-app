import { Telegraf, Markup } from "telegraf";

const token = "6704594805:AAE-my-OfleHM1gfihFzo_Bc6f2FJa7m6AA";
const webAppUrl = "https://angular-tg-app-7bb58.web.app/";
const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply("Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение!");
  Markup.keyboard([
    Markup.button.webApp(
      "Отправить сообщение", webAppUrl
    )
  ]);
});

bot.launch();