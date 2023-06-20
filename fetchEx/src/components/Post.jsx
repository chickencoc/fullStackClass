import React from 'react'

const Post = ( props ) => {
    const userId = props.userId;
    const id = props.id;
    const title = props.title;
  return (
    <li key={id}>
        <strong>#{id}</strong>
        <div>пользователь {userId}</div>
        <span>{title}</span>
    </li>
  )
}

export default Post