import React, {PropTypes, Component} from 'react';

class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>{children}</div>
    );
  }
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
