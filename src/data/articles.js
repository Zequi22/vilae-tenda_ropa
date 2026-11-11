import { articlesPartOne } from './articles-part-one.js'
import { articlesPartTwo } from './articles-part-two.js'
import { categories, getCategory } from './categories.js'

export const articles = [...articlesPartOne, ...articlesPartTwo].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
)

export const featuredArticle = articles.find((article) => article.featured) ?? articles[0]
export const weekLook = articles.find((article) => article.weekLook) ?? articles[0]

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(categorySlug) {
  return articles.filter((article) => article.category === categorySlug)
}

export function getLatest(limit = 6, excludeSlug) {
  return articles.filter((article) => article.slug !== excludeSlug).slice(0, limit)
}

export function getRelatedArticles(article, limit = 3) {
  if (!article) return []
  const others = articles.filter((item) => item.slug !== article.slug)
  const sameCategory = others.filter((item) => item.category === article.category)
  const sameTags = others.filter(
    (item) => item.category !== article.category && item.tags.some((tag) => article.tags.includes(tag)),
  )
  const rest = others.filter((item) => !sameCategory.includes(item) && !sameTags.includes(item))
  return [...sameCategory, ...sameTags, ...rest].slice(0, limit)
}

export function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export function searchArticles(query) {
  const cleanQuery = normalizeText(query ?? '')
  if (!cleanQuery) return []
  const terms = cleanQuery.split(/\s+/).filter(Boolean)
  return articles.filter((article) => {
    const category = getCategory(article.category)
    const haystack = normalizeText(
      [
        article.title,
        article.subtitle,
        article.excerpt,
        article.author,
        category?.name ?? '',
        ...article.tags,
      ].join(' '),
    )
    return terms.every((term) => haystack.includes(term))
  })
}

export function getCategoryCount(categorySlug) {
  return articles.filter((article) => article.category === categorySlug).length
}

export { categories, getCategory }
