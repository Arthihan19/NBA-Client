export interface LeaderboardState {
  leaderBoard: LeaderBoardUser[];
  userPlacing: string;
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
}

export interface LeaderBoardUser {
  username: string;
  currency: string;
  bets_won: number;
  bets_lost: number;
  placing: string;
}
