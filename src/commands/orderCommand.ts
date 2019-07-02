import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';

export class OrderCommand implements Command {
    manager: Manager;
    message: Message;


    constructor(manager: Manager, message: Message) {
        this.manager = manager;
        this.message = message;
    }

    execute(): string {
        let tag = this.message.author.tag;

        if(this.manager === undefined) {
            return 'Draft has not begun';
        }
        
        return 'order:\n' +
            this.manager.getOrder(tag);
    }
}