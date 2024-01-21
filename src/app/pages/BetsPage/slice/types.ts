export interface BetHistoryState {
  betHistory: BetHistoryItem[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  beforeDate: string | null;
  afterDate: string | null;
  state: string | null;
}

export interface BetHistoryItem {
  id: string;
  teamOne: string;
  teamOneId: string;
  teamOneOdds: string;
  teamTwo: string;
  teamTwoId: string;
  teamTwoOdds: string;
  matchDate: string;
  betAmount: string;
  betTeamId: string;
  state: string;
}
