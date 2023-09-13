import axios from 'axios';
import { addRecords } from '../../Service/api'; // Replace 'yourModule' with the actual path to your module

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = "http://localhost:8080/record";
const ItemUrl = "http://localhost:8080/info";

// Mock Axios to control its behavior
jest.mock('axios');

describe('addRecords function', () => {
  it('should make a POST request to add a record', async () => {
    // Mock Axios.post to simulate a successful POST request
    axios.post.mockResolvedValueOnce({ data: 'Your response data here' });

    // Data to be sent with the POST request
    const user = {
        cat : 'cat',
        desc: 'desc'
    };

    // Call the addRecords function
    const response = await addRecords(user);

    // Assert that Axios.post was called with the correct URL and data
    expect(axios.post).toHaveBeenCalledWith(`${usersUrl}/add`, user);

    // Assert that the response matches the expected data (based on your mocked response)
    expect(response).toEqual({ data: 'Your response data here' });
  });

  it('should handle a failed POST request', async () => {
    // Mock Axios.post to simulate a failed POST request
    axios.post.mockRejectedValueOnce(new Error('Request failed'));

    // Data to be sent with the POST request
    const user = {
      // Your user data here
    };

    // Call the addRecords function
    try {
      await addRecords(user);
    } catch (error) {
      // Assert that Axios.post was called with the correct URL and data
      expect(axios.post).toHaveBeenCalledWith(`${usersUrl}/add`, user);

      // Assert that the error message matches the expected error message
      expect(error.message).toBe('Request failed');
    }
  });
});
