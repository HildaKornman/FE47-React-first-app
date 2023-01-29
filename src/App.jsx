import './App.css';

//in solution staat volgende regel ipv bovenste die erin moet volgens oefenimg maar werkt niet; beide geven 
//lege pagina en in console: not found main.jsx
//import React from 'react';

function App( ) {
  const greeting = 'Welcome to my cool new app';
  const description = <p>This app is going to change your life</p>;

	return (
		<div className="App">
        <h1>Welcome!</h1>
        <p>{greeting}</p>
        {description}
    </div>
	);
}

export default App;