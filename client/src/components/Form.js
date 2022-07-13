import { Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActivity } from '../actions/activities';

const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    name: '',
    description: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createActivity(postData));
  };
  const clear = () => {};
  return (
    <Paper>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>Create an Activity</Typography>
        <TextField name='name' variant='outlined' label='name' fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}></TextField>
        <TextField name='description' variant='outlined' label='description' fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}></TextField>
        {/* <TextField name='timeSpent' variant='outlined' label='timeSpent' fullWidth value={postData.timeSpent} onChange={(e) => setPostData({ ...postData, timeSpent: e.target.value })}></TextField> */}
        {/* <FormControlLabel control={<Checkbox name='isCompleted' variant='outlined' fullWidth value={postData.isCompleted} onChange={(e) => setPostData({ ...postData, isCompleted: e.target.value })} />} label='Completed' /> */}
        <Button variant='contained' color='primary' size='large' type='submit' fullWidth>
          Create
        </Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} type='submit' fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
