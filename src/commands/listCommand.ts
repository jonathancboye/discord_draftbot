import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';

export class ListCommand implements Command {
    manager: Manager;
    message: Message;


    constructor(manager: Manager, message: Message) {
        this.manager = manager;
        this.message = message;
    }

    execute(): string {
        if (this.manager === undefined) {
            return 'Draft has not begun';
        }
        return 'here is the list of teams you can pick from:\n' +
            this.manager.displayTeams();
    }
}