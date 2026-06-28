import { it, expect, describe, vi, beforeEach } from 'vitest'
import { render, screen} from '@testing-library/react'
import { PaymentSummary } from './PaymentSummary';
import { MemoryRouter, useLocation} from 'react-router';
import userEvent from '@testing-library/user-event';
import axios from 'axios'

vi.mock('axios');

describe("payment-summary-test-suite", () => {
  let paymentSummary;
  let loadCart;
  let user;
  beforeEach(() => {
    paymentSummary = {
      "totalItems": 6,
      "productCostCents": 11565,
      "shippingCostCents": 499,
      "totalCostBeforeTaxCents": 12064,
      "taxCents": 1206,
      "totalCostCents": 13270
    };
    loadCart = vi.fn();
    user= userEvent.setup();
  });

  it('checks for correct dollar amount in payment summary rows', () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(
      screen.getByTestId('payment-summary-products-cost')
    ).toHaveTextContent('$115.65');

    expect(
      screen.getByTestId('payment-summary-shipping')
    ).toHaveTextContent('$4.99');

    expect(
      screen.getByTestId('payment-summary-before-tax')
    ).toHaveTextContent('$120.64');

    expect(
      screen.getByTestId('payment-summary-estimated-tax')
    ).toHaveTextContent('$12.06');

    expect(
      screen.getByTestId('payment-summary-order-total')
    ).toHaveTextContent('$132.70');

  });

  it('checks the place order button', async () => {

    function Location (){
      const Location = useLocation();
      return (
        <div data-testid="url-path">{Location.pathname}</div>
      )
    }
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        <Location/>
      </MemoryRouter>
    );

    const clearButton = screen.getByTestId('create-order-button');
    await user.click(clearButton);

    expect(axios.post).toHaveBeenCalledWith('/api/orders');
    expect(loadCart).toHaveBeenCalled();

    expect(
      screen.getByTestId('url-path')
    ).toHaveTextContent('/orders')
    



  })
})
