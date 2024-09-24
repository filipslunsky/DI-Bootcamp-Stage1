import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError = (error) => {
        return {hasError: true, error: error};
    };

    componentDidCatch = (error, errorInfo) => {
        this.setState({hasError: true});
        console.log('error=>',error);
        console.log('errorInfo=>',errorInfo);
        
    };

    render() {
        if (this.state.hasError) return <h2>Houston, we have a problem!!!</h2>;
        return this.props.children;
    }
};

export default ErrorBoundary;