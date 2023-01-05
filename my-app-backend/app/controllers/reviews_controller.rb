class ReviewsController < ApplicationController
    get '/reviews' do
        reviews = Review.all
        reviews.to_json(include: [:listing])
    end

    post '/reviews' do
        review=Review.create(
          user_name: params[:user_name],
          score: params[:score],
          comment: params[:comment],
          listing_id: params[:listing_id]
        )
        review.to_json(include: [:listing])
      end
end