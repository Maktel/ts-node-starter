import { promises as fs } from 'fs';
import { helper } from './lib';

(async () => {
	const res = await fs.readdir('test');
	console.log(res);

	console.log('Helper', helper(1234));
})();
