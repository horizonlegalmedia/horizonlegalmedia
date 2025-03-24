import mongoose from 'mongoose';

const contentBlockSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['paragraph', 'list'],
      required: true
    },
    text: {
      type: String,
      validate: {
        validator: function(value) {
          return this.type === 'paragraph' ? !!value : !value;  
        },
        message: props => `Text must be provided only when type is 'paragraph'`
      }
    },
    items: {
      type: [{
        name: { type: String, required: true },
        description: { type: String, required: true }
      }],
      validate: {
        validator: function(value) {
          return this.type === 'list' ? value.length > 0 : value.length === 0;
        },
        message: props => `Items must be provided only when type is 'list'`
      }
    }
  });

const detailSchema = new mongoose.Schema({
  title: String,
  contentBlocks: [contentBlockSchema]
});

const articleSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
      url: { type: String, required: true }, 
      publicId: { type: String, required: true }, 
      alt: { type: String, default: "Image" }  
    },
    title: {
        type: String,
        required: true
    },
    introductoryPara: String,
    details: [detailSchema],
    conclusion: String,
    publishedDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true,
        validate: [tags => tags.length > 0, 'At least one tag is required.']
    },
}, { timestamps: true });



export default mongoose.model('Article', articleSchema);