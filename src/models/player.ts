export class Player
{
    teams: Array<string>;
    tag: string;
    id: number;
    
    constructor(tag, id) {
        this.teams = [];
        this.tag = tag;
        this.id = id;
    }

    addTeam(team: string): void {
        this.teams.push(team);
    }
    
    removeTeam(team: string): void {
        this.teams = this.teams.filter(t => t !== team);
    }

    getTeams() : Array<string>
    {
        return this.teams;
    }
}