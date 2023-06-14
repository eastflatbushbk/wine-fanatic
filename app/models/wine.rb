class Wine < ApplicationRecord

    has_many :user_wines
    has_many :users, through: :user_wines

    has_many :reviews
    has_many :commented_users, through: :reviews, source: :user
    belongs_to :author, class_name: "User", foreign_key: "user_id"
    
end
