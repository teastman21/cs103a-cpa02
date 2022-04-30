'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    firstName: String,
    lastName: String,
    playerID: Number,
    teamID: Number,
} );

module.exports = mongoose.model( 'Course', courseSchema );
