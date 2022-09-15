import { Divider, Skeleton } from '@mui/material';

import { CardBox1, CardBox2, Item } from '../AppCard';

const AppCardSkeleton2 = () => {
  return (
    <Item>
      <CardBox1>
        <Skeleton variant="text" width="50%" height={35} />
        <Skeleton variant="circular" width={35} height={35} />
      </CardBox1>
      <Divider />
      <CardBox2>
        <p>
          <Skeleton variant="text" width="30%" height={20} />
        </p>
        <p>
          <Skeleton variant="text" width="37%" height={20} />
        </p>
        <p>
          <Skeleton variant="text" width="40%" height={20} />
        </p>
      </CardBox2>
    </Item>
  );
};

export default AppCardSkeleton2;
