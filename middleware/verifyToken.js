const jwt = require('jsonwebtoken');

// Middleware to verify JWT
function verifyToken(req, res, next) {
    // Get token from Authorization header
    const token = req.header('Authorization')?.split(' ')[1];  // Assuming token format is "Bearer <token>"

    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied. No token provided." });
    }

    try {
        // Verify token using the secret from .env file
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach the decoded user info to the request object
        req.user = decoded;
        
        // Call next middleware/route handler
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid or expired token.' });
    }
}

module.exports = verifyToken;
