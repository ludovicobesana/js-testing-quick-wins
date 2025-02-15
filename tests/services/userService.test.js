const { getUserData } = require('src/services/userService');

describe('User Service', () => {
  const mockUser = { id: '123', name: 'Alice', email: 'alice@example.com' };

  test('should retrieve user data by ID', () => {
    expect(getUserData(mockUser.id)).toEqual(mockUser);
  });

  test('should return null for non-existing user', () => {
    expect(getUserData('999')).toBeNull();
  });
});
