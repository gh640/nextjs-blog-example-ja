import { cloneElement } from "react"
import renderer from "react-test-renderer"

import Layout from "../components/Layout"
import Post from "../pages/posts/[slug].js"

jest.mock("../components/Layout")

describe("Post", () => {
	Layout.mockImplementation(({ title, children }) => (
		<div>
			<span>{title}</span>
			{children}
		</div>
	))

	it("renders correctly", () => {
		const content = [
			"## 見出し 2",
			"",
			"昔々あるところに。",
		].join("\n")
		const tree = renderer
			.create(<Post 
				title="はじめての投稿" 
				published="2030/10/20" 
				content={content} 
			/>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
