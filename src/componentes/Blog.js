import React from 'react';
import posts from './../data/posts';

const Blog = () => {
    return (  
        <div>
                  <h2>Blog</h2>
                  <ul>
                    {posts.map((post) => {
                        return(

                            <li>{post.titulo}</li>
                        )
                    })}
                  </ul>
                </div>
    );
}
 
export default Blog;