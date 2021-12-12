import React, { ReactNode } from 'react';
import { AppButton } from '../UIComponents/AppButton';
import { ErrorContainer } from './style';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError)
      return (
        <ErrorContainer>
          <h1>Something went wrong!</h1>
          <AppButton
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
          >
            Go Back
          </AppButton>
        </ErrorContainer>
      );

    return this.props.children;
  }
}
