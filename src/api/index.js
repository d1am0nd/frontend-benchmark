import Vue from 'vue'

const LUMEN_PREFIX = 'http://localhost:8000'
const GOLANG_PREFIX =  'http://localhost:3000'

const LUMEN_SINGLE_ROW_URL = LUMEN_PREFIX + '/api/first_db_result'
const LUMEN_MULTI_ROW_URL = LUMEN_PREFIX + '/api/all_db_results'
const LUMEN_STATIC_URL = LUMEN_PREFIX + '/api/string_result'

const GOLANG_SINGLE_ROW_URL = GOLANG_PREFIX + '/api/first_db_result'
const GOLANG_MULTI_ROW_URL = GOLANG_PREFIX + '/api/all_db_results'
const GOLANG_STATIC_URL = GOLANG_PREFIX + '/api/string_result'

export default {
  getLumenSingle () {
    return Vue.http.get(LUMEN_SINGLE_ROW_URL)
  },
  getLumenMulti () {
    return Vue.http.get(LUMEN_MULTI_ROW_URL)
  },
  getLumenStatic () {
    return Vue.http.get(LUMEN_STATIC_URL)
  },
  getGolangSingle () {
    return Vue.http.get(GOLANG_SINGLE_ROW_URL)
  },
  getGolangMulti () {
    return Vue.http.get(GOLANG_MULTI_ROW_URL)
  },
  getGolangStatic () {
    return Vue.http.get(GOLANG_STATIC_URL)
  }
}
