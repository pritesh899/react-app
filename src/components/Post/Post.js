import { Component } from "react";
import SinglePost from "../SinglePost/SinglePost";

class Post extends Component{

    state = {
        posts: [
            {title: 'post 1', description: 'description 1'},
            {title: 'post 2', description: 'description 3'},
            {title: 'post 3', description: 'description 3'}
        ],
        postTitle : 'Posts List',
        showPost : true
    };

    updateTitlehandler() {
        this.setState({
            postTitle: 'updated post title'
        });
    }

    togglePostHandler = () => {
        this.setState({
            showPost : !this.state.showPost
        })
    }

    getPosts(){
        if(!this.state.showPost) return null;

        // let posts = this.state.posts.map((post) => (
        //     <SinglePost 
        //                 title={post.title} 
        //                 description={post.description}/>
        // ));

        let posts = [];

        for (let post of this.state.posts) {
            posts.push(
                <SinglePost 
                    key={post.title} 
                    title={post.title} 
                    description={post.description}/>
            );
        }

        
        return (
            <div className='flex'>
                    {posts}
            </div>
        );
    }

    render(){

        setTimeout( () => {
            const posts = [...this.state.posts];

            posts[0].title = 'modified post data 1';
            posts[1].title = 'modified post data 2'

            this.setState({
                posts,
            });

            this.setState({
                postTitle: 'modified post title'
            });
        }, 3000)

      

        return (
            <div>
                <hr />
                <h2 className='text-2xl font-bold'>{this.state.postTitle}</h2>
                <hr />
                <div>
                    <button onClick={this.updateTitlehandler.bind(this)}>
                        update
                    </button>
                </div>
                <hr />
                <div className='flex'>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description}/>
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description}/>
                </div>

                <hr />
                <h2 className='text-2xl font-bold'>{this.state.postTitle}</h2>
                <hr />
                <div>
                    <button onClick={this.togglePostHandler} className="px-5 py-5 bg-yellow-700 text-white">
                        {this.state.showPost ? 'Hide posts' : 'Show posts'}
                    </button>
                </div>
                <hr />
                {this.getPosts()}
            </div>

            
        )
    }
}

export default Post;