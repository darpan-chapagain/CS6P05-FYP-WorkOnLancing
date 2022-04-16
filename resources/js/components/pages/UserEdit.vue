<template>
  <div style="margin: 150px 10px">
    <v-card class="mt-5 p-5">
      <v-form
        v-model="valid"
        ref="form5"
        lazy-validation
        enctype="multipart/form-data"
      >
        <div class="profile-info">
          <h3>Publish your Profile</h3>
          <div class="image d-flex flex-column">
            <div class="avatar mx-auto">
              <v-avatar v-if="user.profile" color="orange" size="150">
                <v-img :src="url"></v-img>
              </v-avatar>
              <v-avatar v-else color="orange" size="150">
                <v-img
                  v-if="this.user.profile_path"
                  :src="'/' + this.user.profile_path"
                  alt="John"
                >
                </v-img>
                <span v-else class="white--text text-h3">U</span>
              </v-avatar>
            </div>
            <div class="img-input">
              <v-file-input
                cols="8"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Profile Picture"
                v-model="user.profile"
              ></v-file-input>
            </div>
          </div>
          <div class="form-group name-group">
            <div class="first-name-container">
              <v-text-field
                v-model="user.first_name"
                :rules="[(v) => !!v || 'Please enter your First Name']"
                class="form-input name-in"
                label="First  Name"
                required
              ></v-text-field>
            </div>
            <div class="last-name-container">
              <v-text-field
                v-model="user.last_name"
                :rules="[(v) => !!v || 'Please enter your Last Name']"
                class="form-input name-in"
                label="Last Name"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="form-group">
            <v-radio-group
              v-model="user.gender"
              :rules="[(v) => !!v || 'Please select gender']"
              row
              required
            >
              <v-radio label="Male" value="male"></v-radio>
              <v-radio label="Female" value="female"></v-radio>
              <v-radio label="Others" value="others"></v-radio>
            </v-radio-group>
          </div>
          <v-text-field
            v-model="user.address"
            :rules="[(v) => !!v || 'Please Enter a Address']"
            label="Address"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.city"
            :counter="10"
            :rules="[(v) => !!v || 'Please Enter a city']"
            label="City"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.province"
            :counter="10"
            :rules="[(v) => !!v || 'Please Enter a province number']"
            label="Province"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.phone_number"
            :counter="14"
            :rules="[(v) => !!v || 'Please Enter a phone number']"
            label="Phone Number"
            required
          ></v-text-field>
        </div>
        <div v-if="this.user.role_id == 3">
          <div class="services">
            <h3>What services do you offer?</h3>
            <div>
              <v-text-field
                v-model="user.title"
                :counter="10"
                :rules="titleRules"
                label="Title of your Work"
                required
              ></v-text-field>
              <v-autocomplete
                v-model="user.category"
                :items="categories"
                clearable
                hide-selected
                persistent-hint
                label="Job Category"
                :rules="categoryRule"
                dense
              ></v-autocomplete>
              <h4>Experience Level</h4>
              <v-radio-group
                v-model="user.experience"
                :rules="[(v) => !!v || 'Please select experience']"
                row
                required
              >
                <v-radio label="Entry" value="0"></v-radio>
                <v-radio label="Intermediate" value="1"></v-radio>
                <v-radio label="Expert" value="2"></v-radio>
              </v-radio-group>
              <h4>Qualifications</h4>
              <v-radio-group v-model="user.employee_type" row>
                <v-radio label="Individual" value="0"></v-radio>
                <v-radio label="Team" value="1"></v-radio>
              </v-radio-group>
              <v-textarea
                name="Qualification"
                filled
                label="Qualification"
                auto-grow
                v-model="user.qualification"
                value="List down your education level."
              ></v-textarea>
              <v-textarea
                name="Education"
                filled
                label="Education"
                auto-grow
                v-model="user.education"
                value="List down your education level."
              ></v-textarea>
            </div>
          </div>
          <div class="skill-and-worth">
            <div class="scope m-4">
              <h3>Tell us your skill and worth!</h3>
            </div>

            <div class="skills">
              <v-autocomplete
                v-model="user.skill"
                :items="items"
                clearable
                hide-selected
                persistent-hint
                label="Skills"
                :rules="[required]"
                dense
                multiple
                required
                small-chips
              ></v-autocomplete>
            </div>

            <div class="rates">
              <div class="buttons my-auto p-3">
                <v-btn class="mr-2" @click="types('hourly')">Hourly Rate</v-btn>
                <v-btn class="ml-2" @click="types('project')"
                  >Project Rate</v-btn
                >
              </div>

              <div class="payment-inputs m-2">
                <v-text-field
                  v-if="payment"
                  v-model="user.hourly_rate"
                  label="Hourly Rate"
                  placeholder="Enter Your Rate here"
                  outlined
                  clearable
                  type="number"
                  :rules="[(v) => !!v || 'Please Enter a price']"
                ></v-text-field>
                <v-text-field
                  v-if="!payment"
                  v-model="user.project_rate"
                  clearable
                  label="Project Rate"
                  placeholder="Enter Your Rate here"
                  outlined
                  type="number"
                  :rules="[(v) => !!v || 'Please Enter a price']"
                ></v-text-field>
                <v-textarea
                  name="About"
                  filled
                  label="About"
                  :rules="about"
                  :counter="500"
                  auto-grow
                  v-model="user.about"
                  value="Let others know about yourself."
                ></v-textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column mx-5 justify-around">
          <v-btn class="btn btn-lg sign-in-btn mb-2" @click.prevent="submit">
            Update
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    a_user: [Array, Object],
  },
  data() {
    return {
      tab: "tab-1",
      switch2: false,
      state: false,
      categories: [],
      items: [],
      user: {
        id: null,
        first_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: null,
        skill: null,
        scope: null,
        experience: null,
        skill: [],
        category: [],
        description: null,
        title: null,
        search: null,
        hourly_rate: null,
        project_rate: null,
        profile: null,
        employee_type: null,
        qualification: null,
        about: null,
        address: null,
        city: null,
        province: null,
        phone_number: null,
        education: null,
        role_id: null,
        profile_path: null,
      },
      payment: true,
      show3: false,
      pass_rule: {
        required: (value) => !!value || "Required.",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      //for employee
      valid: true,
      e1: 1,
      step: 1,
      titleRules: [
        (v) => !!v || "Job Title is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      descriptionRule: [
        (v) => !!v || "Description required",
        (v) =>
          (v && v.length <= 20) ||
          "Description must be less than 200 characters",

        // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      categoryRule: [(v) => !!v || "Please select category"],
      scopeRule: [[(v) => !!v || "Scope is required"]],
      about: [
        (v) => !!v || "About is required",
        (v) =>
          (v && v.length <= 20) ||
          "Description must be less than 200 characters",
      ],
      //for date
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      //   dateFormatted: vm.formatDate(
      //     new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //       .toISOString()
      //       .substr(0, 10)
      //   ),
      dateFormatted: null,
      menu1: false,
      menu2: false,
    };
  },
  methods: {
    async getUser() {
      console.log(this.job);
      let res = await axios.get(`/job/${this.a_user.id}/edit`);
      let data = await res.data;
      return data;
    },
    required(value) {
      if (value instanceof Array && value.length == 0) {
        return "Required.";
      }
      return !!value || "Required.";
    },
    formData() {
      let userForm = new FormData();

      userForm.append("profile", this.user.profile);

      userForm.append("first_name", this.user.first_name);
      userForm.append("last_name", this.user.last_name);
      userForm.append("email", this.user.email);
      userForm.append("password", this.user.password);
      userForm.append("password_confirmation", this.user.password_confirmation);
      userForm.append("gender", this.user.gender);
      for (let sk in this.user.skill) {
        userForm.append("skill[]", this.user.skill[sk]);
      }
      userForm.append("scope", this.user.scope);
      userForm.append("experience", this.user.experience);
      userForm.append("category", this.user.category);
      userForm.append("description", this.user.description);
      userForm.append("title", this.user.title);
      userForm.append("search", this.user.search);
      userForm.append("hourly_rate", this.user.hourly_rate);
      userForm.append("project_rate", this.user.project_rate);
      userForm.append("employee_type", this.user.employee_type);
      userForm.append("qualification", this.user.qualification);
      userForm.append("about", this.user.about);
      userForm.append("Address", this.user.address);
      userForm.append("city", this.user.city);
      userForm.append("province", this.user.province);
      userForm.append("phone_no", this.user.phone_number);
      userForm.append("education", this.user.education);
      userForm.append("role_id", this.user.role_id);
      // let formData = new FormData()
      //   <!-- WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST -->
      //   formData.append('avatar', this.avatar)

      //   _.each(this.formData, (value, key) => {
      //     formData.append(key, value)
      //   })

      return userForm;
    },

    async submit() {
      console.log(this.formData());
      let res = await axios({
        method: "POST",
        url: `/user/update/all/${this.user.id}`,
        data: this.formData(),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }).then(() => {
        localStorage.removeItem("job");
        this.$router.push({
          name: "dashboard",
        });
      });
      // console.log(res.data);
      // console.log(this.formData());
    },
    async getSkill() {
      const res = await axios.get("skill");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].skill);
        this.items.push(res.data[i].skill);
      }
    },
    async getCategories() {
      const res = await axios.get("jobs/category");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].skill);
        this.categories.push(res.data[i].category_name);
      }
    },
  },
  created() {
    this.getSkill();
    this.getCategories();
  },
  mounted() {
    // console.log(this.a_user.roles.role_id);
    if (this.a_user) {
      this.user.id = this.a_user.id;
      this.user.first_name = this.a_user.first_name;
      this.user.last_name = this.a_user.last_name;
      this.user.email = this.a_user.email;
      this.user.gender = this.a_user.gender;
      this.user.about = this.a_user.about;
      if (this.a_user.roles.role_id == 3) {
        this.user.experience = this.a_user.employee.experience;
        this.user.category = this.a_user.employee.job_categories.category_name;
        this.user.title = this.a_user.employee.title;
        this.user.hourly_rate = this.a_user.employee.hourly_rate;
        this.user.project_rate = this.a_user.employee.project_rate;
        this.user.employee_type = this.a_user.employee.employee_type;
        this.user.qualification = this.a_user.employee.qualification;
        this.user.education = this.a_user.employee.education;
        this.a_user.employee.employee_skill.forEach((skill, index) => {
          this.user.skill.push(skill.all_skill.skill);
        });
      }
      this.user.address = this.a_user.Address;
      this.user.city = this.a_user.City;
      this.user.province = this.a_user.Province;
      this.user.phone_number = this.a_user.phone_no;
      this.user.role_id = this.a_user.roles.role_id;
      this.user.profile_path = this.a_user.profile_path;
    } else {
      let a_users = JSON.parse(localStorage.getItem("users"));
      this.user.id = a_users.id;
      this.user.first_name = a_users.first_name;
      this.user.last_name = a_users.last_name;
      this.user.email = a_users.email;
      this.user.gender = a_users.gender;
      if (a_users.roles.role_id == 3) {
        this.user.experience = a_users.employee.experience;
        this.user.category = a_users.employee.job_categories.category_name;
        this.user.title = a_users.employee.title;
        this.user.search = a_users.employee.search;
        this.user.hourly_rate = a_users.employee.hourly_rate;
        this.user.project_rate = a_users.employee.project_rate;
        this.user.employee_type = a_users.employee.employee_type;
        this.user.qualification = a_users.employee.qualification;
        this.user.education = a_users.employee.education;
        a_users.employee.employee_skill.forEach((sk, index) => {
          this.user.skill.push(sk.all_skill.skill);
        });
      }
      this.user.about = a_users.employee.about;
      this.user.address = a_users.Address;
      this.user.city = a_users.City;
      this.user.province = a_users.Province;
      this.user.phone_number = a_users.phone_no;
      this.user.role_id = a_users.roles.role_id;

      this.user.profile_path = a_users.profile_path;
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    url() {
      if (!this.user.profile) return;
      return URL.createObjectURL(this.user.profile);
    },
  },
};
</script>

<style>
</style>