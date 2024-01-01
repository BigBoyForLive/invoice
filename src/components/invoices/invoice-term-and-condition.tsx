import { ChangeEvent, FC } from 'react';

// Base components.
import { Box, EditableText, Typography } from '@/components/base';

// Utilities.
import { createSpacing } from '@/utils/theme';

// Interfaces.
import { useGenerator } from '@/hooks/useGenerator';
import { useInvoice } from '@/hooks';

interface Props {
  terms: string;
}

const InvoiceTermAndConditions: FC<Props> = ({ terms }) => {
  const { editable } = useGenerator();
  const { invoice, setInvoice } = useInvoice();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInvoice({ ...invoice, terms: e.target.value });
  };

  return <Box style={{ width: '100%', height: '200px' }}></Box>;
};

export default InvoiceTermAndConditions;
