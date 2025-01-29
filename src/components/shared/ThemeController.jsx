import { useEffect, useState } from "react";

const ThemeController = () => {
    
    const [currentTheme, setCurrentTheme] = useState('light');

    const storedTheme = localStorage.getItem('theme');

    useEffect(() => {
        if (storedTheme!=='') {
            setCurrentTheme(storedTheme);
        } else {
            setCurrentTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }, [storedTheme]);


    const handleChange = () => {
        if (currentTheme === 'light') {
            setCurrentTheme('night');
            localStorage.setItem('theme', 'night');
        } else if(currentTheme === 'night') {
            setCurrentTheme('light');
            localStorage.setItem('theme', 'light');
        } else{
            setCurrentTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }
    return (
        <div>
            <label className="toggle text-base-content">
                {/* <input type="checkbox" value={currentTheme} onChange={handleChange} className="theme-controller" /> */}

                <input 
                    type="checkbox" 
                    value={currentTheme}
                    checked={currentTheme === 'night'} 
                    onChange={handleChange} 
                    className="theme-controller" 
                />
                <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </g>
                </svg>

                <input type="checkbox" value="light" className="theme-controller" />
                <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </g>
                </svg>
            </label>
        </div>
    );
};

export default ThemeController;
