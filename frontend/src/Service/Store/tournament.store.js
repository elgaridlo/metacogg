import { createdTournamentResultReducer, tournamentListReducer } from "../Reducers/tournament.reducer";

export const tournamentStore = {
    tournamentList: tournamentListReducer,
    createTournament: createdTournamentResultReducer
}