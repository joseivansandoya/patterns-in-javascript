// Mediator implementation

/** Colleague: this class will be instantiated for some colleagues that will need to communicate
 * between them but they don't care how to do this because a mediator class will be responsible for
 * that procedure.
 */
const Device = function (name) {
  this.name = name;
  this.bus = null;

  /** some device complex logic implemented here ...
   * ...
   * ...
   */

  this.sendMessage = null;
  this.receiveMessage = null;
}

/** Mediator: this class will be responsible for defining the way how concrete colleagues will
 * communicate between them. This class is overriding the sendMessage and receiveMessage
 * colleagues methods.
 */
const Bus = function () {
  this.devices = [];
  this.register = device => {
    this.devices.push(device);
    device.bus = this;
    device.sendMessage = handleSendMessage(device);
    device.receiveMessage = handleReceiveMessage(device);
  }
  // Communication handlers
  const handleSendMessage = sender => (message, receiver) => {
    const sender_name = sender.name;
    if (receiver) {
      // peer to peer message
      receiver.receiveMessage(sender_name, message);
    } else {
      // broadcast message
      this.devices.forEach(receiver_device => {
        receiver_device.receiveMessage(sender_name, message);
      })
    }
  }
  const handleReceiveMessage = device => (from, message) => {
    console.log(`From: ${from} // To: ${device.name}\n[${message}]\n`);
  }
}

// Instantiation of some concrete colleagues
const cpu = new Device('CPU');
const memory = new Device('Memory');
const disk = new Device('Disk');
const printer = new Device('Printer');

// Instantiation of concrete mediator
const system_bus = new Bus();

/** By using mediator register method, the different colleagues will know how to communicate
 * between them
 */
system_bus.register(cpu);
system_bus.register(memory);
system_bus.register(disk);
system_bus.register(printer);

// Interactions between concrete colleagues
cpu.sendMessage('Testing connection with this device');
cpu.sendMessage('Load operating system', memory);
memory.sendMessage('Store file permanently', disk);
disk.sendMessage('File stored successfully', memory);
memory.sendMessage('Request file print permission', cpu);
cpu.sendMessage('File print authorized', memory);
memory.sendMessage('Print file', printer);
printer.sendMessage('File printed successfully', memory);
