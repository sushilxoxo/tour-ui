export interface Itinerary {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
  imageUrl: string;
  creator: {
    name: string;
    avatar: string;
  };
  tags: string[];
  rating: number;
  reviewCount: number;
  activities: Activity[];
  components: TripComponent[];
}

export interface Activity {
  day: number;
  title: string;
  items: ActivityItem[];
}

export interface ActivityItem {
  type: 'accommodation' | 'activity' | 'breakfast' | 'dinner';
  time: string;
  title: string;
  description: string;
}

export interface TripComponent {
  id: string;
  type: 'flight' | 'hotel' | 'activity' | 'transport';
  title: string;
  description: string;
  price: number;
  image: string;
  details: {
    [key: string]: string;
  };
  alternatives?: Alternative[];
}

export interface Alternative {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  details: {
    [key: string]: string;
  };
  priceDifference: number;
}