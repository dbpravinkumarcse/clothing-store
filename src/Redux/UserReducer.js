import React from 'react'

const initialstate = {
    currentuser : null
}


const UserReducer = (state=initialstate,action) => {
  switch(action.type){
      case "SET_USER":
            return {
                ...state,
                currentuser : action.payload
            }
        default:
            return state;       
  }

}

export default UserReducer