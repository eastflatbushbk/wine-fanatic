class Review < ApplicationRecord
    belongs_to :user
    belongs_to :wine
    validates :comment, length: { minimum: 2 }
end
