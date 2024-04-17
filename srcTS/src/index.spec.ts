import { hello } from "./index";

describe('hello', () => {
	it('should perform a proper printout', () => {
		expect(hello("World")).toBe("Hello World");
	});
});
