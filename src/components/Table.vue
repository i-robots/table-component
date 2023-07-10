<script>
export default {
  props: ['headers'],
  data() {
    return {
      rows: [
        {
          name: 'Vue.js',
          date: '2023-07-07T12:00:00',
          rating: 1,
        },
        {
          name: 'React',
          date: '2023-07-07T12:00:00',
          rating: 2,
        },
        {
          name: 'Vanilla Javascript',
          date: '2023-07-07T12:00:00',
          rating: null,
        },
      ],
      rating: [
        { id: null, name: 'Unknown' },
        { id: 1, name: 'Easy' },
        { id: 2, name: 'Hard' },
      ],
    }
  },
  methods: {
    onInput(i) {
      // eslint-disable-next-line no-console
      console.log(this.rows[i])
    },
  },
}
</script>

<template>
  <div class="container flex flex-col gap-4 p-5 mx-auto">
    <div class="flex text-lg dark:text-white">
      <h2 v-for="head in headers" :key="head" class="flex-1">{{ head }}</h2>
    </div>
    <div v-for="(r, index) in rows" :key="r.name" class="flex items-center">
      <div class="font-bold flex-1 dark:text-white">
        {{ r.name }}
      </div>
      <div class="flex-1">
        <select v-model="r.rating" :name="r.rating" class="border border-gray-300 rounded bg-gray-50 px-2 py-1" @change="onInput(index)">
          <option v-for="ra in rating" :key="ra.id" :value="ra.id">
            {{ ra.name }}
          </option>
        </select>
      </div>
      <div class="flex-1">
        <input v-model="r.date" type="datetime-local" class="p-1" @change="onInput(index)">
      </div>
    </div>
  </div>
</template>
