/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = `mutation CreateStore($input: CreateStoreInput!) {
  createStore(input: $input) {
    id
    name
    type
    repo
    author
    maintainer
    returnType
    description
    params
    deployedServer
    status
    comments {
      items {
        id
        name
        content
      }
      nextToken
    }
  }
}
`
export const updateStore = `mutation UpdateStore($input: UpdateStoreInput!) {
  updateStore(input: $input) {
    id
    name
    type
    repo
    author
    maintainer
    returnType
    description
    params
    deployedServer
    status
    comments {
      items {
        id
        name
        content
      }
      nextToken
    }
  }
}
`
export const deleteStore = `mutation DeleteStore($input: DeleteStoreInput!) {
  deleteStore(input: $input) {
    id
    name
    type
    repo
    author
    maintainer
    returnType
    description
    params
    deployedServer
    status
    comments {
      items {
        id
        name
        content
      }
      nextToken
    }
  }
}
`
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    name
    content
  }
}
`
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    name
    content
    post {
      id
      name
      type
      repo
      author
      maintainer
      returnType
      description
      params
      deployedServer
      status
      comments {
        nextToken
      }
    }
  }
}
`
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    name
    content
    post {
      id
      name
      type
      repo
      author
      maintainer
      returnType
      description
      params
      deployedServer
      status
      comments {
        nextToken
      }
    }
  }
}
`
