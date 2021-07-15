import { cloneElement } from "react"
import Link from "next/link"
import renderer from "react-test-renderer"

import Layout from "../components/Layout"
import Home from "../pages/index.js"

jest.mock("next/link")
jest.mock("../components/Layout")

describe("Home", () => {
	Link.mockImplementation(({ href, children }) => 
		cloneElement(children, { href })
	)
	Layout.mockImplementation(({ children }) => children)

	it("renders correctly without posts nor archive", () => {
		const tree = renderer
			.create(<Home posts={[]} hasArchive={false}/>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("renders correctly with posts and archive", () => {
		const posts = [
			{
				title: "かきくけこ",
				slug: "kakikukeko",
				published: "2020/08/27",
			},
			{
				title: "あいうえお",
				slug: "aiueo",
				published: "2018/05/27",
			},
		]
		const tree = renderer
			.create(<Home posts={posts} hasArchive={true}/>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
