import * as Discord from 'discord.js';
import { Drafter } from './models/drafter';

const client = new Discord.Client();
const token: string = '';
var teams: Array<string> = [
  'Arizona Cardinals',
  'Atlanta Falcons',
  'Baltimore Ravens',
  'Buffalo Bills',
  'Carolina Panthers',
  'Chicago Bears',
  'Cincinnati Bengals',
  'Cleveland Browns',
  'Dallas Cowboys',
  'Denver Broncos',
  'Detroit Lions',
  'Green Bay Packers',
  'Houston Texans',
  'Indianapolis Colts',
  'Jacksonville Jaguars',
  'Kansas City Chiefs',
  'Miami Dolphins',
  'Minnesota Vikings',
  'New England Patriots',
  'New Orleans Saints',
  'New York Giants',
  'New York Jets',
  'Oakland Raiders',
  'Philadelphia Eagles',
  'Pittsburgh Steelers',
  'San Diego Chargers',
  'San Francisco 49ers',
  'Seattle Seahawks',
  'St Louis Rams',
  'Tampa Bay Buccaneers',
  'Tennessee Titans',
  'Washington Redskins']

var drafter = new Drafter();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let command = parseCommand(msg.content);

  switch (command) {
    case 'draft': {
      drafter.draft(msg);
      break;
    }
    case 'enddraft': {
      drafter.enddraft(msg);
      break;
    }
    case 'join': {
      drafter.join(msg);
      break;
    }
    case 'summary': {
      drafter.summary(msg);
      break;
    }
    case 'pick': {
      drafter.pick(msg);
      break;
    }
    case 'list': {
      drafter.list(msg);
      break;
    }
    case 'myteam': {
      drafter.myteam(msg);
      break;
    }
    case 'order': {
      drafter.order(msg);
      break;
    }
    case 'picker': {
      drafter.picker(msg);
      break;
    }
    case 'help': {
      drafter.help(msg);
      break;
    }
  }
  
  drafter.runCommand(msg);
});

var parseCommand: (message: string) => string =
  function (message) {
    var command = '';
    var argument = '';
    var commandPattern = /^\.(\w+)( \w+)*/g

    if (message.match(commandPattern) != null) {
      command = message.replace(commandPattern, '$1');
    }

    return command;
  }


client.login(token);