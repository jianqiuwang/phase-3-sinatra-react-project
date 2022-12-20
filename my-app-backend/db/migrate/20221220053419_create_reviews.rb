class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :user_name
      t.integer :score
      t.string :comment
      t.integer :listing_id # this is our foreign key
      t.timestamps
    end
  end
end
