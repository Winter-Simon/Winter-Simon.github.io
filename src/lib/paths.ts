/** Automatically prefix links for GitHub project Pages (e.g. /skills-github-pages/). */
const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');
export function href(path = '/') {
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
}
