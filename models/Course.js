'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    teamID: Number,
    firstName: String,
    playerID: Number,
    lastName: String,
} );

module.exports = mongoose.model( 'players', courseSchema );
