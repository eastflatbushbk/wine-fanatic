class User < ApplicationRecord
    has_secure_password

    has_many :user_wines
    has_many :wines, through: :user_wines

    has_many :reviews, dependent: :destroy
    has_many :wine_reviews, through: :reviews, source: :wine

end
