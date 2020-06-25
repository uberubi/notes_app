import React from 'react';
import { Input } from 'antd';

const NotesField = props => {

  const { TextArea } = Input;

  return ( 
    <>
      <TextArea rows={10} style={{'height': '100%', 'resize': 'none'}}/>
    </>
   );
}
 
export default NotesField;

