import React, { useEffect } from 'react';
import './index.css';

const THEME_LIGHT_HEX = '#E2E8F0';
const THEME_DARK_HEX = '#1A202C';
const THEME_HIGHLIGHT_HEX = '#319795';
const THEME_KEY = 'THEME';

const THEMES = {
    Light: THEME_LIGHT_HEX,
    Dark: THEME_DARK_HEX
};

// Save the chosen theme to web storage
function SaveSettings(value) {    
    window.localStorage.setItem(THEME_KEY, value);
}
  
// Get the saved theme from web storage
function GetSettings() {
    // Return the saved theme if a theme has been saved.
    // If no theme has been saved, default to the light theme.
    return window.localStorage.getItem(THEME_KEY) ?? THEMES.Light; 
}

function App() {   
    // When we load the site, we attempt to get the saved theme from web storage. 
    useEffect(() => {
        applyTheme(GetSettings());
    });

    function applyTheme(theme) {
        // set the body background color to the theme passed in.
        document.body.style.backgroundColor = theme;
        // set the text color to the opposite theme of the one passed in.
        document.body.style.color = theme === THEMES.Dark ? THEMES.Light : THEMES.Dark;
        SaveSettings(theme);
    }

    return (
        <div>                        
            This is an example of how we can set themes using React.            
            <div className='button-holder'>
                <div className='theme-button-dark' onClick={() => applyTheme(THEMES.Dark)}>Dark</div>
                <div className='theme-button-light' onClick={() => applyTheme(THEMES.Light)}>Light</div>
            </div>            
        </div>
  );
}

export default App;
