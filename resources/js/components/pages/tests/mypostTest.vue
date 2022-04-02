<template>
  <div>
    <div style="margin-top: 150px">
      <template>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class="mx-auto mt-5" max-width="674">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <img
                :src="'/images/202203291242DSC00425.JPG'"
                alt="image"
                class="img-fluid"
                style="object-fit: cover; object-position: center; width: 100%"
              />

              <v-card-title
                >{ a_user.user.first_name }}
                { a_user.user.last_name }}</v-card-title
              >

              <v-card-text>
                <v-row align="center" class="">
                  <v-col cols="4">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      readonly
                      size="14"
                    ></v-rating>
                    4 (1111)
                  </v-col>

                  <v-col cols="8">
                    <div class="grey--text ms-4">
                      <v-chip outlined color="green" class="m-1">
                        <v-icon class="p-1">mdi-cash</v-icon>
                        ${ a_user.project_rate }}</v-chip
                      >
                    </div>
                  </v-col>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  { a_user.job_categories.category_name }}
                </div>

                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, minima!.
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Skills</v-card-title>

              <v-card-text>
                <v-chip-group v-model="selection" column>
                  <!-- <div v-for="skill in a_user.employee_skill" :key="skill.id">
                    <v-chip>{{ skill.all_skill.skill }}</v-chip>
                  </div> -->
                  <v-chip>{ skill.all_skill.skill }}</v-chip>
                  <v-chip>{ skill.all_skill.skill }}</v-chip>
                  <v-chip>{ skill.all_skill.skill }}</v-chip>
                  <v-chip>{ skill.all_skill.skill }}</v-chip>
                </v-chip-group>
              </v-card-text>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="profile">
                  See Profile
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="8" lg="8">
            <v-card class="mt-5" min-height="90vh">
              <v-tabs color="deep-purple accent-4" right>
                <v-tab>My Job Post</v-tab>
                <v-tab>Assigned Job</v-tab>
                <v-tab>Jobs in Progress</v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Sed aliquam ultrices mauris. Donec posuere vulputate
                        arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed
                        a libero.
                      </p>

                      <p class="mb-0">
                        Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                        arcu. Pellentesque libero tortor, tincidunt et,
                        tincidunt eget, semper nec, quam. Phasellus blandit leo
                        ut odio.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Morbi nec metus. Suspendisse faucibus, nunc et
                        pellentesque egestas, lacus ante convallis tellus, vitae
                        iaculis lacus elit id tortor. Sed mollis, eros et
                        ultrices tempus, mauris ipsum aliquam libero, non
                        adipiscing dolor urna a orci. Curabitur ligula sapien,
                        tincidunt non, euismod vitae, posuere imperdiet, leo.
                        Nunc sed turpis.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p class="mb-0">
                        Cras sagittis. Phasellus nec sem in justo pellentesque
                        facilisis. Proin sapien ipsum, porta a, auctor quis,
                        euismod ut, mi. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nam at tortor in
                        tellus interdum sagittis.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>