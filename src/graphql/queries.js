/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStoreComment = `query GetStore($id: ID!) {
  getStore(id: $id) {
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
export const listStores = `query ListStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`
