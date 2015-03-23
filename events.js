Events = new Mongo.Collection('events');

var callbacks = {};

Events.track = function(event) {
  check(event, {
    createdAt: Match.Optional(Date),
    name: String,
    description: Match.Optional(String),
    unique: Match.Optional(Boolean),
    uniquePerUser: Match.Optional(Boolean),
    important: Match.Optional(Boolean),
    log: Match.Optional(Boolean),
    type: String,
    userId: Match.Optional(String),
    properties: Match.Optional(Object)
  });

  event.log = event.log || true;
  event.createdAt = event.createdAt || new Date();

  if (Meteor.isClient) {
    if (! _.isUndefined(Meteor.userId) && Meteor.userId())
      event.userId = Meteor.userId();
  }

  if (_.isArray(callbacks[event.name]))
    _.each(callbacks[event.name], function(cb) {
      cb(event);
    });

  console.log(event);
};

if (Meteor.isServer) {
  Events.purge = function() {
    Events.remove({ important: { $ne: true }});
  };
}

Events.onTrack = function(name, callback) {
  if (! _.isArray(callbacks[name]))
    callbacks[name] = [];

  callbacks[name].push(callback);
};
