export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    error: string;
    warning: string;
    success: string;
    font: string;
  };
  fontWeights: {
    light: number;
    semiLight: number;
    normal: number;
    semiBold: number;
    bold: number;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#ffe700',
    primaryLight: '#fdeb80',
    primaryDark: '#c7a904',
    error: '#ff0000',
    warning: '#d5c114',
    success: '#08ff00',
    font: '#0e0e0e'
  },
  fontWeights: {
    light: 200,
    semiLight: 300,
    normal: 400,
    semiBold: 600,
    bold: 700
  }
};
