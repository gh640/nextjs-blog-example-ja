import Link from "next/link"

const Pager = (props) => {
  const { total, page, perPage, hrefCallback } = props

  const prevPage = page > 1 ? page - 1 : null
  let nextPage = null
  if (page < Math.ceil(total / perPage)) {
    nextPage = page + 1
  }

  return (
    <div className="pager">
      <span className="pager-item">
        {prevPage ? (
          <Link href={hrefCallback(prevPage)}>{prevPage}</Link>
        ) : null}
      </span>
      <span className="pager-item">{page}</span>
      <span className="pager-item">
        {nextPage ? (
          <Link href={hrefCallback(nextPage)}>{nextPage}</Link>
        ) : null}
      </span>

      <style jsx>{`
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
    </div>
  )
}

export default Pager
