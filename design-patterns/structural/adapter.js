// Adapter implementation

/** Adaptee classes: */
const Visa = function() {
  this.intlName = 'VISA';
  this.getIntlName = () => this.intlName;

  this.validate_data = () => {
    return 'Credit card data has been validated';
  }
  this.charge_amount = () => {
    return 'Amount has been charged to the transaction process';
  }
  this.validate_seller = () => {
    return 'Seller has been validated'
  }
  this.pay = () => {
    return 'Payment has been accepted!'
  }
}

const MasterCard = function() {
  this.intlName = 'MASTERCARD';
  this.getIntlName = () => this.intlName;

  this.checkInformation = () => {
    return 'Credit card information has been checked';
  }
  this.insertAmount = () => {
    return 'Transaction amount has been inserted';
  }
  this.checkEstablishment = () => {
    return 'Establishment has been checked'
  }
  this.requestBankApproval = () => {
    return 'Bank has approved';
  }
  this.payment = () => {
    return 'Payment transaction approved';
  }
}

const AmEx = function() {
  this.intlName = 'AMEX';
  this.currency = '';
  this.getIntlName = () => this.intlName;

  this.verify_data = () => {
    return 'Credit card data has been verified';
  }
  this.verify_seller = () => {
    return 'Seller has been verified'
  }
  this.set_currency = currency => {
    this.currency = currency;
    return `Currency set to '${currency}'`;
  }
  this.make_pay = amount => {
    return `Payment has been processed (${this.currency} ${amount})`
  }
}

/** Adapter */
const CreditCardAdapter = function (CreditCard) {
  if (!CreditCard) {
    throw new Error('No credit card has been provided');
  }
  const credit_card_name = CreditCard.getIntlName();
  let log = [];

  this.validate_credit_card = () => {
    if (credit_card_name === 'VISA') {
      log.push(CreditCard.validate_data());
    }
    if (credit_card_name === 'MASTERCARD') {
      log.push(CreditCard.checkInformation());
    }
    if (credit_card_name === 'AMEX') {
      log.push(CreditCard.verify_data());
    }
  }

  this.process_payment = (currency, amount) => {
    if (credit_card_name === 'VISA') {
      log.push(CreditCard.charge_amount());
      log.push(CreditCard.validate_seller());
      log.push(CreditCard.pay());
    }
    if (credit_card_name === 'MASTERCARD') {
      log.push(CreditCard.insertAmount());
      log.push(CreditCard.checkEstablishment());
      log.push(CreditCard.requestBankApproval());
      log.push(CreditCard.payment());
    }
    if (credit_card_name === 'AMEX') {
      log.push(CreditCard.verify_seller());
      log.push(CreditCard.set_currency(currency));
      log.push(CreditCard.make_pay(amount));
    }
  }

  this.print_log = () => {
    log.forEach(msg => {
      console.log(`[${credit_card_name}]: ${msg}`);
    });
  }
}

/** Client */

// One of: Visa / MasterCard / AmEx
const creditCardInstance = new MasterCard();

const myCreditCardAdapter = new CreditCardAdapter(creditCardInstance);
myCreditCardAdapter.validate_credit_card();
myCreditCardAdapter.process_payment('USD', 2500);
myCreditCardAdapter.print_log();
