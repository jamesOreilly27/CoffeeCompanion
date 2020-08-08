const { GraphQLInt, GraphQLString } = require('graphql')
const { NoteType } = require('./ObjectTypes')
const { Note } = require('../../db/models')

const createNoteResolver = (parent, args) => {
  return Note.create(args)
  .then(note => note)
  .catch(err => console.log(err))
}

const updateNoteResolver = (parent, { id, subject, text }) => {
  return Note.findByPk(id)
  .then(note => note.update({ subject, text }))
  .catch(err => console.log(err))
}

const createNote = {
  type: NoteType,
  desctription: 'create a note',
  args: {
    bidId: { type: GraphQLInt },
    subject: { type: GraphQLString },
    text: { type: GraphQLString }
  },
  resolve: createNoteResolver
}

const updateNote = {
  type: NoteType,
  description: 'update a note',
  args: {
    id: { type: GraphQLInt },
    subject: { type: GraphQLString },
    text: { type: GraphQLString }
  },
  resolve: updateNoteResolver
}

module.exports = {
  createNote,
  updateNote
}

