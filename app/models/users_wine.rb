class UsersWine < ApplicationRecord
    belongs_to :user
    belongs_to :wine
    
    validates_numericality_of :quantity, greater_than_or_equal_to: 0
end
