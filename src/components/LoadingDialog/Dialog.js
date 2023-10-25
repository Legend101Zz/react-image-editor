import { LinearProgress, Dialog as MuiDialog } from '@mui/material';

export const Dialog = ({ loading, children, ...props }) => {
  return (
    <MuiDialog {...props}>
      {loading ? <LinearProgress /> : null}
      {children}
    </MuiDialog>
  );
};
