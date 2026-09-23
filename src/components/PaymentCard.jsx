import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

function PaymentCard({ payment }) {
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(payment.accountNumber);
      setCopied(true);
      setNotice('Account number copied!');

      window.setTimeout(() => {
        setCopied(false);
        setNotice('');
      }, 2000);
    } catch (error) {
      setNotice('Copy failed. Please try again.');
      window.setTimeout(() => setNotice(''), 2000);
    }
  };

  return (
    <div className="payment-card">
      <div className="payment-header">
        <div className="bank-logo">
          <img src={payment.logo} alt={payment.bank} className="bank-logo-image" />
        </div>
        <div>
          <p className="payment-label">{payment.type === 'mobile' ? 'Mobile Money' : 'Bank'}</p>
          <h3>{payment.bank}</h3>
        </div>
      </div>

      <div className="payment-details">
        <p>
          <span>Account Name:</span> {payment.accountName}
        </p>
        <p>
          <span>{payment.type === 'mobile' ? 'Phone Number:' : 'Account Number:'}</span>{' '}
          {payment.accountNumber}
        </p>
      </div>

      <button type="button" className="copy-btn" onClick={handleCopy}>
        {copied ? (
          <>
            <FaCheck /> Copied
          </>
        ) : (
          <>
            <FaCopy /> Copy
          </>
        )}
      </button>

      {notice && <p className="copy-notice">{notice}</p>}
    </div>
  );
}

export default PaymentCard;
