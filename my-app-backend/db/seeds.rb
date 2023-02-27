puts "🌱 Seeding spices..."

# Seed your database here
Listing.create([
    {
      "description": "Used 2020 Porsche Macan",
      "image": "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002723/WP1AA2A54MLB12715/64a591685647a8c72b0e14f3d56c670b.jpg",
      "location": "Atlanta, GA",
      "price": 56000
    },
    {
      "description": "New 2023 BMW X5 M",
      "image": "https://cdn05.carsforsale.com/0083313b9a09f91923d47fd507d669412f/1280x960/2023-bmw-x5-m-base-awd-4dr-sports-activity-vehicle.jpg",
      "location": "Denver, CO",
      "price": 102000
    },
    {
      "description": "Used 2017 Ford F250 XLT",
      "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q2/667349/2017-ford-f-series-super-duty-first-drive-review-car-and-driver-photo-669187-s-original.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      "location": "Dallas, TX",
      "price": 47000
    },
    {
      "description": "Used 2019 Jeep Grand Cherokee",
      "image": "https://images.carstory.com/4282734122307777206/1/t/1200x-",
      "location": "Boston, MA",
      "price": 40000
    },
    {
      "description": "New 2022 Chevrolet Suburban",
      "image": "https://bgr.com/wp-content/uploads/2022/04/2022-chevrolet-suburban-6.jpg?quality=82&strip=all",
      "location": "Phoenix, AZ",
      "price": 81000
    }
  ])


  Review.create([
    {
      "user_name": "user1",
      "score": 5,
      "comment": "Durable and luxury",
      "listing_id": Listing.all.sample.id
    },
    {
      "user_name": "user2",
      "score": 4,
      "comment": "Nice car! however it is really pricy",
      "listing_id": Listing.all.sample.id
    },
    {
      "user_name": "user3",
      "score": 5,
      "comment": "It never fails me",
      "listing_id": Listing.all.sample.id
    },
    {
      "user_name": "user4",
      "score": 3,
      "comment": "reliability is below average",
      "listing_id": Listing.all.sample.id
    },
    {
      "user_name": "user5",
      "score": 5,
      "comment": "A lot of space",
      "listing_id": Listing.all.sample.id
    },
    {
      "user_name": "user6",
      "score": 3,
      "comment": "The interior of this car is mediocre in its class",
      "listing_id": Listing.all.sample.id
    },
    {
      "user_name": "user7",
      "score": 5,
      "comment": "Powerful Engine",
      "listing_id": Listing.all.sample.id
    }
  ])

 
  
puts "✅ Done seeding!"
