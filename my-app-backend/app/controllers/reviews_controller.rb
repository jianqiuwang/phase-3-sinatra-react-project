class ReviewsController < ApplicationController
    get '/reviews' do
        reviews = Review.all
        reviews.to_json
    end

    post '/reviews' do
        review=Review.create(
          user_name: params[:user_name],
          score: params[:score],
          comment: params[:comment],
        )
        review.to_json
      end
end