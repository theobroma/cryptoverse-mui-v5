// OLD. NOT USED. Example from MUI V4
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  icon?: React.ReactElement;
  text: string;
}

// export const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     // Applied to the SideBar link when "associated page" is selected
//     linkActiveClass: {
//       color: theme.palette.secondary.main,
//       '& .MuiSvgIcon-root': {
//         color: theme.palette.secondary.main,
//       },
//     },
//   }),
// );

export const SideBarLink: React.FC<Props> = ({ icon, to, text }) => {
  //   const classes = useStyles();
  return (
    <ListItem
      button
      //   exact
      key={`${text}-${to}`}
      component={NavLink}
      to={to}
      // activeClassName={classes.linkActiveClass}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default SideBarLink;
