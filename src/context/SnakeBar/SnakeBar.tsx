import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';

interface SnakeBarContextType {
  handleErrorSnakeBar: (message: string) => void,
  handleSuccessSnakeBar: (message: string) => void
}

interface SnackBarProviderProps {
  children: React.ReactNode;
}

const SnakeBarContext = React.createContext<SnakeBarContextType | null>(null);

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="fille  d" {...props} />;
});

const SnakeBarProvider: React.FC<SnackBarProviderProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messageType, setMessageType] = React.useState('info');

  const handleErrorSnakeBar = (message: string) => {
    setMessage(message);
    setMessageType('error');
    setOpen(true);
  }

  const handleSuccessSnakeBar = (message: string) => {
    setMessage(message);
    setMessageType('success');
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setMessageType('info')
  }


  return (
    <SnakeBarContext.Provider value={{ handleErrorSnakeBar, handleSuccessSnakeBar }}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={messageType}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnakeBarContext.Provider>
  )
}

const useSnakeBar = () => {
  const context = React.useContext(SnakeBarContext);

  if (context == null) {
    throw new Error('useSnackBar must be used within an SnackBarProvider Component');
  }

  return context;
}

export { SnakeBarProvider, useSnakeBar, SnakeBarContext }