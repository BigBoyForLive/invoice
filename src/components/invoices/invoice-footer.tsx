import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks
import { useGenerator } from '@/hooks/useGenerator';
import palette from '@/config/theme/palette';

interface Props {
  message?: string;
}

const InvoiceFooter: FC<Props> = ({ message }) => {
  const { editable } = useGenerator();

  return <Box></Box>;
};

export default InvoiceFooter;
