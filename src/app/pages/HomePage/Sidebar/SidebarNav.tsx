import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonGroup } from '../../../components/ButtonGroup';
import { useThemeSlice } from '../../../../styles/theme/slice';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../../styles/theme/slice/selectors';

export function SidebarNav() {
  useThemeSlice();

  const theme = useSelector(selectTheme);

  return (
    <Wrapper>
      <ButtonGroup
        buttonNames={['Bet slip', 'Pending bets']}
        selectedButtonIndex={0}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
