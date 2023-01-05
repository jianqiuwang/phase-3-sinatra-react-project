class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/listings' do 
    listings = Listing.all.order(:created_at)
    listings.to_json(include: [:reviews])
  end

  post '/listings' do
    listing=Listing.create(
      description: params[:description],
      image: params[:image],
      location: params[:location],
      price: params[:price]
    )
    listing.to_json
  end

  patch '/listings/:id' do
    listing=Listing.find(params[:id])
    listing.update(
      description: params[:description],
      image: params[:image],
      location: params[:location],
      price: params[:price]
    )
    listing.to_json(include: [:reviews])
  end

  delete '/listings/:id' do
    listing=Listing.find(params[:id])
    listing.destroy
    listing.to_json
  end

end
