import React from 'react'
import error from './error.svg'
import { ErrorBox,ErrorImg,ErrorMess,Box} from './styles';

function Error() {
  return (
    <Box>
    <ErrorBox>
      <ErrorImg  src={error}/>

      <ErrorMess>somthing went wron try agin</ErrorMess>

    </ErrorBox></Box>
  )
}

export default Error