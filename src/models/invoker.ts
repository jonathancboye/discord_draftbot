import {Command} from './command';

export class Invoker
{
    commands: Array<Command>
    

    constructor() {
        this.commands = [];
    }

    addCommand(command: Command) {
        this.commands.push(command);
    }

    runCommands() {
        while(this.commands.length > 0) {
            let command: Command = this.commands.shift();
            command.execute();
        }
    }

    runCommand(): string {
        if(this.commands.length > 0) {
            let command: Command = this.commands.shift();
            return command.execute();
        }
        return '';
    }
}