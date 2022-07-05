const dotenv = require('dotenv');
const path = require('path');
const convertCsv = require('../utils/csvConvert');
const User = require('../src/users/user.model');
const connectionDB = require('../config/connectionDB');
const Tournament = require('../src/tournament/tournament.model');
const TeamMember = require('../src/team-members/teamMembers.model');
const Team = require('../src/teams/team.model');

dotenv.config()

connectionDB()

// console.log('path = ', path.resolve(__dirname, 'users-data.csv'))
const storeData = async () => {
    const userData = await convertCsv(path.resolve(__dirname, 'users-data.csv'))
    const tournamentData = await convertCsv(path.resolve(__dirname, 'tournament-data.csv'))
    const teamMemberData = await convertCsv(path.resolve(__dirname, 'teams-member-data.csv'))
    const teamData = await convertCsv(path.resolve(__dirname, 'teams-data.csv'))
    
    try {
        await User.create(userData)
        await Tournament.create(tournamentData)
        await TeamMember.create(teamMemberData)
        await Team.create(teamData)
        console.log('Store to database sucessfull');
    } catch (error) {
        console.log('error store data to db = ', error);
    }
    process.exit();
}

module.exports = {storeData}