<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="posts"
          :loading="loading"
          :total-items="itemTotal"
          :pagination.sync="pagination"
          rows-per-page-text=""
          class="text-no-wrap"
          disable-initial-sort          
          >
          <template slot="items" slot-scope="props">
            <td :class="headers[0].class">{{ id2date(props.item._id)}}</td>
            <td :class="headers[1].class">{{ props.item.title }}</td>
            <td :class="headers[2].class">{{ props.item._user ? props.item._user.id : '손님' }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

export default {
  data () {
    return {
      posts: [],
      headers: [
        { text: '글번호', value: '_id', sortable: true, class: 'hidden-sm-and-down' },
        { text: '제목', value: 'title', sortable: true },
        { text: '글쓴이', value: '_user', sortable: false }
      ],
      loading: false,
      itemTotal: 0,
      pagination: {},
      getTotalPage: 1
    }
  },
  mounted () {
      this.getBoard()
  },
  methods: {
    id2date (val) {
      if (!val) return '잘못된 시간 정보'
      return new Date(parseInt(val.substring(0, 8), 16) * 1000).toLocaleString()
    },
    getBoard () {
        if (this.loading) return

        this.loading = true
        this.$axios.get(`/board`).then(({ data }) => {
            if (!data.success) throw new Error(data.msg)
            //this.pagination.totalItems = data.t
            this.posts = data.posts
            this.loading = false
            })
            .catch((e) => {
            if (!e.response) this.$store.commit('pop', { msg: e.message, color: 'warning' })
            this.loading = false
            })
    },
  }
}
</script>

<style>

tbody tr:nth-of-type(even) {
background-color: rgba(236, 237, 237);
}

tbody tr:nth-of-type(odd) {
background-color: rgb(250 ,250, 250);
}

.v-data-table-header {
    background-color: white;
}

.v-data-footer {
    background-color: rgb(250 ,250, 250);
}

.theme--light.v-data-table thead tr th {
    color: white;
}

</style>