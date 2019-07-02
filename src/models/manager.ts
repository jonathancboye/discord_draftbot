import { Player } from './player';
import { shuffle } from '../util';

export class Manager {
    teams: Array<string>;
    playerTurn: number;
    players: Array<Player>;
    /*
Team 1 — 1st pick, 20th pick, 26th pick
Team 2 — 2, 16, 29
Team 3 — 3, 13, 30
Team 4 — 4, 18, 25
Team 5 — 5, 15, 27
Team 6 — 6, 19, 22
Team 7 — 7, 11, 28
Team 8 — 8, 17, 21
Team 9 — 9, 14, 23
Team 10 — 10, 12, 24 */
    pickOrder: Array<number> = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        6, 9, 2, 8, 4, 1, 7, 3, 5, 0,
        7, 5, 8, 9, 3, 0, 4, 6, 1, 2
    ];

    constructor() {
        this.playerTurn = 0;
        this.teams = new Array();
        this.players = new Array();
    }

    getOrder(user: string): string {
        const deocrateDonePick = (str: string, playersTurn: number, pickNumber: number): string =>
            (playersTurn > pickNumber) ? '~~' + str + '~~' : str;

        const decorateMyPick = (str: string, tag: string, user: string): string =>
            (tag === user) ? '**' + str + '**' : str

        return this.pickOrder
            .map(p => this.players[p].tag)
            .map((tag, index) =>
                deocrateDonePick(
                    decorateMyPick(`Pick ${(index + 1)}: ${tag}`,
                        tag,
                        user),
                    this.playerTurn,
                    index))
            .reduce((firstPick, otherPicks) => firstPick + '\n' + otherPicks) + '\n';
    }

    addTeam(team: string): void {
        this.teams.push(team);
    }

    addTeams(teams: Array<string>) {
        teams.forEach(t => this.teams.push(t));
    }

    addPlayers(players: Array<Player>) {
        players.forEach(p => this.players.push(p))
    }

    removeTeam(team: string): void {
        this.teams = this.teams.filter(t => t !== team);
    }

    getTeams(): Array<string> {
        return this.teams;
    }

    displayTeams(): string {
        if (this.teams.length === 0) { return '' }

        return this.teams.reduce((first, rest) => first + '\n' + rest);
    }

    getPlayers(): Array<Player> {
        return this.players;
    }

    setNextPlayer(): void {
        this.playerTurn++;
        if (this.playerTurn > 29) {
            this.playerTurn = 0;
        }
    }

    getTurnPlayer(): Player {
        return this.players[this.pickOrder[this.playerTurn]];
    }

    getPlayer(tag): Player {
        return this.players.find(p => p.tag === tag);
    }
}