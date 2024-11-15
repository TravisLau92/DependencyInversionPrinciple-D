// After Dependency Inversion Principle

// Abstract service for notifications
class NotificationService {
  sendMessage(message) {
    // This methos is intended to be overridden by subclasses
    console.log('Sending message: ' + message);
  }
}

// Concrete implementation of NotificationService for SMS
class SMSService extends NotificationService {
  sendMessage(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

// Concrete implementation of NotificationService for email
class EmailService extends NotificationService {
  sendMessage(message) {
    console.log(`Sending email: ${message}`);
  }
}

// High-level module depends on abstraction
class UserService {
  constructor(notificationService) {
    this.notificationService = notificationService; // Dependency Injection
  }

  notifyUser() {
    this.notificationService.sendMessage('Welcome to our service!');
  }
}

// Usage
const emailService = new EmailService();
const userService = new UserService(emailService);
userService.notifyUser(); // Sends email
