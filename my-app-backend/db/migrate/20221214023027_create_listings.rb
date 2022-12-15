class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :description
      t.string :image
      t.string :location
      t.integer :price
      t.timestamps
    end
  end
end
