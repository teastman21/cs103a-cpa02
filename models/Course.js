'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    firstName: Mixed,
    lastName: Mixed,
    playerID: Mixed,
    teamID: Mixed,
} );

module.exports = mongoose.model( 'Course', courseSchema );
