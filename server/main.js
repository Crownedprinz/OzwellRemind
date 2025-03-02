import { Meteor } from 'meteor/meteor';

const SEED_USERNAME = 'myuser';
const SEED_PASSWORD = 'mypassword';

Meteor.startup(async () => {
  let user = await Accounts.findUserByUsername(SEED_USERNAME);
  if (!user) {
    Accounts.createUserAsync({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
