import React, { Component } from 'react'
import Form from './Form'
import Posts from './Posts'
import Look from './Look'
import { BrowserRouter,Route,Link ,Switch} from 'react-router-dom'
class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div>
                <header><Link to='/'>BORN TO CODE</Link></header>
                <Switch>
                    <Route exact path='/' component={Posts} />
                    <Route path='/post/new' component={Form} />
                    <Route path='/newpost/:id' component={Form}/>
                    <Route path="/post/:id" component={Look}/>
                </Switch>
            </div>
        </BrowserRouter>
        )
    }
}

export default App;
