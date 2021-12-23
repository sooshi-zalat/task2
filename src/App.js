import "./style.css";
import './App.css';
import ButtonOne from "./components/ButtonOne";
import MenuOne from './components/MenuOne';
import MenuTwo from "./components/MenuTwo";
import React, {Component} from 'react';


class App extends Component {
    
    getInitialState() {
        return {
          isMouseInside: false
        };
      }
      mouseEnter = () => {
        this.setState({ isMouseInside: true });
      }
      mouseLeave = () => {
        this.setState({ isMouseInside: false });
      }

    render() {
        return (
            <div>

            
                
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
            <ButtonOne/>
            

            { this.state.isMouseInside? <MenuOne/> : <MenuTwo/>}

            {/* if i want do as video i will write

         { this.state.isMouseInside? <MenuTwo/> : null} */}
            </div>


          
        


         
            </div>
        )
    }

    state = {
        contacts: [], 
        photos:[]
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)

            fetch('http://jsonplaceholder.typicode.com/photos/?_limit=5')
            .then(res => res.json())
            .then((data) => {
                this.setState({ photos: data })
            })
            .catch(console.log)
    }
}

export default App;