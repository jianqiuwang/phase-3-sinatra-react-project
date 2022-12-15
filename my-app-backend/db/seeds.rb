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
      "image": "https://inv.assets.sincrod.com/1/5/0/31456116051.jpg",
      "location": "Denver, CO",
      "price": 102000
    },
    {
      "description": "Used 2017 Ford F250 XLT",
      "image": "https://images.autotrader.com/scaler/488/366/hn/c/83c06707646d4e82bd803eb9562d5584.jpg",
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
      "image": "https://platform.cstatic-images.com/xlarge/in/v2/88ec3db8-cced-4758-9117-0df61572a167/802938a8-17fe-44c6-940f-614c4c25672d/_RZYFKocjqykJV2UW_p9nTqtDM0.jpg",
      "location": "Phoenix, AZ",
      "price": 81000
    }
  ])

puts "✅ Done seeding!"