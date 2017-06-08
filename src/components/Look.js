import React from 'react'
import axios from 'axios'
class Look extends React.Component {
    constructor(){
        super()
        this.state={
            post:{}
        }
    }
    componentDidMount(){
        axios.get(`http://express-api.haoqicat.com${this.props.match.url}`).then(res=> this.setState({post:res.data.post}))
    }
    render(){
        console.log(this.props.match.url);
        return(
            <div style={{position: 'relative', width: '100%', minHeight: '200px', maxWidth: '600px', margin: '30px auto', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '5px', padding: '16px', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px'}}>
                <div style={{position: 'absolute', top: '0px', right: '0px', padding: '4px 6px', color: 'rgb(255, 255, 255)', fontSize: '0.8em', backgroundColor: 'rgb(237, 90, 90)'}}>{this.state.post.category}</div>
                <div style={{fontSize: '1.3em', paddingTop: '10px', paddingBottom: '20px', textAlign: 'center'}}>{this.state.post.title}</div>
                <div style={{fontSize: '1em', color: 'rgba(0, 0, 0, 0.8)'}}>{this.state.post.content}</div>
            </div>
        )
    }
}
export default Look
