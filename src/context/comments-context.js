import React, { useEffect, useState, createContext, useContext } from 'react';
import { firebase } from '../firebase/firebase';

import React from 'react'

export const CommentsContext = createContext()

export default function CommentsProvider({ children }) {


    function writeComment(comment) {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }

    return (
        <CommentsContext.Provider value={writeComment}>
            {children}
        </CommentsContext.Provider>
    )
}
