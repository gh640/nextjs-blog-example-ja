import fs from "fs"

import Head from "next/head"
import Link from "next/link"

import Layout from "../../components/Layout"
import { listContentFiles, readContentFiles, readContentFile } from "../../lib/contentLoader"

const COUNT_PER_PAGE = 10

export default function Archive(props) {
  const { posts, page, prevPage, nextPage } = props
  return (
    <Layout title="アーカイブ">
      {posts.map((post) => <div
        key={post.slug}
        className="post-teaser"
      >
        <h2><Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
        <div><span>{post.published}</span></div>
      </div>)}

      <div className="pager">
        <span className="pager-item">
          {prevPage ? (
            <Link href="/archive/[page]" as={`/archive/${prevPage}`}>
              <a>{prevPage}</a>
            </Link>
          ) : ``}
        </span>
        <span className="pager-item">{page}</span>
        <span className="pager-item">
          {nextPage ? (
            <Link href={`/archive/[page]`} as={`/archive/${nextPage}`}>
              <a>{nextPage}</a>
            </Link>
          ) : ``}
        </span>
      </div>

      <style jsx>{`
        .post-teaser {
          margin-bottom: 2em;
        }

        .post-teaser h2 a {
          text-decoration: none;
        }

        .pager {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flew-wrap: nowrap;
        }

        .pager-item {
          margin: 0 1em;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE

  const posts = await readContentFiles({ fs })

  const prevPage = page > 1 ? page - 1 : null
  let nextPage = null
  if (page < Math.ceil(posts.length / COUNT_PER_PAGE)) {
    nextPage = page + 1
  }

  return {
    props: {
      posts: posts.slice(start, end),
      page,
      prevPage,
      nextPage,
    }
  }
}

export async function getStaticPaths() {
  const posts = await listContentFiles({ fs })
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { page: `${page}` }
  }))

  return { paths: paths, fallback: false }
}

/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  if (typeof stop !== 'number') {
    throw `Invalid types [${a}, ${stop}].`
  }

  if (stop < 1) {
    throw `Invalid range [${a}, ${stop}].`
  }

  return Array.from(iterator(stop))

  function* iterator(max) {
    let n = 1;
    while (true) {
      yield n
      if (n >= max) {
        break
      }

      n++
    }
  }
}
