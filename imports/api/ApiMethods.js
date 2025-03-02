import { Meteor } from 'meteor/meteor';
import { getCompletion } from '/server/api/ozwell-api-integration/OzwellApi.js';

Meteor.methods({
  'getApiCompletion'(prompt) {
    return getCompletion(prompt);
  },
});