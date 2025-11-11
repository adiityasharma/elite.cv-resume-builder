class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.statusCode = status
    this.success = false
    this.message = message;
  }
}

export { ApiError }