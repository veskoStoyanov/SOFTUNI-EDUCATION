const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    content: { type: mongoose.Schema.Types.String, required: true },
    isLocked: { type: mongoose.Schema.Types.Boolean, default: false },
    edits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Edit' }],
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;