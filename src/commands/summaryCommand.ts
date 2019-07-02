import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';

export class SummaryCommand implements Command {
    manager: Manager;
    message: Message;
    tags: Array<string>;


    constructor(manager: Manager, message: Message, tags: Array<string>) {
        this.manager = manager;
        this.message = message;
        this.tags = tags;
    }

    execute(): string {
        if (this.manager === undefined) {
            return 'Draft has not begun!';
        }
        else {
            let summ = '';
            for (let i = 0; i < this.tags.length; i++) {
                summ +=
                    '\t' +
                    this.tags[i] + ': '
                    + this.manager.getPlayer(this.tags[i]).getTeams()
                    + '\n';
            }
            return `draft summary:\n ${summ}`;
        }
    }
}