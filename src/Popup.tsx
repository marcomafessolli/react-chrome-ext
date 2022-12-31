import reactLogo from "./images/react.svg";
import { executeScript } from "./utils/scripting";

function Popup() {
  return (
    <div className="w-80 h-80 items-center justify-center flex flex-col bg-gray-500 text-white text-center">
      <h1 className="text-3xl font-bold">React Chrome Extension Starter</h1>
      <img
        src={chrome.runtime.getURL(reactLogo)}
        alt=""
        className="w-6/12 mt-4"
      />
      <button
        onClick={async () => {
          await executeScript();
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Popup;
