export default interface Asteroid {
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: [
    {
      miss_distance: {
        miles: string;
      };
      relative_velocity: {
        miles_per_hour: string;
      };
    }
  ];
}
