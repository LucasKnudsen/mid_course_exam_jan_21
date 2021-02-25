import React, { useState } from 'react'
import InfoList from './InfoList'
import { Button, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'

const GHSearch = () => {
  const [searchValue, setSearchValue] = useState()
  const [totalCount, setTotalCount] = useState()
  const [items, setItems] = useState([])
  const [errorMessage, setErrorMessage] = useState()

  const getUserData = async () => {
    try {
      let response = await axios.get(`https://api.github.com/search/users?q=${searchValue}`)
      setTotalCount(response.data.total_count)
      let fiveFirst = response.data.items.splice(0, 5)
      setItems(fiveFirst)
    }
    catch (error) {
      setErrorMessage(error.message)
    }
  }
  // response.data.items
  return (
    <>
      <section>
        <Input onChange={(event) => setSearchValue(event.target.value)} data-cy="search-bar" type="text" name="search" placeholder="Input GH username" />
        <Button onClick={() => getUserData()} data-cy="submit" name="search">Search</Button>
      </section>
      {totalCount ? (
        <Segment>
          <InfoList items={items} totalCount={totalCount} />
        </Segment>
      ) : (
          <p data-cy="error-message">{errorMessage}</p>
        )
      }
    </>
  )
}

export default GHSearch
