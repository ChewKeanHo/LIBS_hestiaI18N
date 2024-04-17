import { hello } from "./index.js";

import * as assert from 'assert';

describe('hello', () => {
	it('should perform a proper printout', () => {
		assert.equal(hello("World"), "Hello World");
	});
});
