class CreateUserWines < ActiveRecord::Migration[6.1]
  def change
    create_table :user_wines do |t|

      t.timestamps
    end
  end
end
