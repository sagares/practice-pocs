import React from "react";

interface ErrorBoundaryProps {

}

interface ErrorBoundaryState {
    hasError: boolean;
    errorInfo: any;
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        hasError: true,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here

      console.info("error thrown");
    }
    
    render() {
      if(this.state.hasError) {
          return <h1>Something went wrong</h1>
      }
      return this.props.children;
    }  
  }