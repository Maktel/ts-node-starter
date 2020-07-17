import { promises as fs } from 'fs';
import { helper } from './lib';

(async () => {
	const res: string[] = await fs.readdir('.');
	console.log(res);

	console.log('Helper', helper(1234));
})();
