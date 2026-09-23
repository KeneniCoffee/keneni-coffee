import paymentMethods from '../data/paymentData';
import PaymentCard from './PaymentCard';

function Payment() {
  return (
    <section id="payment" className="payment-section section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow dark">Payment information</p>
          <h2 className="section-title">Pay with confidence</h2>
        </div>

        <div className="payment-grid">
          {paymentMethods.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </div>

        <div className="payment-instructions">
          <h3>How to Pay</h3>
          <ol>
            <li>Select your preferred bank or payment method.</li>
            <li>Copy the account number.</li>
            <li>Open your banking or mobile-money application.</li>
            <li>Send the payment.</li>
            <li>Keep your payment receipt.</li>
          </ol>
          <p className="payment-note">Please verify the account name before sending payment.</p>
        </div>
      </div>
    </section>
  );
}

export default Payment;
