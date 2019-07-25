// Dependency injection implementation

/** Dependency: this can be any class defined or imported at some point of the program 
 * execution. It can be an entyre program or just a simple method
*/
const Printer = function (serie) {
  this.serie = serie;
  this.print = () => console.log(`[${this.serie}] is now printing...`);
}


/** Client: this segment of the progam will use the dependency above declared or imported.
 * It normally will require the usage of the dependency in order to complete it execution.
 * If no dependency provided then an error may occur.
*/
const TextEditor = function () {
  this.printer = null;
  this.setPrinter = printer => this.printer = printer;
  this.printDocument = () => {
    if (this.printer) {
      this.printer.print();
    }
    else {
      console.log('Error: No printer is defined');
    }
  }
}

// Instantiate a new printer
const l210 = new Printer('Epson L210');
// Instantiate a new text editor
const word = new TextEditor();
word.setPrinter(l210);
word.printDocument();

// Now imagine that because of testing purposes you need to mock the 'Printer' dependency
const mocked_printer = {
  serie: 'Mocked printer',
  print: () => console.log('[Mocked printer] is printing...')
}
// You can now use the mocked printer dependency
word.setPrinter(mocked_printer);
word.printDocument();
