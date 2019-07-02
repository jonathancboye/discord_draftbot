import { Player } from '../models/player'

test('addTeam should add a team to a player', () => {
    let player = new Player('carpenter', 1);
    player.addTeam('SportsTeam');

    expect(player.teams.length).toBe(1);
    expect(player.teams[0]).toBe('SportsTeam');
});

test('getTeams should get teams from a player', () => {
    let player = new Player('carpenter', 1);
    player.teams = ['team1', 'team2', 'team3'];

    expect(player.getTeams()).toEqual(['team1', 'team2', 'team3']);
});

test('should remove teams from a player', () => {
    let player = new Player('carpenter', 1);
    player.teams = ['team1', 'team2', 'team3'];

    player.removeTeam('team2');

    expect(player.teams).toEqual(['team1', 'team3']);
});