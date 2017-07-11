class CreateRepairs < ActiveRecord::Migration
  def change
    create_table :repairs do |t|
      t.integer :customer_id
      t.integer :status
      t.float :price
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
