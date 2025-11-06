import React from "react";
import * as S from "./ErrorBoundary.styled";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <S.ErrorWrapper>
          <h2>Something went wrong.</h2>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </S.ErrorWrapper>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
