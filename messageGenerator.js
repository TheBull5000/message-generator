// Random Message Generator

// Data structure to store the message components
const messageData = {
    quotes: [
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "Success is not the key to happiness. Happiness is the key to success."
    ],
    activities: [
        "Take a 10-minute walk.",
        "Write down three things you're grateful for.",
        "Call a friend and tell them something nice."
    ],
    affirmations: [
        "You are capable of amazing things.",
        "Your potential is limitless.",
        "Every day is a new beginning."
    ]
};

// Function to get a random element from an array
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

// Function to generate a random message
const generateMessage = () => {
    const quote = getRandomElement(messageData.quotes);
    const activity = getRandomElement(messageData.activities);
    const affirmation = getRandomElement(messageData.affirmations);

    return `🌟 Here's your inspiration for the day! 🌟\n\n"${quote}"\n\n💡 Activity: ${activity}\n💬 Affirmation: ${affirmation}`;
};

// Generate and print the message
console.log(generateMessage());
  