const { Schema, model } = require('mongoose');

const karmaPostSchema = new Schema({
  postTitle: {
    type: String,
    required: 'You need to write a title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postDescription: {
    type: String,
    required: 'You need to write a description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // Note from Ryan: I don't know if we need a postAuthor since karmaposts belong to individual users already. We just need to make sure when a user creates a post that the current user's username is added to the front end card that displays that post
  // postAuthor: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },  
  // postAuthor: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },  
  postValue: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
    createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  karmaHelpers: [
    {
      helperUsername: {
        type: String,
        required: true,
        trim: true,
      },
      // Note from Ryan: commented this out because I don't know that we can easily update the karma and it would become inaccurate if the user karma changed while they were still helping
      // helperKarma: {
      //   type: Number,
      //   required: true,
      // },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],

});

const KarmaPost = model('KarmaPosts', karmaPostSchema);

module.exports = KarmaPost;