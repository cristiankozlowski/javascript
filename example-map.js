// const usersList = [
//     {name: 'Cristian', username: 'cristiankozlowski'}
// ];

// const newUser = {name: 'Cristian', username: 'cristiankozlowski'};
// const hasUser = usersList.find(user => {
//     return user.username == newUser.username
// });

// if(!hasUser) 
//     usersList.push(newUser);

const usersList = new Map();

usersList.set(
    'ckozlowski',
    {name: 'Cristian', username: 'cristiankozlowski'}
);
usersList.set(
    'cristiankozlowski',
    {name: 'Cristian', username: 'cristiankozlowski'}
);

console.log(usersList);