class LetterBlock < ApplicationRecord
  validates :letter_id, :prose_block_id, presence: true
  
  belongs_to :letter
  belongs_to :prose_block
end
