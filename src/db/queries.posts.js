const Post = require("./models").Post;
const Topic = require("./models").Topic;

module.exports = {
  addPost(newPost, callback) {
    return Post.create(newPost)
    .then((post) => {
      callback(null,post);
    }).catch((err) => {
      callback(err);
    })
  },

  getPost(id, callback) {
    return Post.findById(id)
    .then((post) => {
      callback(null, post);
    }).catch((err) => {
      callback(err);
    })
  },
  
  deletePost(id, callback) {
    return Post.destroy({
      where: {id}
    }).then((deletedRecordsCount) => {
      callback(null, deletedRecordsCount);
    }).catch((err) => {
      console.log(err);
    })
  },

  updatePost(id, updatePost, callback) {
    return Post.findById(id)
    .then((post) => {
      if(!post) {
        return callback("Post not found");
      }

      post.update(updatePost, {
        fields: Object.keys(updatePost)
      }).then(() => {
        callback(null, post);
      }).catch((err) => {
        callback(err);
      });
    });
  }
}