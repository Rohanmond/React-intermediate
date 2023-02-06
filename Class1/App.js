const heading = React.createElement(
  'h1',
  {
    style: {
      fontSize: '20px',
    },
  },
  'Hello World!'
);

const heading2 = React.createElement(
  'h1',
  {
    style: {
      fontSize: '30px',
    },
  },
  'Hello World!'
);

const Container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
//passing a react element inside the root
root.render(Container);
