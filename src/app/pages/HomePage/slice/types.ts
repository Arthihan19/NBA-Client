/* --- STATE --- */
export interface BetState {
  schedule: BetStateScheduleItem[];
  betSlip: BetSlipItem[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  beforeDate: string | null;
  afterDate: string | null;
  teamName: string | null;
}

export interface BetSlipItem extends BetStateScheduleItem {
  betAmount: string;
  betTeamId: string;
}

export interface BetStateScheduleItem {
  id: string;
  teamOne: string;
  teamOneId: string;
  teamOneOdds: string;
  teamTwo: string;
  teamTwoId: string;
  teamTwoOdds: string;
  matchDate: string;
}
