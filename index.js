const {Command } = require("commander");
const contacts = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>","choose action: list, get -i, add -n -e -p, remove -i")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: refactorizar
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        contacts.listContacts();// ...
      break;

    case "get":
        contacts.getContactById(id);// ... id
      break;

    case "add":
        contacts.addContact(name, email, phone);// ... name email phone
      break;

    case "remove":
        contacts.removeContact(id);// ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);