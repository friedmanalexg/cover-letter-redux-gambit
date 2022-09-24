class LetterBlock < ApplicationRecord
  belongs_to :letter
  belongs_to :prose_block
end
