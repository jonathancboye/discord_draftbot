import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';

export class HelpCommand implements Command {
    manager: Manager;
    message: Message;


    constructor(manager: Manager, message: Message) {
        this.message = message;
        this.manager = manager;
    }

    execute(): string {
        return 'tap it like this:\n' +
            '.list - display teams you can pick\n' +
            '.pick <team name> - pick a team\n' +
            '.picker - list the current players turn\n' +
            '.myteam - list your current picks\n' +
            '.join - join the current draft\n' +
            '.help - I am currently doing that for ya bud\n' +
            '.order - list starting pick order\n' +
            '.summary - list teams that have been picked and who did the choosing\n';
    }
}