import React, { useState } from 'react';

const THEME_LIGHT_HEX = '#E2E8F0';
const THEME_DARK_HEX = '#1A202C';
const THEME_HIGHLIGHT_HEX = '#319795';
const THEME_KEY = 'THEME';

// Save the chosen theme to web storage
function SaveSettings(value) {
    window.localStorage.setItem(THEME_KEY, value);
}
  
// Get the saved theme from web storage
function GetSettings() {
    // Return the saved theme if a theme has been saved.
    // If no theme has been saved, default to the light theme.
    return window.localStorage.getItem(THEME_KEY) ?? THEME_LIGHT_HEX; 
}

function App() {   
    // When we load the site, we attempt to get the saved theme from web storage. 
    const [theme, setTheme] = useState(GetSettings);

    return (
        <div style={{display: 'flex', textAlign: 'center', fontFamily: 'sans-serif'}}>
            <div style={{backgroundColor: THEME_LIGHT_HEX, height: '100px', width: '100px', padding: '2px'}}>
                Light
            </div>
            <div style={{backgroundColor: THEME_DARK_HEX, height: '100px', width: '100px', padding: '2px', color: THEME_LIGHT_HEX}}>
                Dark
            </div>
            <div style={{backgroundColor: THEME_HIGHLIGHT_HEX, height: '100px', width: '100px', padding: '2px', color: THEME_LIGHT_HEX}}>
                Highlight
            </div>
        </div>
  );
}

export default App;
