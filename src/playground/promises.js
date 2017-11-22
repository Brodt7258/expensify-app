const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved data');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
});

console.log('after');

//Firebase stuff

//const expensesFixture = [
  //   {
  //     description: 'gas',
  //     note: '',
  //     amount: 1500,
  //     createdAt: 0
  //   },{
  //     description: 'monster',
  //     note: '',
  //     amount: 249,
  //     createdAt: 2000000
  //   },{
  //     description: 'food',
  //     note: '',
  //     amount: 2500,
  //     createdAt: 3000000
  //   }
  // ];
  
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // })
  
  // // database.ref('expenses')
  // //   .on('value', (snapshot) => {
  // //     const expenses = [];
  // //     snapshot.forEach((snap) => {
  // //       expenses.push({
  // //         id: snap.key,
  // //         ...snap.val()
  // //       });
  // //     });
  // //     console.log(expenses);
  // //   });
  
  // // expenses.forEach((expense) => {
  // //   database.ref('expenses').push(expense);
  // // });
  
  // // database.ref().on('value', (snapshot) => {
  // //   const val = snapshot.val();
  // //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // // }, (e) => console.log('some error dun did happen', e));
  
  // // database.ref()
  // //   .once('value')
  // //   .then((snapshot) => {
  // //     const val = snapshot.val();
  // //     console.log(val);
  // //   }).catch((e) => {
  // //     console.log('Error or something', e)
  // //   });
  
  // // database.ref().set({
  // //   name: 'Tim',
  // //   age: 40440404040,
  // //   job: {
  // //     title: 'Dev',
  // //     company: 'Derp'
  // //   },
  // //   stressLevel: 14,
  // //   location: {
  // //     city: 'weha',
  // //     country: 'usa'
  // //   }
  // // }).then(() => {
  // //   console.log('data saved');
  // // }).catch((e) => {
  // //   console.log('This failed.', e);
  // // });
  
  // // database.ref().update({
  // //   stressLevel: 9,
  // //   'job/company': 'Less derp?',
  // //   'location/city': 'Boston'
  // // });
  
  // // database.ref('/isTired')
  // //   .remove()
  // //   .then(() => {
  // //     console.log('data removed');
  // //   }).catch((e) => {
  // //     console.log('failed to remove data', e);
  // //   });