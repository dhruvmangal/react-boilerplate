import * as React from 'react';
import { Card, Avatar, Typography } from '@mui/material';
import type { UserData } from '../Search/Search.types';
import './UserCard.styles.scss';

interface UserCardPropType {
  user: UserData,
  setSelectedUser: (arg: UserData) => void
}

const UserCard = (props: UserCardPropType) => {
  const {user, setSelectedUser} = props;

  return (
    <Card className='search-card' onClick={() => setSelectedUser(user)}>
      <Avatar className='search-card-avatar' src={user.avatar_url} />
      <Typography className='search-card-title'>
        {user.login}
      </Typography>
    </Card>
  )
}

export default UserCard;