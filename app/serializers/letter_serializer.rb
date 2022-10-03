class LetterSerializer < ActiveModel::Serializer
  attributes :id, :letter_title, :recipient, :company, :job_title, :variable1, :variable2

  has_many :letter_blocks
  has_many :prose_blocks, through: :letter_blocks

  
end
