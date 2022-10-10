import sdk from '@stackblitz/sdk';
// Import stylesheets
import './style.css';

// This opens https://stackblitz.com/edit/css-custom-prop-color-values
// in the current window
function openEngineBlockProject() {
  sdk.openProjectId('css-custom-prop-color-values', {
    clickToLoad: true,
    // devToolsHeight & hideDevTools are only available for EngineBlock
    devToolsHeight: 30,
    hideDevTools: false,
    hideExplorer: false,
    newWindow: false,
    openFile: 'index.html',
    showSidebar: true,
    theme: 'light',
    view: 'default',
  });
}

function openWebContainersProject() {
  sdk.openProjectId('http-server', {
    clickToLoad: false,
    hideDevTools: false,
    hideExplorer: false,
    newWindow: false,
    openFile: 'server.js',
    showSidebar: true,
    // terminalHeight is only available for WebCotaniners
    terminalHeight: 50,
    theme: 'dark',
    view: 'editor',
  });
}

const engineBlockButton = document.getElementById('open-eb-button');
engineBlockButton.addEventListener('click', openEngineBlockProject);

const webContainersButton = document.getElementById('open-wc-button');
webContainersButton.addEventListener('click', openWebContainersProject);
