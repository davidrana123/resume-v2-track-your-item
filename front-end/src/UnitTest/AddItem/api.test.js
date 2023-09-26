import axios from "axios";
import { getRecords, addRecords, deleteRecord, editRecords, getRecordById } from "../../Service/api";

// Mock Axios using jest.mock
jest.mock("axios");

describe("getRecords", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it("should fetch records with an optional ID", async () => {
    // Mock the axios.get function to return a response
    axios.get.mockResolvedValue({ data: "mocked data" });
  
    // Call the getRecords function
    const result = await getRecords("123");
  
    // Assert that axios.get was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/record/123");
  
    // Assert that the function returned the expected data object
    expect(result).toEqual({ data: "mocked data" }); // Use an object here
  });
});


describe("addRecords", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it("should make a POST request to add a record", async () => {
    // Mock the axios.post function to return a response
    axios.post.mockResolvedValue({ data: "mocked response" });

    // Define a user object to pass to the function
    const user = { name: "John Doe", age: 30 };

    // Call the addRecords function
    const result = await addRecords(user);

    // Assert that axios.post was called with the correct URL and data
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8080/record/add",
      user
    );

    // Assert that the function returned the expected response data
    expect(result).toEqual({ data: "mocked response" });
  });

  it("should handle errors", async () => {
    // Mock the axios.post function to throw an error
    axios.post.mockRejectedValue(new Error("Request failed"));

    // Define a user object to pass to the function
    const user = { name: "John Doe", age: 30 };

    // Call the addRecords function
    try {
      await addRecords(user);
    } catch (error) {
      // Assert that axios.post was called with the correct URL and data
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8080/record/add",
        user
      );

      // Assert that the function correctly propagates the error
      expect(error.message).toEqual("Request failed");
    }
  });
});


describe("deleteRecord", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it("should make a DELETE request to delete a record", async () => {
    // Mock the axios.delete function to return a response
    axios.delete.mockResolvedValue({ data: "mocked response" });

    // Define an ID to pass to the function
    const id = "123";

    // Call the deleteRecord function
    const result = await deleteRecord(id);

    // Assert that axios.delete was called with the correct URL
    expect(axios.delete).toHaveBeenCalledWith(
      `http://localhost:8080/record/${id}`
    );

    // Assert that the function returned the expected response data
    expect(result).toEqual({ data: "mocked response" });
  });

  it("should handle errors", async () => {
    // Mock the axios.delete function to throw an error
    axios.delete.mockRejectedValue(new Error("Request failed"));

    // Define an ID to pass to the function
    const id = "123";

    // Call the deleteRecord function
    try {
      await deleteRecord(id);
    } catch (error) {
      // Assert that axios.delete was called with the correct URL
      expect(axios.delete).toHaveBeenCalledWith(
        `http://localhost:8080/record/${id}`
      );

      // Assert that the function correctly propagates the error
      expect(error.message).toEqual("Request failed");
    }
  });
});

describe("editRecords", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it("should make a PUT request to edit a record", async () => {
    // Mock the axios.put function to return a response
    axios.put.mockResolvedValue({ data: "mocked response" });

    // Define an ID and user object to pass to the function
    const id = "123";
    const user = { name: "Updated User", age: 35 };

    // Call the editRecords function
    const result = await editRecords(id, user);

    // Assert that axios.put was called with the correct URL and data
    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:8080/record/${id}`,
      user
    );

    // Assert that the function returned the expected response data
    expect(result).toEqual({ data: "mocked response" });
  });

  it("should handle errors", async () => {
    // Mock the axios.put function to throw an error
    axios.put.mockRejectedValue(new Error("Request failed"));

    // Define an ID and user object to pass to the function
    const id = "123";
    const user = { name: "Updated User", age: 35 };

    // Call the editRecords function
    try {
      await editRecords(id, user);
    } catch (error) {
      // Assert that axios.put was called with the correct URL and data
      expect(axios.put).toHaveBeenCalledWith(
        `http://localhost:8080/record/${id}`,
        user
      );

      // Assert that the function correctly propagates the error
      expect(error.message).toEqual("Request failed");
    }
  });
});

describe("getRecordById", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it("should make a GET request to fetch a record by ID", async () => {
    // Mock the axios.get function to return a response
    axios.get.mockResolvedValue({ data: "mocked response" });

    // Define an ID to pass to the function
    const id = "123";

    // Call the getRecordById function
    const result = await getRecordById(id);

    // Assert that axios.get was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8080/record/${id}`
    );

    // Assert that the function returned the expected response data
    expect(result).toEqual({ data: "mocked response" });
  });

  it("should handle errors", async () => {
    // Mock the axios.get function to throw an error
    axios.get.mockRejectedValue(new Error("Request failed"));

    // Define an ID to pass to the function
    const id = "123";

    // Call the getRecordById function
    try {
      await getRecordById(id);
    } catch (error) {
      // Assert that axios.get was called with the correct URL
      expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:8080/record/${id}`
      );

      // Assert that the function correctly propagates the error
      expect(error.message).toEqual("Request failed");
    }
  });
});