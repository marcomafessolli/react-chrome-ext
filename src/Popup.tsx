import reactLogo from "./images/react.svg";

function Popup() {
  return (
    <>
      <h3>React Chrome Extension Starter</h3>
      <img src={chrome.runtime.getURL(reactLogo)} alt="" />
    </>
  );
}

export default Popup;
