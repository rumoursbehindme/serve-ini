import { join } from 'path';
import SIC from '../index.js';

console.log(SIC(join(process.cwd(), 'test', 'config')));