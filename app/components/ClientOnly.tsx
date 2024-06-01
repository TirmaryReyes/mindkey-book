import { useState, useEffect, ReactNode, FC } from 'react';
import PropTypes from 'prop-types';

interface ClientOnlyProps {
  children: ReactNode;
}

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

ClientOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientOnly;
