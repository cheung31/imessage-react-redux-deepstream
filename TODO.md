# TODO

* Deploy to AWS via Elastic Beanstalk and a Mongo instance

## Tooling
* Test suite
* Linting
* Continuous Integration

## Client side
* Mobile friendly/responsive web application
* Typing indicator
* Message status (delivered / read)
* Time stamp indicators
* Consecutive messages within minute are tightly bunched.
* Groups within hour have timestamp heading
* Last message in bunch has tick
* Support Unicode 8.0 to allow emojis
* Handle delivered acknowledgement
* Handle read receipt
* Direct manipulation pan to reveal timestamps

## Server side
* paginated history via minimal rest api
* Persist to data store and add caching (e.g. Redis integration to Deepstream.io) instead of default in-memory storage
