const users = {
  123: { id: "123", name: "Alice", email: "alice@example.com" },
  456: { id: "456", name: "Bob", email: "bob@example.com" },
};

function getUserData(userId) {
  return users[userId] || null;
}

module.exports = { getUserData };
