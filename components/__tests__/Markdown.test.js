import renderer from "react-test-renderer"

import Markdown from "../Markdown.js"

jest.mock("next/link", () => {
	return ({ children, ...attrs }) => {
		return <a {...attrs}>{children}</a>
	}
})

describe("Markdown", () => {
	it("renders collectly with simple markdown", () => {
		const tree = renderer
			.create(<Markdown>{`
# 見出し 1

# 見出し 2

- これは
- リスト
- です

テーブル:

| 西 | 東 |
| --- | --- |
| 西山 | 東山 |

			`}</Markdown>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("renders collectly with html", () => {
		const tree = renderer
			.create(<Markdown>{`
<h3>テーブルサンプル</h3>
<div>
	<table>
		<thead>
			<tr>
				<th>カラム 1</th>
				<th>カラム 2</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1.1</td>
				<th>1.2</th>
			</tr>
			<tr>
				<td>2.1</td>
				<th>2.2</th>
			</tr>
		</tbody>
	</table>
</div>
			`}</Markdown>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

})
