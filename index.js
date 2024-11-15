// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

// Before Dependency Inversion Principle
class EmailService {
  sendEmail(message) {
    console.log(`Sending email: ${message}`);
  }
}

class UserService {
  constructor() {
    this.emailService = new EmailService(); // Direct dependency
  }

  notifyUser() {
    this.emailService.sendEmail('Welcome to our service!');
  }
}

// Usage
const userService = new UserService();
userService.notifyUser();







// Good Example: Following Dependency Inversion Principle

// Abstraction: Database interface
class Database {
  saveData(data) {
    throw new Error("Method 'saveData()' must be implemented.");
  }
}

// Concrete implementation of Database for MongoDB
class MongoDatabase extends Database {
  saveData(data) {
    console.log('Saving data to MongoDB:', data);
    // Logic to save data in MongoDB
  }
}

// Concrete implementation of Database for SQL
class SQLDatabase extends Database {
  saveData(data) {
    console.log('Saving data to SQL Database:', data);
    // Logic to save data in SQL Database
  }
}

// High-level module depends on abstraction
class UserService {
  constructor(db) {
    this.db = db; // Dependency injection of a Database implementation
  }

  saveUser(user) {
    this.db.saveData(user);
  }
}

// Usage
const mongoDb = new MongoDatabase();
const userServiceWithMongo = new UserService(mongoDb);
userServiceWithMongo.saveUser({ name: 'John Doe', email: 'john@example.com' });

const sqlDb = new SQLDatabase();
const userServiceWithSQL = new UserService(sqlDb);
userServiceWithSQL.saveUser({ name: 'Jane Doe', email: 'jane@example.com' });
