// Facade implementation

/** A complex system that can be compound of several classes with relations or inheritances between
 * them.
 * Some classes may be visible while some other my be protected or with ilegal access.
 */
const Cpu = function () {
  this.freeze = () => '[CPU] freeze';
  this.jump = () => '[CPU] jump';
  this.excecute = () => '[CPU] excecute';
}

const HardDrive = function () {
  this.read = () => '[HardDrive] read';
  this.write = () => '[HardDrive] write';
}

const Memory = function () {
  this.load = () => '[Memory] load';
}


/** Facade: this class will interact with the complex system elements and will create a simple 
 * interface to be used by a client.
 * This class can additionally implement its own logic while interacting with the complex interfaces.
*/
const ComputerFacade = function() {
  // request all instances the facade will interact to
  const cpu_instance = new Cpu();
  const hard_drive_instance = new HardDrive();
  const memory_instance = new Memory();
  let log = [];

  this.start = () => {
    log.push(cpu_instance.freeze());
    log.push(memory_instance.load());
    log.push(hard_drive_instance.read());
    log.push(hard_drive_instance.write());
    log.push(cpu_instance.jump());
    log.push(cpu_instance.excecute());

    log.forEach(msg => console.log(msg));
  }
}

/** Client: the client can only interact with the facade by using its simpler interface.
 * All the inner procedure implemented by the facade is transparent to the client.
*/
const my_computer = new ComputerFacade();
my_computer.start();
