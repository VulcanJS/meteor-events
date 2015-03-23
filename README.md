# meteor-events

Internal event tracking for Meteor apps

**(Note: this package doesn't actually exist yet. This is just the specs/documentation)**

### About

`meteor-events` lets you easily track events in your Meteor app, storing them in an `Events.collection` collection. 

### Install

`meteor add telescope:events`

### Events

Events have the following properties:

- `createdAt` (`Date`): When the event happened.
- `name` (`String`): The event's name.
- `description` (`String`) [optional]: A description of the event.
- `unique` (`Boolean`) [optional]: Whether the event is unique. Unique events can only be logged once. Defaults to `false`. 
- `important` (`Boolean`) [optional]: Whether the event is important. Important events are never deleted. Defaults to `false`.
- `properties` (`Object`) [optional]: The event's properties. 

### Methods

- `Events.track()`: tracks an event. 
- `Events.purge()`: deletes all events from the database, except those marked as `important`. 

### Callbacks

- `Events.onTrack(function (event) {...})`: declare a callback to execute whenever an event is tracked. 
