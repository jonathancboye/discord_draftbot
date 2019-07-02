import { Manager } from '../models/manager';
import { Command } from '../models/command';
import { Message } from 'discord.js';
import { Player } from '../models/player';

export class JoinCommand implements Command {
    manager: Manager;
    message: Message;
    players: Array<Player>;


    constructor(manager: Manager, message: Message, players: Array<Player>) {
        this.manager = manager;
        this.message = message;
        this.players = players;
    }

    execute(): string {
        let tag = this.message.author.tag;
        let id = this.message.author.id;

        if (this.manager === undefined) {
            var result = this.players.find(p => {
                return p.tag === tag
            })
            if (result) {
                return `Stop dat. You are already in the draft.`
            }
            else {
                this.players.push(new Player(tag, id));
                let order = '';
                for (let i = 0; i < this.players.length; i++) {
                    order += '\t' + this.players[i].tag + '\n';
                }
                return `Current users in draft: \n${order}`;
            }
        }
        else {
            return 'The draft has already begun';
        }
    }
}