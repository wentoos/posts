
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Posts extends Component {
    constructor() {
        super()
        this.state={
            posts:[]
        }
    }
    componentWillMount(){
        axios.get(`http://express-api.haoqicat.com/posts`).then(res=>this.setState({posts:res.data.posts})).catch(err => console.log('AXJX 请求错误',err))
    }
    render() {
        return (
            <div>
                <div className='go-post'>
                    <Link to='post/new'>写文章</Link>
                </div>
                <div className='posts'>
                    {
                        this.state.posts.map(item=>
                            <div key={item._id}>
                                <div className='title'>{item.title}</div>
                                <div className='control'>
                                    <Link to={`post/${item._id}`} >查看</Link>
                                    <Link to={`newpost/${item._id}`}>编辑</Link>
                                    <a>删除</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Posts;
