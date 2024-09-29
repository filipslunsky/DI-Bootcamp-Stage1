import './App.css'
import React from "react";
import { ThemeProvider, useTheme } from './components/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
      {/* Other components here */}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
