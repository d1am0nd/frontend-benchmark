import Vue from 'vue'

const LUMEN_PREFIX = 'http://lumenapi.myprogramming.blog'
const GOLANG_PREFIX =  'http://goapi.myprogramming.blog'

const LUMEN_SINGLE_ROW_URL = LUMEN_PREFIX + '/api/first_db_result'
const LUMEN_MULTI_ROW_URL = LUMEN_PREFIX + '/api/all_db_results'
const LUMEN_STATIC_URL = LUMEN_PREFIX + '/api/string_result'
const LUMEN_QSORT_URL = LUMEN_PREFIX + '/api/qsort_result'

const GOLANG_SINGLE_ROW_URL = GOLANG_PREFIX + '/api/first_db_result'
const GOLANG_MULTI_ROW_URL = GOLANG_PREFIX + '/api/all_db_results'
const GOLANG_STATIC_URL = GOLANG_PREFIX + '/api/string_result'
const GOLANG_QSORT_URL = GOLANG_PREFIX + '/api/qsort_result'

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
  getLumenQsort () {
    return Vue.http.get(LUMEN_QSORT_URL)
  },
  getGolangSingle () {
    return Vue.http.get(GOLANG_SINGLE_ROW_URL, null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  getGolangMulti () {
    return Vue.http.get(GOLANG_MULTI_ROW_URL)
  },
  getGolangStatic () {
    return Vue.http.get(GOLANG_STATIC_URL)
  },
  getGolangQsort () {
    return Vue.http.get(GOLANG_QSORT_URL)
  }
}
