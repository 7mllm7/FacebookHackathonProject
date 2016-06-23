# Torch
This is our project for 23/6/16 Facebook React Native hackathon

## Team

Moti Lavian
7mllm7@gmail.com
050-6791653

Yaron Levi
yaronlevi02@gmail.com

Gilad
gilad@artzi.me

Boris
boris@dinkevich.com

Vladimir
vnovick@gmail.com

## Idea
Thw world torch is a virtual torch with a geo location.
The users need to pick up and drop the torch to advance to its destination.

## Screens
* Map with torch (single torch)
  * Torch
* List of Runs
* Login

## Assets
* Torch map marker
* App icon
* Launch screen
*

## Definitions
* Torch
  * Name
  * Current location
  * Current `Run`
* User
  * Name
  *
* Runner - a user that commited a run
* Run
  * Torch
  * Runner (User)
  * Origin
  * Destination
  * StartedAt
  * EndedAt
  * [Media]

## Scope
* Backend - Firebase:
  * OAuth
  * DB
* App React Native :):
  *
* Libs:
  * `react-native-maps`
  * `firebase...`

## API
* `/user` POST:
  * Returns `User` (with `userId`).
  * `displayName`
* `/torch` GET:
  * Returns list of `torch`s.
  * `Torch`:
    * `name`
    * `currentLocation` ~ `{longitude: 30.0, latitude: 30.1}`
    * `currentRun` ~ `Run`
* `/torch/:torchId/pickup` POST:
  * Returns `run`.
  * Params:
    * `location`
    * `runner` ~ `userId`
* `/torch/:torchId/drop` POST:
  * Return `torch`.
  * Params:
    * `location`
    * `userId`

## App structure
* `redux`
* TabBarIOS / TabBarAndroid
* Components
  * df
* Reducers
  * Runs
    * `runs`
  * Auth
    * `currentUser`
* Services
  * Backend (Firebase?)
  * Location
  * Auth

## Technical
