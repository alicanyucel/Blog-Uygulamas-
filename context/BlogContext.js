import React, { useState, useReducer } from 'react';

const BlogContext = React.createContext();
const blogreducer=(state,action)=>{
  switch(action.type)
  {
    case 'add_blogpost':
    return[...state,{title:'Angular'}];
    default:return state
  }
};

export const BlogProvider = ({ children }) => {

  const [blogPost,dispatch]=useReducer(blogreducer,[
    {title:'React Native'},
    {title:'Javascript'},
  ]);
  const addBlogPost = () => {
   dispatch({type:'add_blogpost'});
  };
  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
