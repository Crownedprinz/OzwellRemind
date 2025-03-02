import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Login.html';
import '../ai-integration/ChatBot.js';

Template.login.events({
  'submit .login-form'(event) {
    console.log('login-form');
    event.preventDefault();

    const { target } = event;

    const username = target.username.value;
    const password = target.password.value;

    Meteor.loginWithPassword(username, password);
  },
});