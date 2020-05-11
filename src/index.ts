import {Request,Response} from "express"
import TelegramBot = require("node-telegram-bot-api");

const ROBOHASH_URL: string = process.env.ROBOHASH_URL;
const TG_TOKEN = process.env.TG_TOKEN;

export function handleRobo(req: Request, res: Response) {
    const chat = req.body.message.chat;
    const bot = new TelegramBot(TG_TOKEN);

    if(req.originalUrl.includes(TG_TOKEN)){
        bot.sendPhoto(chat.id, ROBOHASH_URL+"/"+req.body.message.text);
        res
            .status(200)
            .type('application/json')
            .send('ACK telegram')
            .end
    } else {
        res
            .status(200)
            .type('html')
            .send('<h2> hello from gcp robohashbot</h2>')
            .end
    }
    
}