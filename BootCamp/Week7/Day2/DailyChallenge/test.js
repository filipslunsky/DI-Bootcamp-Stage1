const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password:', hashedPassword);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};



const verifyPassword = async (plainPassword, hashedPassword) => {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        if (match) {
            console.log('Password match!');
        } else {
            console.log('Password does not match.');
        }
        return match;
    } catch (error) {
        console.error('Error verifying password:', error);
        throw error;
    }
};


verifyPassword('filip', '$2b$10$4AXh6Rori62dp96CyZNjQuSvfHRPIDrxbEUHgfQq1flR5BMlU0G2e');