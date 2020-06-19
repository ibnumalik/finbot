/**
 * Convert object to url params.
 *
 * @param obj Object
 */
export function objToUrlParams(obj: { [key: string]: any }) {
  return Object.entries(obj)
    .map(([key, val]) => (!val ? null : `${key}=${val}`))
    .filter(Boolean)
    .join('&');
}
