class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :id
      t.string :description
      t.string :image
      t.string :location
      t.integer :price
      t.timestamps
    end
  end
end
