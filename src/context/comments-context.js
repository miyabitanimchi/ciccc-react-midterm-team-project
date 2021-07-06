import React, { useEffect, useState, createContext, useContext } from 'react';
import { firebase } from '../firebase/firebase';
import { useAuthContext } from "./auth-context";

export const CommentsContext = createContext()

export default function CommentsProvider({ children }) {
  const { user } = useAuthContext();
  const [readProductId, setReadProductId] = useState()
  const [productComments, setProductComments] = useState([])

  console.log(readProductId)

  function writeComment(info, id) {

    const comments = firebase.database().ref(`comments/${id}`)
 
    const data = {
      name: user.displayName,
      comment: info.comment,
      rating: info.rating,
      postDate: info.postDate
    }
    comments.push(data)
    console.log(`comment added`)
  }

  function readComment(id) {
    const starCountRef = firebase.database().ref(`comments/${id}`);
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      
      const dataList = []
      for(let id in data){
        dataList.push(data[id])
      }
      dataList.reverse()
      // console.log(data)
      setProductComments(dataList)
    });
  }


  console.log(productComments)

  useEffect(() => {
    readComment(readProductId)

  }, [readProductId])


  return (
    <CommentsContext.Provider value={{ writeComment, setReadProductId,productComments,readProductId }}>
      {children}
    </CommentsContext.Provider>
  )
}
