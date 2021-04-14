import React from 'react';
import './App.css';
import Home from './components/Home';
import List from './components/List';
import Search from './components/Search';

class App extends React.Component{
  state={
    curmenu: "Home",
    mainComp: {
      Home: (<Home />),
      List: (<List />),
      Search: (<Search />)
    }
  };
  
  Menus = () => {
    return ["Home","List", "Search"].map(function(menu, index){
      return (<li key={index} onClick={()=>{
        this.setState({curmenu:menu})
      }}>{menu}</li>)
    });
  }
  componentDidMount(){
    this.Menus();
  }
  render(){
    const {curmenu, mainComp} = this.state
    const Menus = this.Menus()
    return (
      <div className="App">
        <header>
          <h1>tistory</h1>
          <ul>
            {Menus}
          </ul>
        </header>
        <main>
          {mainComp[curmenu]}
        </main>
      </div>
    )
  }
}

export default App;
