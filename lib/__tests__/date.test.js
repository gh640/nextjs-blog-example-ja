import { formatDate } from "../date.js"

describe("formatDate", () => {
	it("returns empty string for data other than Date", () => {
		expect(formatDate({})).toBe("")
	}) 

	it("returns collect format with single-digit month", () => {
		expect(formatDate(new Date(2018, 4, 7))).toBe("2018/05/07")
	}) 
	
	it("returns collect format with double-digit-month", () => {
		expect(formatDate(new Date(2018, 11, 27))).toBe("2018/12/27")
	}) 
})
