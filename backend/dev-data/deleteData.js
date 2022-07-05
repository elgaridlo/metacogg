const dotenv = require('dotenv');
const User = require('../src/users/user.model');
const connectionDB = require('../config/connectionDB');
const Team = require('../src/teams/team.model');
const TeamMember = require('../src/team-members/teamMembers.model');
const Tournament = require('../src/tournament/tournament.model');
const TournamentResult = require('../src/tournament-result/tournament-result.model');

dotenv.config()

connectionDB()

// console.log('path = ', path.resolve(__dirname, 'users-data.csv'))
const deleteData = async () => {
    try {
      await User.deleteMany();
      await Team.deleteMany();
      await TeamMember.deleteMany();
      await Tournament.deleteMany();
      await TournamentResult.deleteMany();
      console.log('data successfuly delete!');
    } catch (error) {
      console.log('error import db = ', error);
    }
    process.exit();
  };

module.exports = {deleteData}