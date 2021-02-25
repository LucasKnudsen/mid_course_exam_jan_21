import React, {useState} from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const GHSearch = () => {
  const [searchValue, setSearchValue] = useState()


  return (
    <>
      <Input onChange={(event) => {setSearchValue(event.target.value)}} data-cy="search-bar" type="text" name="search" placeholder="Input GH username"/>
      <Button data-cy="submit" name="search">Search</Button>
    </>
  )
}

export default GHSearch
