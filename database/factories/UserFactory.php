<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;


class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    function rand_float($st_num = 0, $end_num = 1, $mul = 1000000)
    {
        if ($st_num > $end_num) return false;
        return mt_rand($st_num * $mul, $end_num * $mul) / $mul;
    }

    public function definition()
    {
        $gender = ['male', 'female', 'other'];
        $picture = ['fake1.jpg', 'fake2.jpg', 'fake3.jpg', '202204201136admin.png'];
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'phone_no' => $this->faker->numerify('##########'),
            'Address' => $this->faker->address(),
            'City' => $this->faker->city(),
            'Province' => $this->faker->state(),
            'about' => " I’m a master coach, best-selling author and a passionate speaker. I’m the founder of the first women-only hedge fund, special counsellor in many corporations across the globe. I’ve found balance between work and life, now I’m a totally happy person, loving mother, inspiring speaker and writer, and firm investor, but it didn’t come easily. I've gone though hundreds of failures and complicated situations. You can use my previous experience in order not to fall into the same trap.
            ",
            'Gender' => Arr::random($gender),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('pass'),
            'profile' => Arr::random($picture),
            'profile_path' => 'images/' . Arr::random($picture),
            'rating' => $this->rand_float(1, 5),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
