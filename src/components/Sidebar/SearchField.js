import React from 'react';
import { Input } from 'antd';




const SearchField = props => {

  const { Search } = Input;

  return ( 
    <div>
      <Search placeholder="lets find a note..." loading />
    </div>
   );
}
 
export default SearchField;