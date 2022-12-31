# React Chrome Extension Starter

This starter project is designed to help you get started building Chrome extensions using TypeScript and React. 
It includes tools like [Vite](https://vitejs.com/) and [crjsx](https://github.com/skpm/crjsx) to make development a breeze.

## Prerequisites

Before you get started, make sure you have the following tools installed on your machine:

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)

## Getting Started

To get started, follow these steps:

1. Clone this repository using git:

```bash
git clone https://github.com/marcomafessolli/react-chrome-ext.git
```

Alternatively, you can use [degit](https://github.com/Rich-Harris/degit) to clone the repository:
```bash
pnpx degit https://github.com/marcomafessolli/react-chrome-ext.git
```

2. Navigate to the root directory of the project:

```bash
cd react-chrome-ext
```

3. Install the project dependencies using your package manager of choice (I prefer [pnpm](https://pnpm.js.org/)):

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

This will start the Vite dev server and you can start modifying the code in the `src` directory. Any changes you make will be automatically reflected in the extension, thanks to hot module replacement (HMR).

## Testing the Built Extension

While the development server is running, it will also generate a `dist` directory containing the built extension. You can use this built extension to test the extension in a separate window or in Incognito mode by following these steps:

1. Go to `chrome://extensions` in your Chrome browser.
2. Enable the "Developer mode" toggle in the top right corner.
3. Click the "Load unpacked" button.
4. Navigate to the `dist` directory and select it.

This will load the built extension as an unpacked extension in Chrome, allowing you to test it without having to constantly rebuild it while developing.

## Keeping the Extension Open

By default, Chrome will automatically close an extension's popup when it loses focus. To keep the extension's popup open while you are working on it, you can inspect the popup using the Chrome Developer Tools.

To do this, right-click the extension's icon and select "Inspect popup". This will open the Developer Tools panel and keep the extension's popup open. You can then make changes to the code and see the changes live in the extension's popup.

Keep in mind that this only works while the development server is running. If you stop the development server or close the extension's popup, you will need to follow these steps again to inspect the popup.

---

_This README.md written by Assistant._

_Seriously, have you ever tried writing a README with Assistant's help?_ 

<img src="https://api.countapi.xyz/hit/mmafessolli-github/react-browser-ext?img">