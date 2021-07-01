import React, { useEffect, useState, createContext, useContext } from 'react';
import { firebase } from '../firebase/firebase';
import { useAuthContext } from "./auth-context";

export const CommentsContext = createContext()

export default function CommentsProvider({ children }) {
  const { user } = useAuthContext();
  

  function writeComment(info,id) {
    // console.log(info)
    const comments = firebase.database().ref(`comments/${id}`)
    // .set({
    //   name:info.name,
    //   comment:info.comment,
    //   rating:info.rating

    // })
    const data = {
      name: user.displayName,
      comment: info.comment,
      rating: info.rating
    }
    comments.push(data)
    console.log(`comment added`)
  }

 

  return (
    <CommentsContext.Provider value={{ writeComment}}>
      {children}
    </CommentsContext.Provider>
  )
}
