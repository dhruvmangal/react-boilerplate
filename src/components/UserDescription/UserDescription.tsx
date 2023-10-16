import * as React from 'react';
import * as _ from 'lodash';
import { Avatar, Card, Typography, Button } from '@mui/material';
import { useGetUserDetails } from '../../react-query/queries/userDetailsQuery';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import { LoaderContext } from '../../context/loader/Loader';
import { useSnakeBar } from '../../context/SnakeBar/SnakeBar';
import { GITHUB_PROFILE_PATH } from '../../utils/constants';
import './UserDescription.styles.scss';
import { UserData } from '../Search/Search.types';

interface UserProp {
  userDetail: UserData,
  clearSelected: ()=>void
}

const UserDescription: React.FC<UserProp> = (props) => {
  const { userDetail, clearSelected } = props;
  const { data, isLoading, isSuccess, isError } = useGetUserDetails(userDetail.login);
  const context = React.useContext(LoaderContext);
  const { handleErrorSnakeBar } = useSnakeBar();

  React.useEffect(() => {
    if (isLoading) {
      context?.setLoaderVisibility(true);
    }
  }, [isLoading])

  React.useEffect(() => {
    if (isSuccess || isError) {
      context?.setLoaderVisibility(false)
    }
  }, [isSuccess, isError])

  React.useEffect(() => {
    if (isError) {
      handleErrorSnakeBar('Something went wrong !!')
    }
  }, [isError])

  return (
    <Card className='user-details-card'>
      <CloseIcon className='user-details-close-icon' onClick={clearSelected}/>
      <Avatar
        className='user-details-avatar'
        src={userDetail?.avatar_url}
        sx={{ width: 100, height: 100 }}
      />
      <Typography variant='h5' className='user-details-title'>
        {_.get(data, 'data.name', null)}
      </Typography>
      <Typography variant='h6' className='user-details-bio'>
        {_.get(data, 'data.bio', null)}
      </Typography>
      <Typography>
        {`Followers ${_.get(data, 'data.followers', null)}   Following ${_.get(data, 'data.following', null)}`}
      </Typography>
      <Typography className="user-details-location">
        <LocationOnIcon className='user-details-location-icon'/>
        {_.get(data, "data.location", null) || 'Not Specified'}
      </Typography>
      <a href={_.get(data, 'data.html_url', null)}>
        <Button variant="contained" className='user-github-button'>
          {GITHUB_PROFILE_PATH}
        </Button>
      </a>
    </Card>
  )
}

export default UserDescription;