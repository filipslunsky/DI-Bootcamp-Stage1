import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }; 
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    this.setState({ hasError: true });
    console.log("error=>", error);
    console.log("errorInfo=>", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Something went terribly wrong</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo ? this.state.errorInfo.componentStack : "No stack trace available"}
          </details>
        </>
      );
    }

    return this.props.children;
  }

}

export default ErrorBoundary;
