import React from 'react';
function fn (user) {
  return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname: 'wang',
  lastname: 'wg'
}

const Com = <div>hello, { fn(user) }</div>

export default Com;