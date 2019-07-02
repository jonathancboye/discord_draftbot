import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';

export class MyTeamsCommand implements Command {
    manager: Manager;
    message: Message;


    constructor(manager: Manager, message: Message) {
        this.manager = manager;
        this.message = message;
    }

    execute(): string {
        let tag = this.message.author.tag;

        if(this.manager === undefined) {
            return 'Draft has not begun!';
        }

        return 'picks:\n' +
            this.manager.getPlayer(tag).getTeams();
    }
}