const formatDate = (date) => {
  if (!(date instanceof Date)) {
    return ''
  }

  let year = date.getFullYear()
  let month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)
  let day = (date.getDate() < 10 ? '0' : '') + date.getDate()

  return `${year}/${month}/${day}`
}

export { formatDate }
