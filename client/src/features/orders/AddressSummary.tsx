import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { Order } from '../../app/models/order';

interface Props {
  order: Order;
}

export default function AddressSummary({ order }: Props) {
  const { shippingAddress } = order;
  return (
    <>
      <TableContainer component={Paper} variant={'outlined'}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Address 1</TableCell>
              <TableCell align='right'>{shippingAddress.address1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Address 2</TableCell>
              <TableCell align='right'>{shippingAddress.address2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>City, State</TableCell>
              <TableCell align='right'>
                {shippingAddress.city}, {shippingAddress.state}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>ZIP, Country</TableCell>
              <TableCell align='right'>
                {shippingAddress.zip}, {shippingAddress.country}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
