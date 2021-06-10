import { cloneElement } from "react"
import Head from "next/head"
import Link from "next/link"
import renderer from "react-test-renderer"

import Layout from "../Layout.js"

jest.mock("next/head")
jest.mock("next/link")

describe("Layout", () => {
	Head.mockImplementation(({ children }) => children)
	Link.mockImplementation(({ href, children }) => 
		cloneElement(children, { href })
	)

	it("renders collectly with title", () => {
		const tree = renderer
			.create(<Layout title="ページタイトル"></Layout>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("renders collectly with children", () => {
		const tree = renderer
			.create(<Layout>
				<div>
					<span>Hello World</span>
				</div>
			</Layout>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
