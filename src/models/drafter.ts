import { Invoker } from './invoker';
import { Player } from './player';
import { Manager } from './manager';
import { Message } from 'discord.js';
import { PickCommand } from '../commands/pickCommand';
import { ListCommand } from '../commands/listCommand';
import { MyTeamsCommand } from '../commands/myTeamsCommand';
import { OrderCommand } from '../commands/orderCommand';
import { PickerCommand } from '../commands/pickerCommand';
import { HelpCommand } from '../commands/helpCommand';
import { SummaryCommand } from '../commands/summaryCommand';
import { JoinCommand } from '../commands/joinCommand';
import { shuffle } from '../util';

export class Drafter {
    invoker: Invoker;
    teams: Array<string>;
    players: Array<Player>;
    manager: Manager;


    constructor() {
        this.invoker = new Invoker();
        this.teams = [];
        this.players = [];
    }

    addTeams(teams: Array<string>) {
        this.teams = teams;
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    startDraft() {
        this.manager = new Manager();
        this.manager.addTeams(this.teams);
        this.manager.addPlayers(shuffle(this.players));
    }

    draft(message: Message) {
        if (this.manager === undefined) {
            if (false) {//tags.length != 10) {
                return 'Cannot start draft without 10 players';
            } else {
                this.startDraft();
                return 'The draft has begun!';
            }
        } else {
            return 'The draft has already begun';
        }
    }

    enddraft(message: Message) {
        let tag = message.author.tag;
        if ( tag === 'nickprime#8865') {
            this.manager = undefined;
            this.invoker.addCommand({
                execute: () => 'The draft has ended.'
            });
        } else {
            this.invoker.addCommand({
                execute: () => 'No.'
            });
        }
    }

    help(message: Message) {
        this.invoker.addCommand(new HelpCommand(this.manager, message));
    }

    picker(message: Message) {
        this.invoker.addCommand(new PickerCommand(this.manager, message));
    }

    myteam(message: Message) {
        this.invoker.addCommand(new MyTeamsCommand(this.manager, message));
    }

    list(message: Message) {
        this.invoker.addCommand(new ListCommand(this.manager, message));
    }

    pick(message: Message) {
        this.invoker.addCommand(new PickCommand(this.manager, message));
    }

    order(message: Message) {
        this.invoker.addCommand(new OrderCommand(this.manager, message));
    }

    summary(message: Message) {
        this.invoker.addCommand(new SummaryCommand(this.manager, message, this.players.map(p => p.tag)));
    }

    join(message: Message) {
        this.invoker.addCommand(new JoinCommand(this.manager, message, this.players));
    }

    runCommand(message: Message) {
        let response = this.invoker.runCommand()
        if (response != '') {
            message.reply(response);
        }
    }
}