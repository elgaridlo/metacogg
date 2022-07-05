# METACOGG

This project created by Elga Ridlo Sinatriya

## I hope I can pass this test

If you want to see it live go to https://metacogg-wp.herokuapp.com/
If you want to see the repository just go to https://github.com/elgaridlo/metacogg

## Installation

Dillinger requires [Node.js](https://nodejs.org/) 16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
```
to start the server by npm run, but before that maybe do you want to reset the data first. Because I give validation when you filled existing team that alread won the tournament. It will show notification that the team already won the tournament. Or the position has been filled.

```sh
npm run dev
```
#### Delete or Clean Database
To delete database.

```sh
npm run delete
```

#### Store or Fill Database
To Fill Database with required data.
```sh
npm run store
```

or you can manipulate which database data do you want to delete or store by open the folder backend -> dev-data -> storeData.js or deleteData.js
You can comment and uncomment the syntax like

```sh
// await Tournament.create(tournamentData)
```

## Features

- Create Winner Champion
- Validation when the team already be the winner
- Validation when the position has been filled
- Get All Team Member
- Get All Teams and sort by point
- Get All User and sort by coin

If you want to see the url just go to backend folder -> src -> index.routes.js

## Tech

Metacogg uses a number of open source projects to work properly:

- [reactjs](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [Twitter Bootstrap]
- [node.js]
- [Express]
- [mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)


And of course Metacogg App itself is open source with a [public repository](https://github.com/elgaridlo/metacogg)
 on GitHub.

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
