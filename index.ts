//from is used to convert other types into Observables
//e.g It can convert an array into an Observable -> from([A,B,C])
//also used to create an observable from Promise -> from(Promise)

import { from } from 'rxjs';

// from(['Alice', 'Ben', 'Charlie']).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

const somePromise = new Promise((resolve, reject) => {
  // resolve('Resolved');
  reject('Rejected!');
});

const observableFromPromise$ = from(somePromise);
observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
  error: (err) => console.log('Error:', err),
});
