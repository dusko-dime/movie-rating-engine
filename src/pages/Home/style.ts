import styled from 'styled-components';
import { Input, Switch } from 'antd';
import { AppButton } from '../../components/UIComponents/AppButton';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.font};
  height: 100vh;
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const TopMoviesSwitchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const TopMoviesLabel = styled.p`
  font-size: 16px;
  font-style: italic;
  padding-right: 12px;
  margin: 0;
`;

export const TopMoviesSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const SearchInput = styled(Input)`
  &.ant-input {
    width: 70%;
    max-width: 400px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 4px ${({ theme: { colors } }) => colors.primary};
    border: none;

    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export const MoviesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 14px 0;
`;

export const LoadMoreButton = styled(AppButton)``;
