import {Manager} from '../models/manager'
import { Player } from '../models/player';

test('addTeam should add a team to a manager', () => {
    let manager = new Manager();
    manager.addTeam('SportsTeam');

    expect(manager.teams.length).toBe(1);
    expect(manager.teams[0]).toBe('SportsTeam');
});


test('displayTeams should print the list of teams', () => {
    let manager = new Manager();
    manager.teams = ['Team1', 'Team2', 'Team3'];

    let result = manager.displayTeams();

    expect(result).toBe('Team1\nTeam2\nTeam3');
});

test('displayTeams should print empty string when no teams', () => {
    let manager = new Manager();

    let result = manager.displayTeams();

    expect(result).toBe('');
});

test('getOrder should return a list of orders', () => {
    let manager = new Manager();
    let p0 = new Player('candy', 0);
    let p1 = new Player('jon', 1);
    let p2 = new Player('tom', 2);
    let p3 = new Player('blam', 3);
    let p4 = new Player('blah', 4);
    let p5 = new Player('khan', 5);
    let p6 = new Player('gra', 6);
    let p7 = new Player('mar', 7);
    let p8 = new Player('char', 8);
    let p9 = new Player('scar', 9);

    manager.addPlayers([p0,p1, p2, p3, p4, p5, p6, p7, p8, p9]);
    manager.playerTurn = 3

    console.log(manager.getOrder('jon'));
});