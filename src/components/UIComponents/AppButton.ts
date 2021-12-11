import styled from 'styled-components';
import {Button} from 'antd';

export const AppButton = styled(Button)`
    &.ant-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${({theme: {colors}}) => colors.primary};
        box-shadow: 0 0 5px #00000066;
        color: #000;
        border-radius: 60px;
        background: ${({theme: {colors}}) => colors.primary};
        min-width: 96px;
        min-height: 33px;
        height: 30px;
        font-size: 14px;
        margin: 0 auto;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                    border 500ms cubic-bezier(0.6, 0, 0.4, 1.5) 0ms;
        
        &:active, &:hover, &:focus {
            color: #6a6a6a;
            border: 1px solid ${({theme: {colors}}) => colors.primary};
            box-shadow: 0 0 10px ${({theme: {colors}}) => colors.primaryDark};
        }
        
        &[disabled], &[disabled]:hover, &[disabled]:focus, &[disabled]:active {
            color: rgba(0, 0, 0, 0.25);
            background: #f5f5f5;
            border-color: #d9d9d9;
            text-shadow: none;
            box-shadow: none;
            cursor: default;
        }
  }
`;
