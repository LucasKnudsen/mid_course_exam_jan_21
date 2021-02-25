import React from 'react'
import { Item, Segment } from 'semantic-ui-react'

const InfoList = ({ items, totalCount }) => {

  const infoList = items.map((item, i) => {
    return (
      <Segment>
        <Item key={i} data-cy={`user-${i}`} >
          <Item.Content>
            <Item.Meta data-cy="login">User: {item.login}</Item.Meta>
            <Item.Meta data-cy="user-id">User Id: {item.id}</Item.Meta>
            <Item.Meta >
              <a data-cy="repos" href={item.repos_url} target="_blank">Link to repos</a>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Segment>
    )
  })
  return (
    <div>
      <h4 data-cy="total-count" >Total hits: {totalCount}</h4>
      <Item.Group data-cy="info-list">
        {infoList}
      </Item.Group>

    </div>
  )
}

export default InfoList
