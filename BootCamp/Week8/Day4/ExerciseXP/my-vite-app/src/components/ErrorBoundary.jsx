import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }; 
    };
    
      componentDidCatch = (error, errorInfo) => {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
        this.setState({ hasError: true });
      };
    
      render() {
        if (this.state.hasError) return <h1>An error has occured.</h1>;
        return this.props.children;
      }
}
 
export default ErrorBoundary;