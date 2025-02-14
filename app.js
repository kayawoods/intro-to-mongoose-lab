const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Customer = require('./customer');
// const prompt = require('prompt-sync')()

// const welcome = prompt('Welcome to the CRM\n1. Create a customer\n2. View all customers\n3. Update a customer\n4. Delete a customer\n5. quit')

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  await runQueries();

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  process.exit()


}
const runQueries = async () => {
  console.log('Queries running.')
  await findCustomers(); 
  await createCustomer()
};

connect()

const createCustomer = async () => {
  const customerData = {
      name: 'Kaya', age: 100, 
      name:'Santa', age: 101,
  }

  const customer = await Customer.create(customerData);   
  console.log('New customer;', customer); 
}

const findCustomers = async () => {
const customers = await Customer.find({}); 
console.log('All customers:', customers); 
}