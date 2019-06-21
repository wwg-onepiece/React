import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '@/views/detail/Detail';

function DetailApp () {
  return (
    <Switch>
      <Route path = {'/detail/:id'} component = { Detail }/>
    </Switch>
  )
}

export default DetailApp;