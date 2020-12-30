import React from 'react';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import İletisim from './pages/İletisim';
import Hizmetlerimiz from './pages/Hizmetlerimiz';

import Error from './pages/Error';

function App() {
	return (
		<>
			<Navbars />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/hizmetlerimiz" component={Hizmetlerimiz} />
				<Route exact path="/iletisim" component={İletisim} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
