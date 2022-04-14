<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobCategory;
use App\Models\Employee;
use App\Models\Employee_Skill;
use App\Models\User;
use App\Models\UserRoles;
use App\Models\Job;
use App\Models\WorkBadges;
use App\Models\PostSkill;
use Illuminate\Support\Facades\Hash;


class JobCategorySeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = ['Programming', 'Driving', 'Plumbing', 'Digital Marketing', 'Marketing professional', 'Sales professional', 'Photography', 'Writing', 'Gardening', 'Cleaning', 'Cooking', 'Teaching', 'QA', 'Doctor', 'Copywriter'];
        foreach ($category as $cat) {
            JobCategory::create([
                'category_name' => $cat,
            ]);
        }

        //Programming

        WorkBadges::create([
            'job_category_id' => 1,
            'badge_name' => 'Fast Coder',
            'badge_image' => 'mdi-clock-time-five-outline',
        ]);

        WorkBadges::create([
            'job_category_id' => 1,
            'badge_name' => 'Clean Coding',
            'badge_image' => 'mdi-silverware-clean',
        ]);

        WorkBadges::create([
            'job_category_id' => 1,
            'badge_name' => 'Professional',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 1,
            'badge_name' => 'Great Communicator',
            'badge_image' => 'mdi-message-flash',
        ]);


        //Driving

        WorkBadges::create([
            'job_category_id' => 2,
            'badge_name' => 'Good Driver',
            'badge_image' => 'mdi-car-multiple',
        ]);

        WorkBadges::create([
            'job_category_id' => 2,
            'badge_name' => 'Friendly Driver',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 2,
            'badge_name' => 'Professional Driver',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 2,
            'badge_name' => 'Disciplined Driver',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Plumbing

        WorkBadges::create([
            'job_category_id' => 3,
            'badge_name' => 'Good Plumber',
            'badge_image' => 'mdi-water-pump',
        ]);

        WorkBadges::create([
            'job_category_id' => 3,
            'badge_name' => 'Friendly Plumber',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 3,
            'badge_name' => 'Professional Plumber',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 3,
            'badge_name' => 'Disciplined Plumber',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Digital Marketing

        WorkBadges::create([
            'job_category_id' => 4,
            'badge_name' => 'Good Digital Marketer',
            'badge_image' => 'mdi-account-multiple-check',
        ]);

        WorkBadges::create([
            'job_category_id' => 4,
            'badge_name' => 'Friendly Digital Marketer',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 4,
            'badge_name' => 'Professional Digital Marketer',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 4,
            'badge_name' => 'Disciplined Digital Marketer',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Marketing professional

        WorkBadges::create([
            'job_category_id' => 5,
            'badge_name' => 'Good Marketing Professional',
            'badge_image' => 'mdi-account-multiple-check',
        ]);

        WorkBadges::create([
            'job_category_id' => 5,
            'badge_name' => 'Friendly Marketing Professional',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 5,
            'badge_name' => 'Professional Marketing Professional',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 5,
            'badge_name' => 'Disciplined Marketing Professional',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Sales professional

        WorkBadges::create([
            'job_category_id' => 6,
            'badge_name' => 'Good Sales Professional',
            'badge_image' => 'mdi-account-multiple-check',
        ]);

        WorkBadges::create([
            'job_category_id' => 6,
            'badge_name' => 'Friendly Sales Professional',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 6,
            'badge_name' => 'Professional Sales Professional',
            'badge_image' => 'mdi-account-tie',
        ]); 

        WorkBadges::create([
            'job_category_id' => 6,
            'badge_name' => 'Disciplined Sales Professional',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Photography

        WorkBadges::create([
            'job_category_id' => 7,
            'badge_name' => 'Good Photographer',
            'badge_image' => 'mdi-camera-photo',
        ]);

        WorkBadges::create([
            'job_category_id' => 7,
            'badge_name' => 'Friendly Photographer',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 7,
            'badge_name' => 'Professional Photographer',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 7,
            'badge_name' => 'Disciplined Photographer',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Writing

        WorkBadges::create([
            'job_category_id' => 8,
            'badge_name' => 'Good Writer',
            'badge_image' => 'mdi-pencil-outline',
        ]);

        WorkBadges::create([
            'job_category_id' => 8,
            'badge_name' => 'Friendly Writer',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 8,
            'badge_name' => 'Professional Writer',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 8,
            'badge_name' => 'Disciplined Writer',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Gardening

        WorkBadges::create([
            'job_category_id' => 9,
            'badge_name' => 'Good Gardener',
            'badge_image' => 'mdi-flower',
        ]);

        WorkBadges::create([
            'job_category_id' => 9,
            'badge_name' => 'Friendly Gardener',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 9,
            'badge_name' => 'Professional Gardener',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 9,
            'badge_name' => 'Disciplined Gardener',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Cleaning

        WorkBadges::create([
            'job_category_id' => 10,
            'badge_name' => 'Good Cleaner',
            'badge_image' => 'mdi-broom',
        ]);

        WorkBadges::create([
            'job_category_id' => 10,
            'badge_name' => 'Friendly Cleaner',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 10,
            'badge_name' => 'Professional Cleaner',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 10,
            'badge_name' => 'Disciplined Cleaner',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Cooking

        WorkBadges::create([
            'job_category_id' => 11,
            'badge_name' => 'Good Cook',
            'badge_image' => 'mdi-food-variant',
        ]);

        WorkBadges::create([
            'job_category_id' => 11,
            'badge_name' => 'Friendly Cook',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 11,
            'badge_name' => 'Professional Cook',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 11,
            'badge_name' => 'Disciplined Cook',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Teaching

        WorkBadges::create([
            'job_category_id' => 12,
            'badge_name' => 'Good Teacher',
            'badge_image' => 'mdi-school',
        ]);

        WorkBadges::create([
            'job_category_id' => 12,
            'badge_name' => 'Friendly Teacher',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 12,
            'badge_name' => 'Professional Teacher',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 12,
            'badge_name' => 'Disciplined Teacher',
            'badge_image' => 'mdi-account-heart',
        ]);

        //QA

        WorkBadges::create([
            'job_category_id' => 13,
            'badge_name' => 'Good QA',
            'badge_image' => 'mdi-account-question-outline',
        ]);

        WorkBadges::create([
            'job_category_id' => 13,
            'badge_name' => 'Friendly QA',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 13,
            'badge_name' => 'Professional QA',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 13,
            'badge_name' => 'Disciplined QA',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Doctor

        WorkBadges::create([
            'job_category_id' => 14,
            'badge_name' => 'Good Doctor',
            'badge_image' => 'mdi-account-child',
        ]);

        WorkBadges::create([
            'job_category_id' => 14,
            'badge_name' => 'Friendly Doctor',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 14,
            'badge_name' => 'Professional Doctor',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 14,
            'badge_name' => 'Disciplined Doctor',
            'badge_image' => 'mdi-account-heart',
        ]);

        //Copywriter

        WorkBadges::create([
            'job_category_id' => 15,
            'badge_name' => 'Good Copywriter',
            'badge_image' => 'mdi-account-copy',
        ]);

        WorkBadges::create([
            'job_category_id' => 15,
            'badge_name' => 'Friendly Copywriter',
            'badge_image' => 'mdi-account-voice',
        ]);

        WorkBadges::create([
            'job_category_id' => 15,
            'badge_name' => 'Professional Copywriter',
            'badge_image' => 'mdi-account-tie',
        ]);

        WorkBadges::create([
            'job_category_id' => 15,
            'badge_name' => 'Disciplined Copywriter',
            'badge_image' => 'mdi-account-heart',
        ]);






        
        

        Job::factory()->times(25)->create();
        for ($i = 1; $i <= 25; $i++) {
            PostSkill::create([
                'job' => $i,
                'skill' => rand(1, 2),
            ]);
            PostSkill::create([
                'job' => $i,
                'skill' => rand(3, 4),
            ]);
            PostSkill::create([
                'job' => $i,
                'skill' => rand(5, 6),
            ]);
        }
        Employee::factory()->times(20)->create();
        for ($i = 51; $i <= 72; $i++) {
            UserRoles::create([
                'user_id' => $i,
                'role_id' => 3,
            ]);
        }
        for ($i = 1; $i <= 20; $i++) {
            Employee_Skill::create([
                'employee_id' => $i,
                'skill_id' => rand(1, 2),
            ]);
            Employee_Skill::create([
                'employee_id' => $i,
                'skill_id' => rand(3, 4),
            ]);
            Employee_Skill::create([
                'employee_id' => $i,
                'skill_id' => rand(5, 6),
            ]);
        }

        User::create([
            'first_name' => 'client',
            'last_name' => 'darpan',
            'phone_no' => '12345',
            'Address' => 'Sinamangle',
            'Gender' => 'Male',
            'email' => 'client@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202203281818DSC00425.JPG',
            'profile_path' => 'images/202203281818DSC00425.jpg',
        ]);

        UserRoles::create([
            'user_id' => 73,
            'role_id' => 2,
        ]);

        User::create([
            'first_name' => 'employee',
            'last_name' => 'darpan',
            'phone_no' => '12345',
            'Address' => 'Sinamangle',
            'Gender' => 'Male',
            'email' => 'employee@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202203281818DSC00425.JPG',
            'profile_path' => 'images/202203281818DSC00425.jpg',
        ]);

        UserRoles::create([
            'user_id' => 74,
            'role_id' => 3,
        ]);
        // $faker = Faker\Factory::create();

        Employee::create([
            'title' => 'Programmer',
            'user_id' => 74,
            'qualification' => 'Expert',
            'hourly_rate' => 10000,
            'project_rate' => 100000,
            'experience' => 'I am qualified',
            'employee_type' => 'Individual',
            'Job_Category_ID' =>  rand(1, 3),
        ]);
        Employee_Skill::create([
            'employee_id' => 21,
            'skill_id' => rand(1, 2),
        ]);
        Employee_Skill::create([
            'employee_id' => 21,
            'skill_id' => rand(3, 4),
        ]);
        Employee_Skill::create([
            'employee_id' => 21,
            'skill_id' => rand(5, 6),
        ]);
    }
}
