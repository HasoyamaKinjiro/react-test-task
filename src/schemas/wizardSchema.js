export const wizardRules = {
    name: [
        { required: true, message: "Name is required" },
        { min: 2, message: "At least 2 characters" },
    ],
    email: [
        { required: true, message: "Email is required" },
        { type: "email", message: "Invalid email format" },
    ],
    country: [
        { required: true, message: "Please select a country" },
    ],
    age: [
        { required: true, message: "Age is required" },
        { type: "number", min: 18, max: 100, message: "Age must be between 18 and 100" },
    ],
};
