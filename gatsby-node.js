exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/post\/app/)) {
    page.matchPath = '/post/*'
    createPage(page)
  }
}
