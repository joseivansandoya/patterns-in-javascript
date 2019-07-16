// Adapter implementation

/** Adaptee classes: these can be already defined classes that need to be used for one client that
 * has an incompatible interface.
 * For this example the adaptee classes will be different credit card providers (Visa, MasterCard and
 * American Express), each of them can have their propper attributes and methods and don't necessaryly
 * need to be equal between all of them
*/
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

/** Adapter: this class converts the (incompatible) interface of a class (adaptee) into another 
 * interface (target) clients require
 * */
const CreditCardAdapter = function (CreditCard) {
  if (!CreditCard) {
    throw new Error('No credit card has been provided');
  }
  const credit_card_name = CreditCard.getIntlName();
  let log = [];

  /** This class will implement adapter methods that can be used for clients. The responsibility of
   * this class is to validate which adaptee class it is interacting to and to call the corresponding
   * methods of those adaptee classes
   */
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

/** Client: this one can be another class or simple process that is imcompatible in the way of
 * operation with the adaptee classes. Client will make use of the target interface (the one generated
 * by the adapter class) in order to operate with the adaptee ones
 */

// One of: Visa / MasterCard / AmEx
const creditCardInstance = new MasterCard();

const myCreditCardAdapter = new CreditCardAdapter(creditCardInstance);
myCreditCardAdapter.validate_credit_card();
myCreditCardAdapter.process_payment('USD', 2500);
myCreditCardAdapter.print_log();
