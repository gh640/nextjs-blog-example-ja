import { cloneElement } from "react"
import Link from "next/link"
import renderer from "react-test-renderer"

import Pager from "../Pager.js"

jest.mock("next/link")

describe("Pager", () => {
	Link.mockImplementation(({ href, children }) => 
		cloneElement(children, { href })
	)

	it("renders collectly with first page", () => {
		const tree = renderer
			.create(<Pager 
				total={105}
				page={1}
				perPage={10}
				href="/archive/[page]"
				asCallback={(page) => `/archive/${page}`}
			/>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("renders collectly with second page", () => {
		const tree = renderer
			.create(<Pager 
				total={105}
				page={2}
				perPage={10}
				href="/archive/[page]"
				asCallback={(page) => `/archive/${page}`}
			/>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("renders collectly with last page", () => {
		const tree = renderer
			.create(<Pager 
				total={27}
				page={6}
				perPage={5}
				href="/archive/[page]"
				asCallback={(page) => `/archive/${page}`}
			/>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
