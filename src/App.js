import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutSection from './components/sections/AboutSection';
import IntroSection from './components/sections/IntroSection';
import Navbar from './layout/Navbar';

function App() {
	return (
		<Router>
		<div className='App'>
			<Navbar />
			
			<Route exact path='/' component={IntroSection}
				onEnter={() => {
					document.getElementById('home').scrollIntoView()
				}}
			/>
			<Route path='/about-us' component={AboutSection}
				onEnter={() => {
					document.getElementById('about-us').scrollIntoView()
				}}
			/>
			<AboutSection/>
		</div>
		</Router>
	);
}

export default App;
