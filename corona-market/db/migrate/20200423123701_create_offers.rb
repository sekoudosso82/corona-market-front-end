class CreateOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :offers do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
