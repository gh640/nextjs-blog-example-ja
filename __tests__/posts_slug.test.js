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

	it("renders correctly with markdown", () => {
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

	it("renders correctly with raw html", () => {
		const content = [
			"<h3>テーブルサンプル</h3>",
			"<div>",
			"	<table>",
			"		<thead>",
			"			<tr>",
			"				<th>カラム 1</th>",
			"				<th>カラム 2</th>",
			"			</tr>",
			"		</thead>",
			"		<tbody>",
			"			<tr>",
			"				<td>1.1</td>",
			"				<th>1.2</th>",
			"			</tr>",
			"			<tr>",
			"				<td>2.1</td>",
			"				<th>2.2</th>",
			"			</tr>",
			"		</tbody>",
			"	</table>",
			"</div>",
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
