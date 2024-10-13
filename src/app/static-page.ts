export interface StaticPageParams extends Record<string, string | string[]> {
  tab: string
}

export const staticPage = [
  'All',
  'Posts',
  'Tags',
  'Projects',
  'Calendar',
  'About',
  'Setting',
]
