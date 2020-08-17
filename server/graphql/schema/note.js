const { GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql')
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

const deleteNoteResolver = (parent, { id }) => {
  Note.findByPk(id)
  .then(note => note.destroy())
  .catch(err => console.log(err))

  return true
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

const deleteNote = {
  type: GraphQLBoolean,
  description: 'delete a note',
  args: {
    id: { type: GraphQLInt }
  },
  resolve: deleteNoteResolver
}

module.exports = {
  createNote,
  updateNote,
  deleteNote
}

