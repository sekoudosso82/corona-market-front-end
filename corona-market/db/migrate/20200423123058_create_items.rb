class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.integer :price
      t.string :location
      t.string :condition

      t.timestamps
    end
  end
end
