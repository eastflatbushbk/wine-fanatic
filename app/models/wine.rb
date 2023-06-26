class Wine < ApplicationRecord
    # def type
    #     self.name + " " + self.grape
    #   end

     has_many :users_wines
    #  has_many :users, through: :users_wines

    has_many :reviews, dependent: :destroy
    has_many :commented_users, through: :reviews, source: :user
    belongs_to :author, class_name: "User", foreign_key: "user_id"
    
end
