import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

const preventHorizontalKeyboardNavigation = (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
};

const LeftBar = () => {
  return (
    <Box flex={1} p={2} sx={{ height: 300 }}>
      <Typography textAlign='left' mb={2} variant='h6'>
        Adjust your reward
      </Typography>

      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        alignItems='center'
        orientation='vertical'
        defaultValue={30}
        aria-label='Reward'
        valueLabelDisplay='auto'
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
};

export default LeftBar;
