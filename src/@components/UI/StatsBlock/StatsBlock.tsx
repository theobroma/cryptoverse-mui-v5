// https://mui.com/system/getting-started/the-sx-prop/#Example.tsx
import { Box } from '@mui/material';

interface Props {
  title: string;
  value: string | number;
}

const StatsBlock = ({ title, value }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        px: 2,
        py: 4,
        minWidth: '100%',
      }}
    >
      <Box sx={{ color: 'text.primary' }}>{title}</Box>
      <Box sx={{ color: 'secondary.main', fontSize: 34, fontWeight: 'medium' }}>
        {value}
      </Box>
    </Box>
  );
};

export default StatsBlock;
