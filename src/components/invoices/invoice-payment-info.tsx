import { ChangeEvent, FC } from 'react';

// Base components.
import { Box, EditableText, Typography } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils';
import { useInvoice } from '@/hooks';
import { IInvoicePaymentInfo } from '@/interfaces/invoice';

// Styles.
const lineStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' };

interface Props {
  paymentInfo: IInvoicePaymentInfo;
}

const InvoicePaymentInfo: FC<Props> = ({ paymentInfo }) => {
  const { editable } = useGenerator();
  const { invoice, setInvoice } = useInvoice();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInvoice({
      ...invoice,
      paymentInfo: {
        ...invoice.paymentInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Box style={{ marginTop: '16px', width: '95%' }}>
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'La Direction Generale :'}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'Essi Sylviane Catherine'}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'La Gérante'}
      </Typography>
    </Box>
  );
};

export default InvoicePaymentInfo;
