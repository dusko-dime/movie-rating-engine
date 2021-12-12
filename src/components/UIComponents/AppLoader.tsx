import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const AppLoader = () => {
  return <StyledSpin indicator={<StyledLoadingIcon spin />} />;
};

const StyledSpin = styled(Spin)`
  color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledLoadingIcon = styled(LoadingOutlined)`
  font-size: 48px;
`;
