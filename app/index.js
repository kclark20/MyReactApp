import React from ('react');
import ReactDOM from ('react-dom');
import App from ('./components/App');

class Board extends React.Component {
    renderSquare(i) {
        return <Square value = {i} />;
    }
}

class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={function() { alert('click'); }}>
          {this.props.value}
        </button>
      );  }
  }


ReactDOM.render(
    <App />,
    document.getElementById('app'));
