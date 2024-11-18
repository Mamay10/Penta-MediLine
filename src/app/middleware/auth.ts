// middleware/auth.ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends NextApiRequest {
    user?: any;
}

const authenticate = (handler: NextApiHandler) => {
    return async (req: AuthenticatedRequest, res: NextApiResponse) => {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
            req.user = decoded;
            return handler(req, res);
        } catch (error) {
            console.error('JWT verification failed:', error);
            return res.status(403).json({ message: 'Invalid token' });
        }
    };
};

export default authenticate;
