class User < ApplicationRecord
    has_secure_password
    
     has_many :wines
     has_many :users_wines
    #  has_many :wines, through: :users_wines

    has_many :reviews, dependent: :destroy
    has_many :wine_reviews, through: :reviews, source: :wine

    validates :username, presence: true, uniqueness: true
    validates :age, :location, :favorite_varietal, presence: true

end
