import { Invoker } from '../models/invoker'
import { Command } from '../models/command';

test('addCommand should add a command to invoker', () => {
    let mockCommand: Command = {
        execute: jest.fn(() => 'test')
    }
    let invoker: Invoker = new Invoker();

    invoker.addCommand(mockCommand);

    expect(invoker.commands.length).toBe(1);
    expect(invoker.commands[0]).toEqual(mockCommand);
});


test('runCommands should execute all commands', () => {
    let mockCommand: Command = {
        execute: jest.fn(() => 'test')
    }
    let invoker: Invoker = new Invoker();
    invoker.commands = [mockCommand, mockCommand, mockCommand];

    invoker.runCommands();

    expect(mockCommand.execute).toHaveBeenCalledTimes(3);
    expect(invoker.commands).toEqual([]);
});

test('runCommand should execute command and return result', () => {
    let mockCommand: Command = {
        execute: jest.fn(() => 'test')
    }

    let otherCommand: Command = {
        execute: jest.fn(() => 'other')
    }

    let invoker: Invoker = new Invoker();
    invoker.commands = [mockCommand,mockCommand,mockCommand]
    
    let result = invoker.runCommand();

    expect(mockCommand.execute).toHaveBeenCalledTimes(1);
    expect(invoker.commands).toEqual([mockCommand, mockCommand]);
    expect(result).toBe('test');
});