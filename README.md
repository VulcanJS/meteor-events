# meteor-events

Internal event tracking for Meteor apps

**(Note: this package doesn't actually exist yet. This is just the specs/documentation)**

### About

`meteor-events` lets you easily track events in your Meteor app, storing them in an `Events.collection` collection. 

### Install

`meteor add telescope:events`

### Events

Events have the following properties:

- `createdAt` (`Date`): When the event happened. Defaults to the current timestamp.
- `name` (`String`): The event's name.
- `description` (`String`) [optional]: A description of the event.
- `unique` (`Boolean`) [optional]: Whether the event is unique. Unique events can only be logged once. Defaults to `false`. 
- `uniquePerUser` (`Boolean`) [optional]:  Whether the event is unique *per user*. Unique events can only be logged once per user. Defaults to `false`. 
- `important` (`Boolean`) [optional]: Whether the event is important. Important events are never deleted. Defaults to `false`.
- `type` (`String`): `client` or `server`. 
- `userId` (`String`) [optional]: The `_id` of the user triggering the event, if available. Required if `uniquePerUser` is `true`. 
- `properties` (`Object`) [optional]: The event's properties. 

On the client, `userId` will default to `Meteor.userId()`. On the server, it needs to be specified. 

### Methods

- `Events.track()` (Client/Server): tracks an event. 
- `Events.purge()` (Server): deletes all events from the database, except those marked as `important`. 

### Callbacks

- `Events.onTrack(function (event) {...})`: declare a callback to execute whenever an event is tracked. 

### Example

```js
Events.track({
  name: 'signedUp',
  uniquePerUser: true,
  userId: Meteor.user(),
  properties: {
    plan: 'Premium', 
    ip: '123.456.789.123'
  }
})
```
