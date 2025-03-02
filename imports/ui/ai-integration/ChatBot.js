import './ChatBot.html';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

Session.setDefault('userText', 'Response will appear here');

Template.userprompt.events({
  'submit .botform'(event) {
    event.preventDefault();
    const text = event.target.text.value;
    
    Meteor.call('getApiCompletion', text, (error, res) => {
      if (error) {
        console.error('API call error:', error);
        Session.set('userText', 'Error fetching response');
        return;
      }
      
      if (res && res.choices && res.choices.length > 0 && res.choices[0].message) {
        const content = res.choices[0].message.content;
        Session.set('userText', content || 'No response');
      } else {
        Session.set('userText', 'No valid response from API');
      }
    });
    
    event.target.text.value = '';
  },
});

Template.chatbot.helpers({
  getText() {
    return Session.get('userText');
  },
});
