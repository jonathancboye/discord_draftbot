import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';

export class PickCommand implements Command {
    manager: Manager;
    message: Message;


    constructor(manager: Manager, message: Message) {
        this.manager = manager;
        this.message = message;
    }

    execute(): string {
        let command = this.message.content;
        let tag = this.message.author.tag;
        let team = command.substr(command.indexOf(" ") + 1);

        if (this.manager === undefined) {
            return 'The draft has not started yet';
        }
        else if (tag != this.manager.getTurnPlayer().tag) {
            return `wait your turn buddy!`;
        } else if (team === undefined) {
            return `forgot to specify a team!`;
        } else if (this.manager.getTeams().find(t => t === team) === undefined) {
            return `is not paying attention.\n` +
                `You must pick from the following:\n` +
                `${this.manager.displayTeams()}`;
        } else {
            this.manager.removeTeam(team);
            this.manager.getTurnPlayer().addTeam(team);
            this.manager.setNextPlayer();
            if (this.manager.getTurnPlayer().teams.length == 3) {
                return `picked ${team} \n DRAFT COMPLETE`;
            } else {
                return `picked ${team} \n` +
                    `<@${this.manager.getTurnPlayer().id}> take your pick!`;
            }
        }
    }
}