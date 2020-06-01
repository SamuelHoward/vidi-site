import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>A simple language with a simple syntax</h2>
	<p>
	Vidi is a programming language designed with the primary purpose of being easy to read and write. This way it can be used as a teaching tool, allowing novice programmers to focus on the logic of their programs rather than the syntax of the language they are using.
	</p>
	<p>
	Vidi is a dynamically typed, imperative language with type inferencing and bare bones syntax.
	</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
	</div>
	<h2>Current state of Vidi</h2>
	<p>
	The current version of Vidi is evaluated using an interpreter built in OCaml. It is being solely developed by
    {` `}
	<a style={{ color: `#46b4eb` }} href="https://github.com/SamuelHoward">Samuel Howard</a>. Vidi supports fundamental data types, arrays, functions, and command line arguments. Precise descriptions of the language's features can be seen in the documentation and are demonstrated in the samples. 
	</p>
	<h2>Goals for the Language</h2>
	<p>
The current primary goal for the language is to make it open source via GitHub. The reason this has not been done is because the sole interpreter for the language is written in OCaml. Since the language's targeted audience is novice programmers, it would be preferable for the interpreter to written in a more common language, so that even relatively inexperienced programmers could contribute to the language. The plan is for Vidi to go open source after such an interpreter is implemented.
	</p>
	<p>
	Aside from that, some general goals of the language are to ship with a debugger, as well as include support for creating advanced and linked data structures.
    </p>
  </Layout>
)

export default IndexPage
