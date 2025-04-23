import React, {useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const[blogPost,setBlogPost]=useState([
    {title:'React Native'},{title:'JavaScript'},
  ])
  const addBlogPost=()=>{
    setBlogPost([...blogPost])
  }
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};
// veriler getirildi.
export default BlogContext;
