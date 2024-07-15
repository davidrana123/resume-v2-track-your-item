import jwt from 'jsonwebtoken';

export function checkAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('token',token)
        const decoded = jwt.verify(token, 'secret_key');
        req.userData = decoded;
        req.tokenExp = decoded.exp; // Add expiration time to the request object
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
}
