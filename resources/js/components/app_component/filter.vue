<template>
  <div class="filter">
    <v-container fluid>
      <p>Filter By</p>
      <v-autocomplete
        v-model="category"
        :items="categories"
        clearable
        hide-selected
        persistent-hint
        label="Job Category"
        dense
        @change="sendCategory"
      ></v-autocomplete>
      <div class="p-4">
        <v-range-slider
          v-model="range"
          :max="max"
          :min="min"
          hide-details
          class="align-center"
          @change="sendRange"
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
      max: 1500000,
      range: [50, 1000000],
    };
  },
  methods: {
    async getCategories() {
      const res = await axios.get("jobs/category");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        this.categories.push(res.data[i].category_name);
      }
    },
    sendCategory() {
      this.$emit("categoryChange", this.category);
    },
    sendRange() {
      this.$emit("rangeChange", this.range);
    }
  },
  async mounted() {
    await this.getCategories();
  },
};
</script>

<style>
</style>