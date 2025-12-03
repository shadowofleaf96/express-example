// Custom error-handling middleware in Express
// It must have 4 parameters: (err, req, res, next)
module.exports = (err, req, res, next) => {
  console.error("🔥 Error caught by middleware:", err.message);

  // Set default error code if none found
  const statusCode = err.statusCode || 500;

  // Send a JSON response showing the error
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
