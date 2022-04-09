<template>
  <div class="mt-5">
      <v-card class="mt-5">
    <v-form v-model="valid" ref="form4" lazy-validation @submit.prevent="">
      <h3>Publish your Profile</h3>
      <div class="image d-flex flex-column">
        <div class="avatar mx-auto">
          <v-avatar color="orange" size="80">
            <v-img v-if="user.profile" :src="url"></v-img>
            <span v-else class="white--text text-h3">U</span>
          </v-avatar>
        </div>
        <div class="img-input">
          <v-file-input
            cols="8"
            :rules="[(v) => !!v || 'Please select experience']"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Profile Picture"
            v-model="user.profile"
          ></v-file-input>
        </div>
      </div>
      <v-text-field
        v-model="user.address"
        :counter="10"
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
        :rules="[(v) => !!v || 'Please Enter a province']"
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
      <div class="buttons d-flex justify-content-between">
        <v-btn color="error" @click="changeTab2()">Cancel</v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate('profile')"
          @click.native="steps(step)"
        >
          Finalize
        </v-btn>
      </div>
    </v-form>
  </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>