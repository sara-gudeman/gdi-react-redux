import React from 'react';
import Header from './components/Header.jsx';
import Image from './components/Image.jsx';
import HelloGoodbye from './components/HelloGoodbye.jsx';

const App = () => {
    return (
        <div className="App">
          <Header />
          <HelloGoodbye />
            Hello from the App component!
            <Image url="http://cdn4.list25.com/wp-content/uploads/2013/04/25-10_tn.jpg"/>
            <Image url="http://cdn3.list25.com/wp-content/uploads/2013/04/24-9_tn.jpg"/>
        </div>
    );
};

export default App;