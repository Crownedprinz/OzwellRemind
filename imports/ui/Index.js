import { Template } from 'meteor/templating';
import './Index.html';
import './authentication/Login.js';
import './ai/ChatBot.js';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.mainContainer.helpers({
    isUserLogged() {
      return isUserLogged();
    },
    getUser() {
      return getUser();
    },
})

Template.mainContainer.events({
    'click .user'() {
      Meteor.logout();
    },
  });