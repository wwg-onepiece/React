import React from 'react';
import { Link } from 'react-router-dom';

// const Com = (props) => (
//   <ul className = "prolist">
//     {
//       props.prolist.map(item => (
//         <li key = { item.id }>{ item.title }</li>
//       ))
//     }
//   </ul>
// )

const Com = ({ prolist }) =>(
  <ul className = "prolist">
    {
      prolist.map(item => (
        <li key = { item.id }>
          <Link to = { "/detail/" + item.id}>
            { item.title }
          </Link>
        </li>
      ))
    }
  </ul>
)

export default Com;