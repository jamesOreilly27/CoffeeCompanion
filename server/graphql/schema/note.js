const { GraphQLInt, GraphQLString } = require('graphql')
const { BidType, BidAreaType, AreaProductType, NoteType} = require('./ObjectTypes')
const { Note } = require('../../db/models')

const createNoteResolver = (parent, args) => {
  return Note.create(args)
  .then(note => note)
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

module.exports = {
  createNote
}

