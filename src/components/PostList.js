import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import User from './User';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        if (!this.props.posts) return <h1>Loading ...</h1>

        return (
            <div className="ui relaxed divided list">
                {this.props.posts.map(post => (
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon user" />
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            <User userId={post.userId}/>
                        </div>                                           
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }    
}

export default connect(mapStateToProps, { fetchPosts })(PostList)