/**
 * Convert object to url params.
 *
 * @param obj Object
 */
function objToUrlParams(obj) {
  return Object.entries(obj)
    .map(([key, val]) => (!val ? null : `${key}=${val}`))
    .filter(Boolean)
    .join('&');
}
