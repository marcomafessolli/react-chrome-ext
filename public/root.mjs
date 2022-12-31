window.initContent = () => {
  const React = window.React || {};
  const ReactDOM = window.ReactDOM || {};

  const e = React.createElement;
  const cr = ReactDOM.createRoot;

  const rootComponent = e(
    "button",
    {
      onClick: () => console.log("Hello world!"),
    },
    "Hi"
  );

  cr(window.document.body).render(rootComponent);
};
