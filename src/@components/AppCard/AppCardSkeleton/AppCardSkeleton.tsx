import { Box, Skeleton } from '@mui/material';

const AppCardSkeleton = () => {
  return (
    <Box pt={0.5}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="circular" width={35} height={35} />
      </Box>

      <Skeleton variant="rectangular" width="100%" height={135} />
    </Box>
  );
};

export default AppCardSkeleton;
