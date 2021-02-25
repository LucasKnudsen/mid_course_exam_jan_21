import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const GHSearch = () => {
  const [searchValue, setSearchValue] = useState()
  const [total_count, setTotalCount] = useState()
  const [items, setItems] = useState()

  const getUserData = async () => {
    let response = await axios.get(`https://api.github.com/search/users?q=${searchValue}`)
    setTotalCount(response.data.total_count)
    let fiveFirst = response.data.items.splice(0,5)
    setItems(fiveFirst)
  }
// response.data.items
  return (
    <>
      <Input onChange={(event) => setSearchValue(event.target.value)} data-cy="search-bar" type="text" name="search" placeholder="Input GH username" />
      <Button onClick={() => getUserData()} data-cy="submit" name="search">Search</Button>
    </>
  )
}

export default GHSearch
