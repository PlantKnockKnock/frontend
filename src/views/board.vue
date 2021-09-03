<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="posts"
          :loading="loading"
          class="text-no-wrap"
          >
          <template slot="items" slot-scope="props">
            <td :class="headers[0].class">{{ props.item.c_id}}</td>
            <td :class="headers[1].class">{{ props.item.title }}</td>
            <td :class="headers[2].class">{{ props.item.c_nickname ? props.item._user.id : '손님' }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: [],
      headers: [
        { text: '글번호', value: 'c_id', sortable: true, class: 'hidden-sm-and-down'},
        { text: '제목', value: 'title', sortable: true },
        { text: '글쓴이', value: 'c_nickname', sortable: false }
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
    getBoard () {
        if (this.loading) return
        this.loading = true
        axios.get(`/board/list`).then(({ data }) => {
          console.log(data);
          if (!data.success) throw new Error(data.message)
          this.posts = data.posts
          this.loading = false
        }).catch((e) => {
          if (!e.response) this.$store.commit('pop', { msg: e.message, color: 'warning' })
          this.loading = false
        })
    },
  }
}
</script>

<style>
.v-data-table-header {
    background-color: white;
}

.v-data-footer {
    background-color: rgb(250 ,250, 250);
}

.theme--light.v-data-table thead tr th {
    color: white;
}

.text-start {
  text-align: center;
}

</style>