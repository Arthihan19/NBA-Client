interface BetHistoryItem {
  id: string;
  dateTimeOfMatch: string;
  teamOneName: string;
  teamTwoName: string;
  teamOneImage: string;
  teamTwoImage: string;
  teamOneOdds: string;
  teamTwoOdds: string;
  teamSelected: string;
  amountBet: string;
  status: 'Won' | 'Lost' | 'Pending';
}
