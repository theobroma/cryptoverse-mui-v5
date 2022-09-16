import React from 'react';

import MuiLink from '@mui/material/Link';

type Props = {
  href: string;
  icon: React.ReactElement;
};

const SocialLink = ({ href, icon }: Props) => {
  return (
    <MuiLink
      href={href}
      target="_blank"
      sx={{ textDecoration: 'none', cursor: 'pointer', color: 'common.white' }}
    >
      {icon}
    </MuiLink>
  );
};

export default SocialLink;
