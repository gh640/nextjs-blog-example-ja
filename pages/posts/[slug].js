import fs from "fs"
import path from "path"

import Layout from "../../components/Layout"
import { listContentFiles, readContentFile } from "../../lib/content-loader"

export default function Post(params) {
  return (
    <Layout title={params.title}>
      <div className="post-meta">
        <span>{params.published}</span>
      </div>
      <div className="post-body"
        dangerouslySetInnerHTML={{ __html: params.content }}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const content = await readContentFile({ fs, slug: params.slug })

  return {
    props: {
      ...content
    }
  }
}

export async function getStaticPaths() {
  const paths = listContentFiles({ fs })
    .map((filename) => ({
      params: {
        slug: path.parse(filename).name,
      }
    }))

  return { paths, fallback: false }
}
