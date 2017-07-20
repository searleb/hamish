import axios from './config'

/**
 * URL path for addresses api
 * @type {String}
 */
const path = 'inbox'

/**
* Get a JSON representation of all inbox items
* @summary Show all inbox items
* @method apiGetAllInbox
* @param  {Int}        page      optional
* @param  {Int}        limit     optional
* @param  {String}        sort      optional
* @param  {String}        direction optional
* @return {Promise}        axios promise
*/
export function apiGetAllInbox({ page, limit, sort, direction }) {
  return axios.get(path, {
    params: {
      page,
      limit,
      sort,
      direction,
    },
  })
}
