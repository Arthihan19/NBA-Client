import { ThemeState } from 'styles/theme/slice/types';
import { UserState } from 'app/Authentication/slice/types';
import { BetState } from 'app/pages/HomePage/slice/types';
import { BetHistoryState } from 'app/pages/BetsPage/slice/types';
import { LeaderboardState } from 'app/pages/LeaderboardPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  user?: UserState;
  bet?: BetState;
  betHistory?: BetHistoryState;
  leaderboard?: LeaderboardState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
