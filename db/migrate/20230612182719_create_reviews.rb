class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.belongs_to :user, foreign_key: true
      t.belongs_to :wine, foreign_key: true

      t.timestamps
    end
  end
end
