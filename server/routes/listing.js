import { Router } from 'express';
import { getListing } from '../controllers/listing.js';
const r = Router();
r.get('/', getListing);
export default r;
