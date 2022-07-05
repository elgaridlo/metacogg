import { teamByTournamentReducer, teamListReducer } from "../Reducers/team.reducer";

export const teamStore = {
    teamList: teamListReducer,
    teamByTournamentID: teamByTournamentReducer
}