<template>
  <div class="hello">
    <div class="section hero">
      <div class="container">
        <h1>Simple benchmarks</h1>
        <p>
          Simple benchmark test that fetches same data from same database from same server from two different apis. One is written in <a target="_blank" href="https://lumen.laravel.com/">Lumen</a> (PHP) the other in <a target="_blank" href="https://golang.org/">Golang</a>.
        </p>
        <div class="row">
          <div class="three columns">
            <ul class="inline">
                <li>
                  Source:
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/lumen-benchmark/blob/master/routes/web.php#L22">Lumen</a> |
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/go-benchmark/blob/master/main.go#L57">Golang</a>
                </li>
            </ul>
            <button class="button-primary" @click="fetchSingle()">Fetch 1 row</button>
          </div>
          <div class="three columns">
            <ul class="inline">
                <li>
                  Source:
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/lumen-benchmark/blob/master/routes/web.php#L26">Lumen</a> |
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/go-benchmark/blob/master/main.go#L72">Golang</a>
                </li>
            </ul>
            <button class="button-primary" @click="fetchMulti()">Fetch 5 rows</button>
          </div>
          <div class="three columns">
            <ul class="inline">
                <li>
                  Source:
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/lumen-benchmark/blob/master/routes/web.php#L30">Lumen</a> |
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/go-benchmark/blob/master/main.go#L87">Golang</a>
                </li>
            </ul>
            <button class="button-primary" @click="fetchStatic()">Fetch static</button>
          </div>
          <div class="three columns">
            <ul class="inline">
                <li>
                  Source:
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/go-benchmark/blob/master/main.go#L95">Lumen</a> |
                </li>
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/go-benchmark/blob/master/main.go#L95">Golang</a>
                </li>
            </ul>
            <button class="button-primary" @click="fetchQsort()">Fetch qsort (5000)</button>
          </div>
        </div>
        <div class="row">
          <div class="one-half column">
            <h4>Lumen (PHP)</h4>
            <ul class="inline">
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/lumen-benchmark">Source (full)</a>
                </li>
            </ul>
            <ul class="inline">
                <li>
                    Load time: {{ lumenTime }}
                </li>
            </ul>
            <div class="bordered">
              {{ data.lumen }}
            </div>
          </div>
          <div class="one-half column">
            <h4>Golang</h4>
            <ul class="inline">
                <li>
                    <a target="_blank" href="https://github.com/d1am0nd/go-benchmark">Source (full)</a>
                </li>
            </ul>
            <ul class="inline">
                <li>
                    Load time: {{ golangTime }}
                </li>
            </ul>
            <div class="bordered">
              {{ data.golang }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'hello',
  data () {
    return {
      data: {
        lumen: {},
        golang: {}
      },
      lumenTime: 0,
      golangTime: 0
    }
  },
  methods: {
    fetchSingle () {
      var lumenTimer = new Date().getTime()
      api.getLumenSingle()
      .then((res) => {
        this.lumenTime = new Date().getTime() - lumenTimer
        this.data.lumen = JSON.stringify(res.body, null, 2)
      })

      var golangTimer = new Date().getTime()
      api.getGolangSingle()
      .then((res) => {
        this.golangTime = new Date().getTime() - golangTimer
        this.data.golang = JSON.stringify(res.body, null, 2)
      })
    },
    fetchMulti () {
      var lumenTimer = new Date().getTime()
      api.getLumenMulti()
      .then((res) => {
        this.lumenTime = new Date().getTime() - lumenTimer
        this.data.lumen = JSON.stringify(res.body, null, 2)
      })

      var golangTimer = new Date().getTime()
      api.getGolangMulti()
      .then((res) => {
        this.golangTime = new Date().getTime() - golangTimer
        this.data.golang = JSON.stringify(res.body, null, 2)
      })
    },
    fetchStatic () {
      var lumenTimer = new Date().getTime()
      api.getLumenStatic()
      .then((res) => {
        this.lumenTime = new Date().getTime() - lumenTimer
        this.data.lumen = JSON.stringify(res.body, null, 2)
      })

      var golangTimer = new Date().getTime()
      api.getGolangStatic()
      .then((res) => {
        this.golangTime = new Date().getTime() - golangTimer
        this.data.golang = JSON.stringify(res.body, null, 2)
      })
    },
    fetchQsort () {
      var lumenTimer = new Date().getTime()
      api.getLumenQsort()
      .then((res) => {
        this.lumenTime = new Date().getTime() - lumenTimer
        this.data.lumen = JSON.stringify(res.body, null, 2)
      })

      var golangTimer = new Date().getTime()
      api.getGolangQsort()
      .then((res) => {
        this.golangTime = new Date().getTime() - golangTimer
        this.data.golang = JSON.stringify(res.body, null, 2)
      })
    }
  }
}
</script>
<style type="text/css">
h2, h3, h4, h5, h6 {
  margin-bottom: 0;
}
p {
  font-size: 150%;
}
ul.inline {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
ul.inline li {
    display: inline;
}

.bordered {
  border-style: solid;
  border-width: 1px;
}
</style>
