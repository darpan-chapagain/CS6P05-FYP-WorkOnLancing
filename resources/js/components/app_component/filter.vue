<template>
  <div class="filter">
    <v-container fluid>
      <p>Filter By</p>
      <!-- <v-radio-group
        v-model="radios"
        mandatory
        >
        <v-radio
            label="Radio 1"
            value="radio-1"
        ></v-radio>
        <v-radio
            label="Radio 2"
            value="radio-2"
        ></v-radio>
        </v-radio-group> -->
      <v-autocomplete
        v-model="category"
        :items="categories"
        clearable
        hide-selected
        persistent-hint
        label="Job Category"
        :rules="categoryRule"
        dense
      ></v-autocomplete>
      <div class="p-4">
        <v-range-slider
          v-model="range"
          :max="max"
          :min="min"
          hide-details
          class="align-center"
        >
          <template v-slot:prepend>
            <v-text-field
              :value="range[0]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
              @change="$set(range, 0, $event)"
            ></v-text-field>
          </template>
          <template v-slot:append>
            <v-text-field
              :value="range[1]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
              @change="$set(range, 1, $event)"
            ></v-text-field>
          </template>
        </v-range-slider>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FilterBy",
  data() {
    return {
      // radios: null,
      value: null,
      categories: [],
      category: null,
      min: 100,
      max: 90000,
      range: [50, 70000],
    };
  },
  methods: {
    async getCategories() {
      const res = await axios.get("jobs/category");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].skill);
        this.categories.push(res.data[i].category_name);
      }
    },
  },
  async mounted() {
    await this.getCategories();
  },
};
</script>

<style>
</style>