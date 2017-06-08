import React, { Component } from 'react'
import axios from 'axios'
class Form extends Component {
    constructor(){
        super()
        this.submitPosts=this.submitPosts.bind(this)
        this.state={
            catch:true,
            oldPost:{},
            category:'',
            title:'',
            content:''

        }
    }
    componentWillMount(){
        if(this.props.match.url === '/post/new'){
            this.setState({catch:true})
            console.log('aa');
        }else {
            this.setState({catch:false})
            axios.get(`http://express-api.haoqicat.com/${this.props.match.url.slice(4)}`).then(res=>this.setState({
                category:res.data.post.category,
                title:res.data.post.title,
                content:res.data.post.content
            }))

        }
    }
    submitPosts(e){
        e.preventDefault()
        let category = this.category.value
        let title = this.title.value
        let content = this.content.value
        axios.post(`http://express-api.haoqicat.com/post`,{category,title,content}).then(this.props.history.push('/'))
    }
    bandleCategory(e){
        this.setState({category : this.category.value})
    }
    bandleTitle(e){
        this.setState({title : this.title.value})
    }
    bandleContent(e){
        this.setState({content : this.content.value})
    }

    render() {
        return (
            <div className="Form">
                <div style={{fontSize: '1.2em',textAlign: 'center',paddingTop: '20px'}}>{this.state.catch? '写文章' : '编辑文章'}</div>
                <form style={{padding:'20px 40px'}} onSubmit={this.submitPosts}>
                    <div>
                        <label>分类
                            <input ref={category=>this.category=category} value={this.state.category} name='category' onChange={this.bandleCategory.bind(this)}/>
                        </label>
                    </div>
                    <div>
                        <label>标题
                            <input ref={title=>this.title=title} value={this.state.title} onChange={this.bandleTitle.bind(this)}/>
                        </label>
                    </div>
                    <div>
                        <label>内容
                            <textarea ref={content=>this.content=content} value={this.state.content} onChange={this.bandleContent.bind(this)}></textarea>
                        </label>
                    </div>
                    <div>
                        <button>{this.state.catch? '发布文章' : '编辑文章'}</button>
                        <a>取消</a>
                    </div>
                </form>
            </div>
        )
  }
}

export default Form;
