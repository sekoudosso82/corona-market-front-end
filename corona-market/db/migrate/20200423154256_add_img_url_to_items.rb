class AddImgUrlToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :imgUrl, :string
  end
end
