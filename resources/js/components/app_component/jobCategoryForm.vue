<template>
  <v-container fluid style="max-width: 400px; margin: 20px auto; display: flex">
    <form ref="form" style="width: 100%; margin: 0 auto">
      <v-autocomplete
        v-model="skill"
        :items="items"
        clearable
        hide-selected
        persistent-hint
        label="Skills"
        dense
        multiple
        required
        small-chips
      ></v-autocomplete>
      <v-btn
        color="success"
        @click.prevent="submit"
        style="width: 100%; text-align: center"
      >
        submit
      </v-btn>
    </form>
  </v-container>
</template>


<script>
export default {
  name: "MyJobCategory",
  data: () => ({
    items: [],
    skill: [],
    search: null,
  }),
  props: {
    mySkills: Array,
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    },
  },
  methods: {
    async getSkill() {
      // this.$axios.get(`/api/job`)
      // const skill_data = []
      // for(var i in res){
      //     skill_data.push([i, res[i]])
      //     console.log(res[i])

      // }
      const res = await axios.get("skill");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        this.items.push(res.data[i].skill);
      }
    },
    getMySkills() {
      this.mySkills.forEach((skill, index) => {
        this.skill.push(skill.all_skill.skill);
        console.log(skill.all_skill.skill);
      });
    },
    async postSkill(val) {
      await axios.post(`api/jobs_skill`, {
        skill: val,
      });
    },
    submit() {
      console.log(this.skill);
      Object.entries(this.skill).forEach(([key, value]) => {
        console.log(key, value);
        this.postSkill(String(value));
      });
    },
  },
  async created() {
    await this.getSkill();
    this.getMySkills();
  },
};
</script>

<style>
</style>
