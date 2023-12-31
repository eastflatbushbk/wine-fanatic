class Wine < ApplicationRecord
   
     has_many :users_wines
   

    has_many :reviews, dependent: :destroy
    has_many :commented_users, through: :reviews, source: :user
    belongs_to :author, class_name: "User", foreign_key: "user_id"

    before_validation :set_defaults

  def set_defaults
    self.img_url = "https://clipground.com/images/wine-jug-clipart-10.png" if img_url.blank?
  end

    validates :name,presence: true, allow_blank: false
    validates :winery, presence: true, allow_blank: false
    validates :vintage, presence: true, allow_blank: false
    validates :region, presence: true, allow_blank: false
    validates :grape, presence: true, allow_blank: false
    validates :wine_type, presence: true, allow_blank: false
    validate :check_vintage
    validate :check_wine_type

    ALLOWED_TYPES = ["red", "white", "rose", "sparkling", "dessert wines"]
  

   def check_vintage
    
      validates_numericality_of :vintage, less_than_or_equal_to: Time.now.year
   end

   def check_wine_type
         validates_inclusion_of :wine_type, in: ALLOWED_TYPES
   end
    
end
