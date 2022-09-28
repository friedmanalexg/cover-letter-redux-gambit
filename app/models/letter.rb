class Letter < ApplicationRecord
  
  
  belongs_to :user
  has_many :letter_blocks, dependent: :destroy
end
