/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStore = `subscription OnCreateStore {
  onCreateStore {
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
`;
export const onUpdateStore = `subscription OnUpdateStore {
  onUpdateStore {
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
`;
export const onDeleteStore = `subscription OnDeleteStore {
  onDeleteStore {
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
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
`;
